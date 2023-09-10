import {ref } from "vue"
import {defineStore} from "pinia"

type StubUrl = {
    matchUrl: RegExp
    content: string
}

/**
 *  wrapper as store for fetch api (can be later replaced with axios if need it)
 *  Allows stubbing for testing purpose.
 */
export const useFetchStore = defineStore('fetch', () => {
    const fetching = ref(false)
    const stub = ref(null as Array<StubUrl> | null)

    async function fetchText(url: string) {
        fetching.value = true
        try {
            let stubContent = tryStubUrl(url)
            if (stubContent) return stubContent

            let response = await fetch(url, {cache: "no-store"})
            if (response.status != 200) {
                throw new Error(`Fetch ${url} failed (http ${response.status})`);
            }

            let content = await response.text()
            //console.debug(`(fetchContent ${url}) => \n${content}`)
            return content
        } finally {
            fetching.value = false
        }
    }

    async function fetchJson(url: string) {
        fetching.value = true
        try {
            let stubContent = tryStubUrl(url)
            if (stubContent) return stubContent

            let response = await fetch(url, {cache: "no-store"})
            if (response.status != 200) {
                throw new Error(`Fetch ${url} failed (http ${response.status})`);
            }

            let content = await response.json()
            //console.debug(`(fetchContent ${url}) => \n${content}`)
            return content
        } finally {
            fetching.value = false
        }
    }

    function stubUrl(matchUrl: RegExp, content: string) {
        stub.value = [
            ...(stub.value || []),
            {matchUrl, content}]
        //console.debug(`(stub) =>`, stub.value)
    }

    function tryStubUrl(url: string) {
        if (!stub.value) return null // stub not active

        for (let pair of stub.value) {
            if (url.match(pair.matchUrl)) {
                return pair.content
            }
            //console.debug(`(tryStubUrl '${url}') => not mach (regex ${pair.matchUrl})`)
        }

        throw new Error(`Fetch '${url}' failed (HTTP 404)`);
    }

    return {
        fetching,
        fetchText,
        fetchJson,
        stubUrl
    }
})
