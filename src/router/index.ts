import {createRouter, createWebHashHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import AdminView from "../views/AdminView.vue"
import SettingsView from "../views/SettingsView.vue"

import VueDocsView from "../views/other/VueDocsView.vue"
import WordsView from "@/views/WordsView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      // will match anything starting with ` /words` and put it under `$route.params.link`
      path: "/words/:link(.*)",
      component: WordsView,
      props: route => ({link: route.params.link})
    },

    {
      path: "/admin",
      name: "admin",
      component: AdminView,
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
