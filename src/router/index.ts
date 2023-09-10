import {createRouter, createWebHashHistory} from "vue-router"

import VokabelView from "@/views/VokabelView.vue";
import WordsView from "@/views/WordsView.vue";

import QuestionnaireView from "@/views/QuestionnaireView.vue";
import QuestionnaireTrainerView from "@/views/QuestionnaireTrainerView.vue";

import SettingsView from "../views/SettingsView.vue"
import VueDocsView from "../views/other/VueDocsView.vue"

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: "/vokabel",
            name: "vokabel",
            component: VokabelView,
            meta: {title: "Ana's Vakabel"}
        },
        {
            // will match anything starting with ` /words` and put it under `$route.params.link`
            path: "/words/:link(.*)",
            component: WordsView,
            props: route => ({link: route.params.link})
        },

        {
            path: "/sks-fragen",
            name: "sks-fragen",
            component: QuestionnaireView,
            meta: {title: "Nicu's SKS"}
        },
        {
            path: "/sks-trainer",
            name: "sks-trainer",
            component: QuestionnaireTrainerView,
            meta: {title: "Nicu's SKS"}
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

        {
            path: "/:pathMatch(.*)",
            redirect: "/sks-fragen"
        }
    ],
});

// inspired from: https://mokkapps.de/vue-tips/dynamically-change-page-title
router.beforeEach((to, from) => {
    if (to.meta["title"] != null) {
        document.title = (to.meta["title"] as string)
    }
})

export default router;
