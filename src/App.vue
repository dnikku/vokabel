<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/others/HelloWorld.vue";
</script>

<template>
  <div class="menu">
    <RouterLink class="menu-link" to="/">VOKABEL</RouterLink>
    <RouterLink class="menu-link" to="/admin">Admin</RouterLink>
    <RouterLink class="menu-link" to="/settings">@you</RouterLink>
  </div>

  <div id="my-content">
    <RouterView />
  </div>

  <div id="my-footer">
    <span id="my-copywrite">&copy; 2022 - present
      <a href="https://github.com/dnikku/vokabel" title="Source code">dnikku</a>
    </span>
  </div>
</template>
