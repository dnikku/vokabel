<template>
  <div id="my-header">
    <div class="menu">
      <router-link class="menu-link" to="/"><font-icon icon="fa-solid fa-house" /> VOKABEL</router-link>
      <router-link class="menu-link" to="/admin"><font-icon icon="fa-solid fa-gear" /> Admin</router-link>
      <router-link class="menu-link" to="/settings"><font-icon icon="fa-solid fa-user" /> me</router-link>
    </div>
  </div>

  <div id="my-body">
    <!-- see: https://stackoverflow.com/questions/70465526/unable-to-mark-vue-setup-function-as-async -->
    <router-view v-slot="{ Component }">
      <suspense timeout="0">
        <template #default>
          <component :is="Component"></component>
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </suspense>
    </router-view>
  </div>

  <div id="my-footer">
    <span id="my-copywrite">&copy; 2022 - present dnikku</span>
    <a href="https://github.com/dnikku/vokabel" title="Source code">
      <font-icon icon="fa-brands fa-github" />
    </a>
    <span v-if="resolution">{{ resolution }}</span>
  </div>
</template>


<script lang="ts">
import { RouterLink, RouterView } from "vue-router"
import {useSettingsStore} from "@/stores/settings";

export default {
  setup() {
    const settingsStore = useSettingsStore()

    return {
      settingsStore
    }
  },

  computed: {
    resolution() {
      return this.settingsStore.states.resolution
    }
  }
}

</script>

