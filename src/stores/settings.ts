import {defineStore} from "pinia"
import { useStorage } from '@vueuse/core'


export const useSettingsStore = defineStore('settings', () => {
    const states = useStorage('settings', {} as any)

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