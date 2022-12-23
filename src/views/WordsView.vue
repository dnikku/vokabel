<template>
  <div class="words">
    <span><a href="#" @click="openLink" :title="link" >{{ name }}</a></span>

    <table>
      <thead>
      <tr>
        <th>Text</th>
        <th>Translation</th>
      </tr>
      </thead>

      <tbody v-for="word of words">
        <tr>
          <td>{{ word.text }}</td>
          <td>{{ word.translation }}</td>
        </tr>
      </tbody>

    </table>
  </div>
</template>

<style scoped>
.words {
  display: flex;
  flex-direction: column;
}
</style>

<script lang="ts">
/**
 *  Display all words from a selected Node(WordsIndex) recursively.
 */

import {defineComponent, ref} from "vue"

import {useMarkdownStore} from "@/stores/markdown"
import type {Word} from "@/stores/markdown"

export default defineComponent({
  props: {
    link: String
  },

  setup() {
    const markdown = useMarkdownStore()

    const name = ref("N/A")
    const words = ref(null as Word[] | null)

    return {
      name,
      words,

      findNode: markdown.findNode,
      getWords: markdown.getWords,
      getAbsoluteUrl: markdown.getAbsoluteUrl
    }
  },

  async mounted() {
    try {
      let node = await this.findNode(this.link as string)
      this.name = node?.name || "N/A"

      if (node != null) {
        this.words = this.getWords(node)
      }
    } catch (err) {
      console.error(`(findNode '${this.link}) => failed(${err})'`)
    }
  },

  methods: {
    openLink() {
      let url = this.getAbsoluteUrl(this.link as string)

      // see: https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window

      // @ts-ignore
      window.open(url, '_blank').focus()
    }
  }

})

</script>