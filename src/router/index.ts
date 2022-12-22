import {createRouter, createWebHashHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import AdminView from "../views/AdminView.vue"
import SettingsView from "../views/SettingsView.vue"

import VueDocsView from "../views/other/VueDocsView.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
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
