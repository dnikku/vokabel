import {ref, computed} from "vue"
import {defineStore} from "pinia"
import {useFetchStore} from "./fetch"


export type Question = {
    nr: number
    selected: boolean

    text_de: string
    answer_de: string

    text_ro?: string
    answer_ro?: string

    text_en?: string
    answer_en?: string
}

export type Topic = {
    nr: number
    name: string

    questions: Question[]
}

export type Thema = {
    name: string
    topics: Topic[]

    questionsUrl: string
    isFetched: boolean
}


export const useQuestionnaireStore = defineStore('questionaire', () => {
    const fetcher = useFetchStore()

    const root = ref({
        name: "SKS Fragen",
        topics: [],
        isFetched: false,
        questionsUrl:
            process.env.NODE_ENV === 'development'
                ? "/data/sks/fragen.json"
                : "https://raw.githubusercontent.com/dnikku/vokabel/main/data/sks/fragen.json"
    } as Thema)

    async function loadThema(thema: Thema) {
        if (thema.isFetched) {
            console.debug(`(fetchNode ${thema.questionsUrl}) => ignored(already fetched)`)
            return
        }

        const data = await fetcher.fetchJson(thema.questionsUrl)

        thema.topics = data.topics.map((p: any) => ({
            nr: p.id,
            name: `${p.name} (${p.questions.length})`,
            questions: p.questions.map((p1: any) => ({
                nr: p1.nr,
                selected: false,

                text_de: p1.text_de,
                answer_de: p1.answer_de,

                text_ro: p1.text_ro,
                answer_ro: p1.answer_ro,

                text_en: p1.text_en,
                answer_en: p1.answer_en,
            }))
        }))

        thema.isFetched = true
        console.log(thema)
    }

    async function copyToClipboard(questions: Array<Question>) {
        let str = "Fragen:"
        for (let it of questions) {
            if (str != "") str += "\n\n"
            str += `${it.nr}: ${it.text_de}\nA:${it.answer_de}`
        }
        await navigator.clipboard.writeText(str)
    }

    async function mergeFromClipboard(questions: Array<Question>) {
        let str = await navigator.clipboard.readText()
    }


    return {
        root,
        loadThema,
        copyToClipboard,
        mergeFromClipboard
    }
})

