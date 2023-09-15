<template>
  <div class="content">

    <dropdown v-model="selectedTopic" @update:model-value="selectedPage = 1"
              :options="thema.topics" option-value="name" option-label="name">
    </dropdown>

    <paginate :items="selectedTopic.questions" :page-size="settings.pageSize"
              v-model="selectedPage"/>
    <div class="q-questions">
      <div class="q-question" v-for="question in viewQuestions"
           :key="`q-${selectedTopic.id}-${question.nr}`">
        <question-def :value="question"/>
      </div>
    </div>
    <paginate :items="selectedTopic.questions" :page-size="settings.pageSize"
              v-model="selectedPage"/>

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
</style>


<script setup lang="ts">
import {computed, ref} from "vue";
import {useQuestionnaireStore} from "@/stores/questionnaire"
import type {Question} from "@/stores/questionnaire";
import QuestionDef from "@/components/QuestionDef.vue"
import Paginate from "@/components/Paginate.vue";
import Dropdown from "@/components/Dropdown.vue";
import {useSettingsStore} from "@/stores/settings";

const settings = useSettingsStore()
const questionnaire = useQuestionnaireStore()

const thema = questionnaire.root
await questionnaire.loadThema(thema)

const selectedTopic = ref(thema.topics[0])
const selectedPage = ref(1)

let unique = 0;
const viewQuestions = computed(() => {
  unique += 1
  // console.log(`${unique} <${selectedTopic.value.name}> changePage(${selectedPage.value}, ${pageSize.value}).`)
  return selectedTopic.value.questions.slice(
      (selectedPage.value - 1) * settings.pageSize,
      selectedPage.value * settings.pageSize)
})


async function copyToClipboard() {
  try {
    await questionnaire.copyToClipboard(viewQuestions.value)
  } catch (err) {
    alert("Failed to copy." + err)
  }
}

async function mergeFromClipboard() {
  try {
    await questionnaire.mergeFromClipboard(viewQuestions.value)
  } catch (err) {
    alert("Failed to copy." + err)
  }
}


</script>