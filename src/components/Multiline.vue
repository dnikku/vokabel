<template>
  <span>{{ firstLine }}</span>
  <div v-for="line in nextLines">{{ line }}</div>
</template>

<script setup lang="ts">
import {ref, watchEffect} from 'vue'

const props = defineProps<{
  text?: string
}>()

const firstLine = ref("")
const nextLines = ref([] as Array<string>)

watchEffect(() => {
  let arr = (props.text || "").split("\n")
  // console.log(`(lines '${props.text}') => `, arr)
  firstLine.value = arr[0];

  nextLines.value = arr.slice(1)
})

</script>