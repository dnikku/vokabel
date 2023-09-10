<template>
  <span>
    <input :id="'checkbox-' + $.uid" type="checkbox" v-model="checked" :disabled="disabled"/>
    <label :for="'checkbox-' + $.uid">{{ label }}</label>
  </span>
</template>

<script setup lang="ts">
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