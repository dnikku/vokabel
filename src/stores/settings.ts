import {defineStore} from "pinia"
import {ref} from "vue"


export const useSettingsStore = defineStore('settings', () => {
    const states = ref({} as any)

    function toggleShowResolution() {
        if (states.value.resolution != null) {
            delete states.value.resolution
        } else {
            states.value.resolution =`(W x H: ${window.innerWidth}x${window.innerHeight})`
        }

    }

    return {
        states,

        toggleShowResolution
    }
})