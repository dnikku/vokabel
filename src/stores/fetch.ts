import { ref, computed } from "vue"
import { defineStore } from "pinia"


export const useFetchStore = defineStore('fetch', {
    state: () => ({
        fetching: false
    }),

    actions: {
        async fetchText(url: string) {
            this.fetching = true
            try {
                let response = await fetch(url)
                if (response.status != 200) {
                    throw new Error(`Fetch ${url} failed (http ${response.status})`);
                }
                // console.trace(`(fetchContent ${url}) => (http ${response.status})`)
                
                let content = await response.text()

                console.debug(`(fetchContent ${url}) => \n${content}`)
                return content
            } finally {
                this.fetching = false
            }
        }
    }
})
