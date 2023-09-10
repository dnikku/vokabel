<template>
  <div class="about">
    <h3>Settings</h3>

    <div>
      <checkbox v-model="showResolution" label="Show Resolution"/>
      <span v-show="showResolution">{{ resolution }}</span>
    </div>

    <div>
      Page Size: <dropdown v-model="pageSize" :options="pageSizes" ></dropdown>
      TT: {{pageSize}}

    </div>
  </div>
</template>


<script setup lang="ts">
import {ref} from "vue";
import Checkbox from "@/components/Checkbox.vue"
import Dropdown from "@/components/Dropdown.vue";
import {useSettingsStore} from "@/stores/settings"

const {showResolution, resolution} = useSettingsStore()

const pageSizes = ref([5, 10, 20])
const pageSize = ref(10)


</script>