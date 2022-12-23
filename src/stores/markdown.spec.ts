import {describe, it, expect, beforeEach} from "vitest"
import {setActivePinia, createPinia} from 'pinia'
import {parseIndex, parseVocabulary, useMarkdownStore} from "./markdown"
import {useFetchStore} from "@/stores/fetch";

describe("parseIndex", () => {

    it("empty content", () => {
        // Arrange
        let content = ""

        // Act
        let actual = parseIndex(content)

        // Assert
        let expected = {name: "", links: []}
        expect(actual).toEqual(expected)
    })

    it("full index", () => {
        // Arrange
        let content = `
## 7. Klasse

| Subject/Link                      | Content Hash |
|-----------------------------------|--------------|
| [Englisch/Erdkunde](en/index.md)  |              | 
| [Französisch](fr/index.md)        |              | 
    `

        // Act
        let actual = parseIndex(content)

        // Assert
        let expected = {
            name: "7. Klasse", links: [
                {name: "Englisch/Erdkunde", link: "en/index.md"},
                {name: "Französisch", link: "fr/index.md"}
            ]
        }
        expect(actual).toEqual(expected)

    })
})


describe("parseVocabulary", () => {
    it("empty content", () => {
        // Arrange
        let content = ""

        // Act
        let actual = parseVocabulary(content)

        // Assert
        let expected = {name: "", words: []}
        expect(actual).toEqual(expected)
    })


    it("only header", () => {
        // Arrange
        let content = `
  ## Ch 04 - Erdkunde
    `

        // Act
        let actual = parseVocabulary(content)

        // Assert
        let expected = {name: "Ch 04 - Erdkunde", words: []}
        expect(actual).toEqual(expected)
    })

    it("full content", () => {
        // Arrange
        let content = `
  ## Ch 04 - Erdkunde

  | Text       | Phonetic | Translation | Sentence |
  |------------|----------|-------------|----------|
  | time zone  |          | Zeitzone    |          |
  | local time |          | Ortszeit    |          |
  `

        // Act
        let actual = parseVocabulary(content)

        // Assert
        let expected = {
            name: "Ch 04 - Erdkunde", words: [
                {text: "time zone", phonetic: "", translation: "Zeitzone", sentence: ""},
                {text: "local time", phonetic: "", translation: "Ortszeit", sentence: ""}
            ]
        }
        expect(actual).toEqual(expected)
    })

})


describe("get root node", () => {
    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call without having to pass it to it:
        // `useStore(pinia)`
        setActivePinia(createPinia())
    })

    it("empty root index", async () => {
        // Arrange
        const fetcher = useFetchStore()
        fetcher.stubUrl(/.*index\.md/, "## Empty Root")
        const markdown = useMarkdownStore()

        // Act
        let root = await markdown.getRoot()

        // Assert
        expect(root.name).toEqual("Empty Root")
    })

    it("root not found (HTTP 404)", async () => {
        // Arrange
        const fetcher = useFetchStore()
        fetcher.stubUrl(/.*index0\.md/, "")
        const markdown = useMarkdownStore()

        // Act & Assert
        await expect(async () => await markdown.getRoot())
            .rejects.toThrowError('(HTTP 404)')
    })

    it("load root recursively", async () => {
        // Arrange
        const markdown = useMarkdownStore()

        const fetcher = useFetchStore()
        fetcher.stubUrl(/.*\/07\/index\.md/, `
    ## 7. Klasse
    
    | Subject/Link            | Content Hash |
    |-------------------------|--------------|
    | [Englisch](en/words.md) |              |
    `)

        fetcher.stubUrl(/.*\/07\/en\/words\.md/, `
    ## English
    | EN     | IPA  | DE      | Sentence             |
    |--------|------|---------|----------------------|
    | offer  | 'ofe | Angebot | That's nice *offer*. |
    | sword  |      | Schwert |                      |
    `)

        // Act
        let root = await markdown.getRoot()

        // Assert
        let actual = {
            name: root.name,
            link: root.link,
            children: root.children?.map(p => ({
                name: p.name,
                link: p.link,
                words: p.words?.map(p => ({
                    text: p.text,
                    translation: p.translation
                }))}))
        }

        let expected = {
            name: "7. Klasse",
            link: "07/index.md",
            children: [{
                name: "English",
                link: "07/en/words.md",
                words: [{
                    text: "offer",
                    translation: "Angebot"
                }, {
                    text: "sword",
                    translation: "Schwert"
                }]
            }]
        }
        expect(actual).toEqual(expected)
    })

})