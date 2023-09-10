<template>
  <div class="pages">
    <button
        type="button"
        :class="[ 'button--link button--large',
                    { 'is-active': page == selectedPage }]"
        v-for="page in pages"
        :key="page"
        @click='selectedPage = page'
    >
      {{ page }}
    </button>
  </div>

</template>


<script setup lang="ts">
import {computed} from 'vue';

const props = defineProps<{
  page: number,
  totalItems: number,
  pageSize: number,
}>()

const emit = defineEmits(['pageChanged'])

const selectedPage = computed({
  get() {
    return props.page
  },
  set(value) {
    emit('pageChanged', value)
  }
})

const pageCount = computed(() =>
    Math.ceil(props.totalItems / props.pageSize)
)

const pages = computed(() => {
  emit('pageChanged', props.page)
  return Array.from({length: pageCount.value}, (_, i) => i + 1);
})

</script>