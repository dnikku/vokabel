<template>
  <div class="level-0">
    <a href="#"> {{ node.name }} </a>

    <div class="level-0 level-1">
      <MySelf :node="child" v-for="child in node.children"/>
    </div>

  </div>
</template>

<style scoped>
.level-0 {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.level-1 {
  padding-left: 1em;
}

</style>

<!--
 list the entire vocabulary indexes.
-->
<script lang="ts">
import {defineComponent} from 'vue'
import type {WordsIndex} from "@/stores/markdown"

export default defineComponent( {
  name: "MySelf",

  props: {
    node: Object
  },

  setup() {
  },

  mounted() {
    // @ts-ignore
    let node = this.node as WordsIndex

    // console.trace(`(WordsIndex mounted '${node?.link}') => done.`)
  }
})
</script>