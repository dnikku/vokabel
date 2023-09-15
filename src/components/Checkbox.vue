<template>
  <span>
    <label class="form-control">
      <input type="checkbox" v-model="checked" :disabled="disabled"/>
      {{ label }}
    </label>
  </span>
</template>

<script setup lang="ts">
// for more styling see: https://moderncss.dev/pure-css-custom-checkbox-style/

import {computed} from "vue";

const props = defineProps<{
  modelValue: boolean,
  label?: string,
  disabled?: boolean
}>()

const emit = defineEmits(["update:modelValue"])

const checked = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit("update:modelValue", value)
  }
})

</script>