<template>
  <div class="content">

    <dropdown v-model="selectedTopic" @update:model-value="selectedPage = 1"
              :options="thema.topics" option-value="name" option-label="name">
    </dropdown>

    <div class="header">
      <paginate :items="selectedTopic.questions" :page-size="settings.pageSize"
                v-model="selectedPage"/>
      <checkbox v-model="showAllAnswers" label="Show Answer" style="width: 122px" />
    </div>
    <div class="q-questions">
      <div class="q-question" v-for="q in viewQuestions"
           :key="`q-${selectedTopic.id}-${q.question.nr}`">
        <question-def :value="q"/>
      </div>
    </div>
    <div class="header">
      <paginate :items="selectedTopic.questions" :page-size="settings.pageSize"
                v-model="selectedPage"/>
      <checkbox v-model="showAllAnswers" label="Show Answer" style="width: 122px" />
    </div>

    <div class="actions">
      <a :href="thema.questionsUrl" target="_blank">
        <font-icon icon="fa-solid fa-cannabis"/>
        goto json
      </a>

      <button @click="copyToClipboard()">Copy</button>
      <button @click="mergeFromClipboard()">Paste and Merge</button>
    </div>

  </div>
</template>

<style scoped>
.actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  padding-top: 4px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>


<script setup lang="ts">
import {computed, reactive, ref, toRef} from "vue";
import {useQuestionnaireStore} from "@/stores/questionnaire"
import {useSettingsStore} from "@/stores/settings"

import QuestionDef from "@/components/QuestionDef.vue"
import Paginate from "@/components/Paginate.vue"
import Dropdown from "@/components/Dropdown.vue"
import Checkbox from "@/components/Checkbox.vue"

const settings = useSettingsStore()
const questionnaire = useQuestionnaireStore()

const thema = questionnaire.root
await questionnaire.loadThema(thema)

const selectedPage = ref(1)

// FIXME: ??
const selectedTopic = toRef(thema.topics[0])


let unique = 0;
const viewQuestions = computed(() => {
  unique += 1
  // console.log(`${unique} <${selectedTopic.value.name}> changePage(${selectedPage.value}, ${pageSize.value}).`)
  const arr = selectedTopic.value.questions.slice(
      (selectedPage.value - 1) * settings.pageSize,
      selectedPage.value * settings.pageSize)

  return arr.map(p => (reactive({question: {...p}, showAnswer: false})))
})

const showAllAnswers = computed({
  get() {
    return viewQuestions.value.every(p => p.showAnswer)
  },
  set(value) {
    console.info(`show-all: ${value}`)
    viewQuestions.value.forEach(p => p.showAnswer = value)
  }
})

async function copyToClipboard() {
  try {
    await questionnaire.copyToClipboard(selectedTopic.value, viewQuestions.value.map(p => p.question))
  } catch (err) {
    alert("Failed to copy." + err)
  }
}

async function mergeFromClipboard() {
  try {
    await questionnaire.mergeFromClipboard(selectedTopic.value)
  } catch (err) {
    alert("Failed to copy." + err)
  }
}


</script>