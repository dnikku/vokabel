<template>
  <div v-if="images">
    <img :src="url" v-for="url in images" alt="Could not load image."/>
  </div>
</template>

<style scoped>
</style>

<script setup lang="ts">

const props = defineProps<{
  images?: Array<string>
}>()

</script>