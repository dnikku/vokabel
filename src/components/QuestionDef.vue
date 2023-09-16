<template>
  <div class="question">{{ question.nr }}:
    <multiline :text="question.text_de"/>
    <multi-image :images="question.text_images"/>
  </div>
  <div class="question-actions">
    <checkbox label="Show Answer" v-model="value.showAnswer"/>

    <checkbox class="en" v-show="question.text_en" label="Hint EN" v-model="hintEN"/>
    <checkbox class="ro" v-show="question.text_ro" label="Hint RO" v-model="hintRO"/>
  </div>
  <div class="question en" v-show="hintEN">
    <multiline :text="question.text_en"/>
  </div>
  <div class="question ro" v-show="hintRO">
    <multiline :text="question.text_ro"/>
  </div>

  <div class="answer" v-show="value.showAnswer">
    <multiline :text="question.answer_de"/>
    <multi-image :images="question.answer_images"/>
  </div>
  <div class="answer en" v-show="value.showAnswer && hintEN">
    <multiline :text="question.answer_en"/>
  </div>
  <div class="answer ro" v-show="value.showAnswer && hintRO">
    <multiline :text="question.answer_ro"/>
  </div>
  <div class="answer-actions" v-show="value.showAnswer">
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
import {computed, ref} from "vue"
import type {WrappedQuestion} from "@/stores/questionnaire"

import Checkbox from "@/components/Checkbox.vue"
import Multiline from "@/components/Multiline.vue"
import MultiImage from "@/components/MultiImage.vue"

const props = defineProps<{
  value: WrappedQuestion,
}>()

const hintRO = ref(false)
const hintEN = ref(false)

const question = computed(() => props.value.question)


</script>