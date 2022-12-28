<template>
  <input type="checkbox"
         :checked="modelValue"
         @input="(event) => $emit('update:modelValue', (event.target as any)?.value)"
         :id="id"
         class="hidden"
  />
  <label :for="id">
    <font-icon v-show="modelValue" icon="fa-regular fa-square-check" />
    <font-icon v-show="!modelValue" icon="fa-regular fa-square" />
    {{ label }}
  </label>
</template>

<style scoped>
.hidden {
  display: none;
}
</style>


<script lang="ts">
// https://dev.to/maxwelladapoe/creating-a-custom-checkbox-component-in-vue-3-a-better-approach-2jjd

export default {
  props: {
    modelValue: Boolean,
    label: String,
    id: String
  },
  emits: ['update:modelValue'],

  methods: {

  }

}
</script>