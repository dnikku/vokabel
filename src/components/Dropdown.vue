<template>
  <select class="dropdown" v-model="selected">
    <option v-for="option in options" :value="getOptionValue(option)" :key="getOptionValue(option)">
      {{getOptionLabel(option)}}
    </option>
  </select>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  modelValue: any,
  options: Array<any>,
  optionValue?: string,
  optionLabel?: string,
}>()

const emit = defineEmits(["update:modelValue"])

const selected = computed({
  get() {
    let value = getOptionValue(props.modelValue)
    // console.log("dropdown: get", value)
    return value
  },
  set(value) {
    const option = props.options.find(p => getOptionValue(p) == value)
    // console.log("dropdown: option", option)
    emit("update:modelValue", option)
  }
})

function getOptionValue(option: any) {
  if (props.optionValue != null)
    return option[props.optionValue]
  return option
}
function getOptionLabel(option: any) {
  if (props.optionLabel != null)
    return option[props.optionLabel]
  return option
}

</script>