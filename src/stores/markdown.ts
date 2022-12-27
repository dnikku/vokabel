import { ref, computed } from "vue"
import { defineStore } from "pinia"
import { useFetchStore } from "./fetch"

export type Word = {
    text: string
    text_tr: string
    ipa: string
    phrase: string
    phrase_tr: string
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
        .map(p => ({
            text: p[0],
            text_tr: p.length > 1 ? p[1] : "",
            ipa: p.length > 2 ? p[2] : "",
            phrase: p.length > 3 ? p[3] : "",
            phrase_tr: p.length > 4 ? p[4] : "" }))

    return { name, words }
}

/**
 * Split the text in an array of commands like:
 *  ` {br: true}, {bold: true, text: 'one'}, {text: 'three'}`
 */
export function chopText(content: string): Array<{bold?: boolean, br?: boolean, text?: string}> {
    var result = []

    let arr = content
        .split(/<br\s*\/>/)
        .map(p => p.trim())
        .filter(p => p.length > 0)

    function addChop(str: string, bold: boolean) {
        str = str.trim()
        if (str.length > 0) {
            if (bold) {
                result.push({bold: true, text: str})
            } else {
                result.push({text: str})
            }
        }
    }

    for (const line of arr) {
        if (result.length > 0) {
            result.push({br: true})
        }

        let index = 0
        while (index < line.length) {
            let first = line.indexOf('*', index)
            if (first == -1) break;

            let second = line.indexOf('*', first + 1)
            if (second == -1) second = line.length;

            if (index < first - 1) {
                addChop(line.substring(index, first - 1), false)
            }

            addChop(line.substring(first + 1, second), true)

            index = second + 1
        }

        if (index < line.length) {
            addChop(line.substring(index, line.length), false)
        }
    }

    console.debug("result", result)
    return result
}


const baseUrl = "https://raw.githubusercontent.com/dnikku/vokabel/main/data"

const baseUrlReadable = "https://github.com/dnikku/vokabel/blob/main/data/"

function getAbsoluteUrl(url: string) {
    return `${baseUrlReadable}/${url}`
}

async function fetchNode(node: WordsIndex, fetchText: (url: string) => Promise<string>) {
    if (node.isIndex) {
        let text = await fetchText(`${baseUrl}/${node.link}`)
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
        let text = await fetchText(`${baseUrl}/${node.link}`)
        let index = parseVocabulary(text)

        node.name = index.name ? index.name : node.name
        node.words = index.words
        node.isFetched = true
    }
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

/**
 *  find the node that mach provided link, starting from start node
 *  @param start
 * @param link
 */
function findNode(start: WordsIndex, link: string) : WordsIndex | null  {
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

    search(start)
    return found
}


export const useMarkdownStore = defineStore('markdown', () => {
    const fetcher = useFetchStore()

    const root = ref({ name: "", link: "07/index.md", isIndex: true, isFetched: false })

    /**
     * loads recursive all not fetched nodes.
     * @param node
     */
    async function loadNode(node: WordsIndex) {
        if (node.isFetched) {
            console.debug(`(fetchNode ${node.link}) => ignored(already fetched)`)
            return
        }
        await fetchNode(node, fetcher.fetchText)

        for (let child of (node.children || [])) {
            await loadNode(child)
        }
    }

    async function getRoot() : Promise<WordsIndex> {
        await loadNode(root.value)
        return root.value
    }

    return {
        root,
        getRoot,
        findNode: async (link: string)=>  findNode(await getRoot(), link),
        getWords,
        getAbsoluteUrl
    }
})