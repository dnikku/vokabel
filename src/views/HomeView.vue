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

}
</style>

<script lang="ts">
import {useMarkdownStore} from "@/stores/markdown"
import WordsIndex from "@/components/WordsIndex.vue"
import {storeToRefs} from "pinia";

export default {
  components: {WordsIndex},

  setup() {
    const markdown = useMarkdownStore()
    const {root} = storeToRefs(markdown)

    // simulate async root loading
    markdown.getRoot().then()

    return {root}
  }
}
</script>
