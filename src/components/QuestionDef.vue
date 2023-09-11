<template>
  <div class="question">{{ value.nr }}:
    <multiline :text="value.text_de"/>
  </div>
  <div class="question-actions">
    <checkbox label="Show Answer" v-model="showAnswer"/>
    <checkbox class="en" v-show="value.text_en" label="Hint EN" v-model="hintEN"/>
    <checkbox class="ro" v-show="value.text_ro" label="Hint RO" v-model="hintRO"/>
  </div>
  <div class="question en" v-show="hintEN">
    <multiline :text="value.text_en"/>
  </div>
  <div class="question ro" v-show="hintRO">
    <multiline :text="value.text_ro"/>
  </div>

  <div class="answer" v-show="showAnswer">
    <multiline :text="value.answer_de"/>
  </div>
  <div class="answer en" v-show="showAnswer && hintEN">
    <multiline :text="value.answer_en"/>
  </div>
  <div class="answer ro" v-show="showAnswer && hintRO">
    <multiline :text="value.answer_ro"/>
  </div>
  <div class="answer-actions" v-show="showAnswer">
    <button>Learn it</button>
    <button>Re-learn</button>
  </div>
</template>

<style scoped>
.question {
  font-weight: bold;
}

.answer {
  padding-top: 8px;
  color: #333;
}

.en {
  color: #555;
  font-style: italic;
}

.ro {
  color: #777;
  font-style: italic;
}

.question-actions {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  padding-top: 4px;
}

.answer-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  padding-top: 4px;
}


</style>

<script setup lang="ts">
import {ref} from "vue";
import Checkbox from "@/components/Checkbox.vue";
import type {Question} from "@/stores/questionnaire";
import Multiline from "@/components/Multiline.vue";

const props = defineProps<{
  value: Question
}>()


const showAnswer = ref(false)
const hintRO = ref(false)
const hintEN = ref(false)


</script>