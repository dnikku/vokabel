import {createRouter, createWebHashHistory} from "vue-router"

import VokabelView from "@/views/VokabelView.vue";
import WordsView from "@/views/WordsView.vue";

import SettingsView from "@/views/SettingsView.vue"
import VueDocsView from "@/views/other/VueDocsView.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: VokabelView,
    },
    {
      // will match anything starting with ` /words` and put it under `$route.params.link`
      path: "/words/:link(.*)",
      component: WordsView,
      props: route => ({link: route.params.link})
    },

    {
      path: "/settings",
      name: "settings",
      component: SettingsView,
    },
    {
      path: "/vue-docs",
      name: "vue-docs",
      component: VueDocsView,
    },
  ],
});

export default router;
