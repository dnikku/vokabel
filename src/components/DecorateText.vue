<template>
  <div>
    <template v-for="chop of textChops">
      <br v-if="chop.br" />
      <span v-else :class="{ bold: chop.bold }">&nbsp;{{ chop.text }}&nbsp;</span>
    </template>
  </div>

</template>

<style scoped>
.bold {
  font-weight: bold;
}
</style>


<script lang="ts">
import {chopText} from "@/stores/markdown";

/**
 * Render the text, interpreting <br/>, *
 */
export default {
  props: {
    value: String
  },

  computed: {
    textChops() : Array<{ bold?: boolean; br?: boolean; text?: string }> {
      // @ts-ignore
      const value = this.value || ""

      return chopText(value)
    }
  }
}
</script>
