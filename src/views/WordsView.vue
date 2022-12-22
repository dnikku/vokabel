<template>
  <div class="words">
    <span>link: {{ link }}</span>
    <span>name: {{ name }}</span>

    <table>
      <thead>
      <tr>
        <th>Text</th>
        <th>IPE</th>
        <th>Translation</th>
      </tr>
      </thead>

      <tbody v-for="word of words">
        <tr>
          <td>{{ word.text }}</td>
          <td>{{ word.phonetic }}</td>
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
    }
  },

  async mounted() {
    console.debug(`(words :link '${this.link}') => ...`)

    try {
      let node = await this.findNode(this.link as string)
      if (node == null) return
      console.debug(`(words-0 :link '${this.link}') => `, node)

      this.name = node.name || "N/A"
      this.words = this.getWords(node)

      console.debug(`(words :link '${this.link}') => `, this.words)
    } catch (err) {
      console.error(`(findNode '${this.link}) => failed(${err})'`)
    }
  }

})

</script>