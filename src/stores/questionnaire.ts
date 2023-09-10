import {ref, computed} from "vue"
import {defineStore} from "pinia"
import {useFetchStore} from "./fetch"


export type Question = {
    nr: number
    text_de: string
    answer_de: string
    text_images?: Array<string>
    answer_images?: Array<string>

    text_ro?: string
    answer_ro?: string

    text_en?: string
    answer_en?: string
}

export type WrappedQuestion = {
    question: Question
    showAnswer: boolean
}

export type Topic = {
    id: number
    name: string

    questions: Question[]
}

export type Thema = {
    name: string
    topics: Topic[]

    questionsUrl: string
    isFetched: boolean
}

export function parseQuestionTranslation(str: string): { topicId: number, questions: Array<Question> } {
    let arr = str.split("\r\n").join("\n").split("\n\n")
    // console.info("arr:", arr)

    // match header
    const header = /([^(]+)\((\d+)\):$/.exec(arr[0].trim())
    if (header == null)
        throw `Header not match: ${arr[0]}`

    let lang = header[1].trim()
    let topicId = parseInt(header[2])

    let questions: Array<Question> = []
    for (let i = 1; i < arr.length; i++) {
        // match line
        const line = /^(^\d+):(.*)(\n_:)(.*)$/gs.exec(arr[i].trim())
        if (line == null)
            throw `Line(${i}) not match: ${arr[i]}`

        if (lang == "Întrebări") {
            questions.push({
                nr: parseInt(line[1]),
                text_de: "", answer_de: "",
                text_ro: line[2].trim(),
                answer_ro: line[4].trim()
            })
        } else if (lang == "Questions") {
            questions.push({
                nr: parseInt(line[1]),
                text_de: "", answer_de: "",
                text_en: line[2].trim(),
                answer_en: line[4].trim()
            })
        } else {
            throw `Invalid Lang: ${lang}`
        }
    }

    return {topicId, questions}
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
            id: p.id,
            name: `${p.name}-${p.id} (${p.questions.length})`,
            questions: p.questions.map((p1: any) => ({
                nr: p1.nr,

                text_de: p1.text_de,
                answer_de: p1.answer_de,

                text_images: p1.text_images,
                answer_images: p1.answer_images,

                text_ro: p1.text_ro,
                answer_ro: p1.answer_ro,

                text_en: p1.text_en,
                answer_en: p1.answer_en,
            }))
        }))

        console.debug(`(fetchNode ${thema.questionsUrl}) => `, thema)
        thema.isFetched = true
    }

    async function copyToClipboard(topic: Topic, questions: Array<Question>) {
        let str = `Fragen (${topic.id}):`
        for (let it of questions) {
            if (str != "") str += "\n\n"
            str += `${it.nr}: ${it.text_de}\n_:${it.answer_de}`
        }
        await navigator.clipboard.writeText(str)
    }

    async function mergeFromClipboard(topic: Topic) {
        let str = await navigator.clipboard.readText()
        // console.info(`fromClipboard:\n"${str}"`)

        let parsed = parseQuestionTranslation(str)
        console.info("parsed:\n", parsed)

        if (parsed.topicId != topic.id) {
            throw `Topic not matched. Expected: ${topic.id}. Actual: ${parsed.topicId}.`
        }

        for (let pasteQ of parsed.questions) {
            let existingQ = topic.questions.find(p => p.nr == pasteQ.nr)
            if (existingQ) {
                if (existingQ.text_ro == null || existingQ.text_ro.trim() == "")
                    existingQ.text_ro = pasteQ.text_ro

                if (existingQ.answer_ro == null || existingQ.answer_ro.trim() == "")
                    existingQ.answer_ro = pasteQ.answer_ro

                if (existingQ.text_en == null || existingQ.text_en.trim() == "")
                    existingQ.text_en = pasteQ.text_en

                if (existingQ.answer_en == null || existingQ.answer_en.trim() == "")
                    existingQ.answer_en = pasteQ.answer_en
            }
        }
    }


    return {
        root,
        loadThema,
        copyToClipboard,
        mergeFromClipboard
    }
})

