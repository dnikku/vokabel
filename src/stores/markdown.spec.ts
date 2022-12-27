import {describe, it, expect, beforeEach} from "vitest"
import {setActivePinia, createPinia} from 'pinia'
import {chopText, parseIndex, parseVocabulary, useMarkdownStore} from "./markdown"
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

  | EN         | DE       | IPA    | EN - Phrase | DE -Phrase |
  |------------|----------|--------|-------------|------------|
  | time zone  | Zeitzone |  taim  | Time zone?  | Zeitzone?  |
  | local time | Ortszeit |        |             |            |
  `

        // Act
        let actual = parseVocabulary(content)

        // Assert
        let expected = {
            name: "Ch 04 - Erdkunde", words: [{
                text: "time zone",
                text_tr: "Zeitzone",
                ipa: "taim",
                phrase: "Time zone?",
                phrase_tr: "Zeitzone?"
            }, {
                text: "local time",
                text_tr: "Ortszeit",
                ipa: "",
                phrase: "",
                phrase_tr: ""
            }]
        }
        expect(actual).toEqual(expected)
    })

})

describe("chop text", () => {
    it("empty text => empty text", () => {
        // Act
        var actual = chopText("")

        // Assert
        expect(actual).toEqual([])
    })

    it("<br/> or <br /> splits", () => {
        // Act
        var actual = chopText("one<br/> two <br /> three")

        // Assert
        expect(actual).toEqual([{text: "one"}, {br: true}, {text: "two"}, {br: true}, {text: "three"}])
    })

    it("<br/> at begin or end is ignored", () => {
        // Act
        var actual = chopText("<br/>two<br />")

        // Assert
        expect(actual).toEqual([{text: "two"}])
    })

    it("two consecutive * marks a bold text", () => {
        // Act
        var actual = chopText("one *two 2* three")

        // Assert
        expect(actual).toEqual([{text: "one"}, {bold: true, text: "two 2"}, {text: "three"}])
    })

    it("missing * marks a bold text", () => {
        // Act
        var actual = chopText("one *two* *three")

        // Assert
        expect(actual).toEqual([{text: "one"}, {bold: true, text: "two"}, {bold: true, text: "three"}])
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
    | EN     | DE      | IPA  | EN - Phrase          | DE - Phrase |
    |--------|---------|------|----------------------|-------------|
    | offer  | Angebot | 'ofe | That's nice *offer*. |             |
    | sword  | Schwert |      |                      |             |
    `)

        // Act
        let actual = await markdown.getRoot()

        // Assert
        let expected = {
            name: "7. Klasse",
            link: "07/index.md",
            isFetched: true,
            isIndex: true,
            children: [{
                name: "English",
                link: "07/en/words.md",
                isFetched: true,
                isIndex: false,
                words: [{
                    text: "offer",
                    text_tr: "Angebot",
                    ipa: "'ofe",
                    phrase: "That's nice *offer*.",
                    phrase_tr: ""
                }, {
                    text: "sword",
                    text_tr: "Schwert",
                    ipa: "",
                    phrase: "",
                    phrase_tr: ""
                }]
            }]
        }
        expect(actual).toEqual(expected)
    })

})