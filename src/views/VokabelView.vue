<template>
  <div class="content">
    <WordsIndex :node="root"/>
  </div>
</template>


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
