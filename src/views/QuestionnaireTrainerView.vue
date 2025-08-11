<template>
  <div class="content">

    <div class="header">
      <dropdown v-model="selectedTopic" @update:model-value="learning.start"
                :options="thema.topics" option-value="name" option-label="name">
      </dropdown>
      <checkbox v-model="showExtra" label="Extra" />
    </div>

    <div class="trainer-actions" v-show="showExtra">
      <button class="border-blue" @click="learning.start">Start</button>
      <button class="border-red" @click="learning.clear">Clear</button>
    </div>

    <div class="q-questions">
      <div class="q-question" v-for="q in viewQuestions"
           :key="`q-${selectedTopic.id}-${q.question.nr}`">
        <div class="q-actions">
          <button class="green" @click="() => learning.learnQuestion(q, 'yes')">Learned</button>
          <button class="yellow" @click="() => learning.learnQuestion(q, 'not')">Re-learn</button>
          <button class="red" @click="() => learning.learnQuestion(q, 'not-not')">Re-learn(quick)
          </button>
          <button class="red" @click="() => learning.learnQuestion(q, 'skip')">Skip</button>
        </div>
        <question-def :value="q" />
      </div>
    </div>

    <div class="footer">
      <span>
        Learning: {{ learning.current + 1 }}/{{ learning.questions.length }}.
      </span>
      <span>
        Learned: {{ totalLearned }}.
      </span>
      <span>
        Not-Learned: {{ totalNotLearned }}.
      </span>
    </div>

  </div>
</template>

<style scoped>

.header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  padding-top: 4px;
}

.footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 16px;
  gap: 16px;
  color: #333;
}


.trainer-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  padding-top: 12px;
}

.q-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  padding-bottom: 12px;
}

button {
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  border: none;
}

.green {
  background-color: #04AA6D;
}

.blue {
  background-color: #008CBA;
}

.yellow {
  background-color: #ff9800;
}

.red {
  background-color: #f44336;
}


.border-blue {
  background-color: white;
  color: black;
  border: 2px solid #008CBA;
}

.border-red {
  background-color: white;
  color: black;
  border: 2px solid #f44336;
}

</style>

<script setup lang="ts">
import { computed, reactive, ref, toRef } from 'vue';
import { type Question, useQuestionnaireStore } from '@/stores/questionnaire';

import QuestionDef from '@/components/QuestionDef.vue';
import Dropdown from '@/components/Dropdown.vue';
import Checkbox from '@/components/Checkbox.vue';

const questionnaire = useQuestionnaireStore();

const thema = questionnaire.root;
await questionnaire.loadThema(thema);

// FIXME: ??
const selectedTopic = toRef(thema.topics[0]);

const showExtra = ref(false);

/*
all questions =>
 all not learned questions in memory, sort random
 current = 0

 - show current question
  learn(q) => q.learned = 0, and persist
  re-learn(q) => q.learned = 1, and persist
  re-learn(quick)(q) => q.learned = 2, and persist
  next question, jump to 'show current question'

 */


const learning = reactive({
  questions: [] as Question[],
  current: 0,

  // learned state, key is question nr, value is learned state
  learned: {} as Record<string, number>,

  start() {
    console.info(`Start Learning: ${selectedTopic.value.name}`);

    learning.learned = JSON.parse(localStorage.getItem(`learned-${selectedTopic.value.name}`) || '{}');

    learning.questions = selectedTopic.value.questions
      .filter(p => learning.learned[p.nr] != 0) // filter learned
      .sort(() => Math.random() - 0.5) // shuffle
    ;

    learning.current = 0;
  },

  clear() {
    if (!confirm('Are you sure you want to clear the learning?')) {
      return;
    }

    console.info(`Clear Learning: ${selectedTopic.value.name}`);

    localStorage.removeItem(`learned-${selectedTopic.value.name}`);

    this.start();
  },

  learnQuestion(q: any, action: 'yes' | 'not' | 'not-not' | 'skip') {
    console.info(`Learned: ${q.question.nr} - ${action}`);

    if (action === 'yes') {
      q.question.learned = 0; // learned
    } else if (action === 'not') {
      q.question.learned = 1; // re-learn
    } else if (action === 'not-not') {
      q.question.learned = 2; // re-learn quick
    } else if (action === 'skip') {
      // do nothing, just skip
    }

    if (action !== 'skip') {
      // persist learned state
      learning.learned[q.question.nr] = q.question.learned;
      localStorage.setItem(`learned-${selectedTopic.value.name}`, JSON.stringify(learning.learned));
    }

    // next question
    if (learning.current < learning.questions.length - 1) {
      learning.current++;
    } else {
      this.start();
    }
  },
});


const viewQuestions = computed(() => {
  const selected = [learning.questions[learning.current]];
  return selected.map(p => (reactive({ question: { ...p }, showAnswer: false })));
});

const totalLearned = computed(() => {
  return Object.values(learning.learned).filter(v => v === 0).length;
});
const totalNotLearned = computed(() => {
  return Object.values(learning.learned).filter(v => v != 0).length;
});


learning.start();
</script>
