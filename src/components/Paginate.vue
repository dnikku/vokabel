<template>
  <div class="pages">
    <button
        type="button"
        :class="[ 'button--link button--large',
                    { 'is-active': page == selectedPage }]"
        v-for="page in pages" :key="page"
        @click='selectedPage = page'
    >
      {{ page }}
    </button>
  </div>

</template>


<script setup lang="ts">
import {computed} from 'vue';


const props = defineProps<{
  modelValue: number,
  items: Array<Object>,
  pageSize: number,
}>()

const emit = defineEmits(['update:modelValue'])

const selectedPage = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit("update:modelValue", value)
  }
})

const pageCount = computed(() =>
    Math.ceil(props.items.length / props.pageSize)
)

const pages = computed(() => {
  return Array.from({length: pageCount.value}, (_, i) => i + 1);
})

</script>