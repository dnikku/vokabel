<template>
  <div>

    <h3>Settings</h3>

    <div class="settings">
      <div>
        Page Size:
        <dropdown v-model="settings.pageSize" :options="pageSizes"></dropdown>
      </div>

      <div>
        <checkbox v-model="settings.showResolution" label="Show Resolution"/>
      </div>

      <span v-show="settings.showResolution">
        {{ settings.resolution }}
      </span>

    </div>
  </div>
</template>

<style scoped>
.settings {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  padding-top: 8px;
}

</style>


<script setup lang="ts">
import {reactive} from "vue"
import Checkbox from "@/components/Checkbox.vue"
import Dropdown from "@/components/Dropdown.vue"
import {useSettingsStore} from "@/stores/settings"

const settings = useSettingsStore()

const pageSizes = reactive([3, 5, 10, 20])

</script>