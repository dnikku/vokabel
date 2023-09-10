import {defineStore} from "pinia"
import {useStorage} from '@vueuse/core'
import {computed} from "vue";


export const useSettingsStore = defineStore('settings', () => {
    const showResolution = useStorage("show-resolution", false)
    const pageSize = useStorage("page-size", 10)

    const resolution = computed(() =>
        showResolution.value ? `(W x H: ${window.innerWidth}x${window.innerHeight})` : ""
    )

    return {
        pageSize: pageSize,
        showResolution,
        resolution
    }
})