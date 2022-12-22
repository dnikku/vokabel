<template>
  <div class="home">
    <WordsIndex :node="root"/>

    <div>{{ root }}</div>

  </div>
</template>

<style>
.home {
  /* for debugging purpose
  border: 2px solid blue;
   */

}
</style>

<script lang="ts">
import {storeToRefs} from "pinia"

import {useMarkdownStore} from "@/stores/markdown"
import WordsIndex from "@/components/WordsIndex.vue"

export default {
  components: {WordsIndex},

  setup() {
    const markdown = useMarkdownStore()
    const {root} = storeToRefs(markdown)

    return {root}
  }
}
</script>
