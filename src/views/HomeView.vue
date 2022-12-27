<template>
  <div class="home">
    <WordsIndex :node="root"/>
  </div>
</template>

<style>
.home {
  /* for debugging purpose
  border: 2px solid blue;
   */

  width: 100%;

}
</style>

<script lang="ts">
import {useMarkdownStore} from "@/stores/markdown"
import WordsIndex from "@/components/WordsIndex.vue"
import {storeToRefs} from "pinia";

export default {
  components: {WordsIndex},

  async setup() {
    const markdown = useMarkdownStore()
    let root = await markdown.getRoot()

    return {root}
  }
}
</script>
