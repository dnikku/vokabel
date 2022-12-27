<template>
  <div class="level-0">
    <div class="line">
      <router-link :to="'/words/' + nodeTyped.link">
        <font-icon icon="fa-solid fa-graduation-cap" />
        {{ nodeTyped.name }}
      </router-link>
      <router-link :to="'/words/' + nodeTyped.link">
        <font-icon icon="fa-solid fa-list" />
      </router-link>
    </div>

    <div class="level-0 level-1">
      <MySelf :node="child" v-for="child in nodeTyped.children"/>
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

.line {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1em;
}

</style>

<!--
 list the entire vocabulary indexes.
-->
<script lang="ts">
import {defineComponent} from 'vue'
import type {WordsIndex} from "@/stores/markdown"
import {FontIcon} from "@/assets/FontIcons";

export default defineComponent( {
  name: "MySelf",
  components: {FontIcon},

  props: {
    node: Object
  },

  computed: {
    /**
     *  make typescript happy, :)
     */
    nodeTyped() : WordsIndex {
      return this.node as WordsIndex
    }
  }

})
</script>