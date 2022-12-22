import { ref, computed } from "vue"
import { defineStore } from "pinia"
import { useFetchStore } from "./fetch"

export type Word = {
    text: string
    phonetic: string
    translation: string
    sentence: string
}

export type WordsIndex = {
    name: string
    link: string
    isIndex: boolean
    children?: Array<WordsIndex>
    words?: Array<Word>
    isFetched: boolean
}

function parseLink(str: string): any {
    const regexp = /\[([^\]]*)]\(([^\)]*)\)/

    const groups = str.match(regexp)
    return groups ? { name: groups[1], link: groups[2] } : null
}

/**
 * Converts a markdown index into a  javascript array
 * @param content
 */
export function parseIndex(content: string)
    : { name: string, links: Array<{ name: string, link: string }> } {

    let lines = content
        .split(/\r?\n/) // split by newline
        .map(p => p.trim())
        .filter(p => p.length > 0) // remove empty lines

    let matchName = lines.find(p => p.startsWith("##"))
    let name = matchName ? matchName.substring(2).trim() : ""

    let links = lines
        .filter(p => p.startsWith("|"))
        .slice(2) // skip header and separator
        .map(p => p.split("|").map(p => p.trim()).slice(1))
        .filter(p => p.length > 0 && p[0].length > 0)
        .map(p => parseLink(p[0]))
        .filter(p => p != null)

    return { name, links }
}

/**
 * Converts a markdown vocabulary into a  javascript object.
 * @param content 
 */
export function parseVocabulary(content: string)
    : { name: string, words: Array<Word> } {

    let lines = content
        .split(/\r?\n/) // split by newline
        .map(p => p.trim())
        .filter(p => p.length > 0) // remove empty lines

    let matchName = lines.find(p => p.startsWith("##"))
    let name = matchName ? matchName.substring(2).trim() : ""

    let words = lines
        .filter(p => p.startsWith("|"))
        .slice(2) // skip header and separator
        .map(p => p.split("|").map(p => p.trim()).slice(1))
        .filter(p => p.length > 0 && p[0].length > 0)
        .map(p => ({ text: p[0], phonetic: p[1], translation: p[2], sentence: p[3] }))

    return { name, words }
}


export const useMarkdownStore = defineStore('markdown', () => {
    const fetcher = useFetchStore()

    const baseUrl = "https://raw.githubusercontent.com/dnikku/vokabel/main/data"

    const root = ref({ name: "", link: "07/index.md", isIndex: true, isFetched: false })

    async function fetchNode(node: WordsIndex) {
        if (node.isIndex) {
            let text = await fetcher.fetchText(`${baseUrl}/${node.link}`)
            let index = parseIndex(text)
            node.name = index.name
            node.isFetched = true
            
            let dirPath = node.link.replace("/index.md", "")
            node.children = index.links
                .map(p => ({
                    ...p,
                    link: `${dirPath}/${p.link}`,
                    isIndex: p.link.endsWith("/index.md"),
                    isFetched: false
                }))
        } else {
            let text = await fetcher.fetchText(`${baseUrl}/${node.link}`)
            let index = parseVocabulary(text)

            node.name = index.name ? index.name : node.name
            node.words = index.words
            node.isFetched = true
        }
    }

    /**
     * loads recursive all not fetched nodes.
     * @param node
     */
    async function loadNode(node: WordsIndex) {
        if (node.isFetched) {
            console.debug(`(fetchNode ${node.link}) => ignored(already fetched)`)
            return
        }
        await fetchNode(node)

        for (let child of (node.children || [])) {
            await fetchNode(child)
        }
    }

    /**
     *  find the node that mach provided link, starting from root node
     * @param link
     */
    async function findNode(link: string) : Promise<WordsIndex | null>  {
        await loadNode(root.value)

        let found: WordsIndex | null = null;

        function search(node: WordsIndex) {
            if (found) return

            if (node.link == link) {
                found = node
                return
            }

            for (let child of (node.children || [])) {
                search(child)
            }
        }

        search(root.value)
        return found
    }

    /**
     * get words from provided node and recursively to all children
     * @param node
     */
    function getWords(node: WordsIndex): Word[] {
        let arr: Word[] = []

        function recur(node: WordsIndex) {
            if (node.words) {
                arr = [...arr, ...node.words]
            }
            console.debug(`arr:  :node '${node.link}'`, arr)

            for (let child of (node.children || [])) {
                recur(child)
            }
        }

        recur(node)
        return arr
    }

    // schedule load root async
    loadNode(root.value).then()

    return {
        root,
        findNode,
        getWords
    }
})