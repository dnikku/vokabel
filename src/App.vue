<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/others/HelloWorld.vue";
</script>

<template>
  <div class="menu">
    <router-link class="menu-link" to="/">VOKABEL</router-link>
    <router-link class="menu-link" to="/admin">Admin</router-link>
    <router-link class="menu-link" to="/settings">@you</router-link>
  </div>

  <div id="my-content">
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
    <span id="my-copywrite">&copy; 2022 - present
      <a href="https://github.com/dnikku/vokabel" title="Source code">dnikku</a>
    </span>
  </div>
</template>
