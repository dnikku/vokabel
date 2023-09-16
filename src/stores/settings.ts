import {defineStore} from "pinia"
import {useLocalStorage} from '@vueuse/core'
import {computed} from "vue";


export const useSettingsStore = defineStore('settings', () => {
    const showResolution = useLocalStorage("settings:show-resolution", false)
    const pageSize = useLocalStorage("settings:page-size", 10)

    const resolution = computed(() => {
        console.info(`show-resolution: ${showResolution.value}`)
        return showResolution.value ? `(W x H: ${window.innerWidth}x${window.innerHeight})` : ""
    })

    const showCopyPaste = useLocalStorage("settings:show-copy-paste", false)

    return {
        pageSize,
        showResolution,
        resolution,
        showCopyPaste,
    }
})