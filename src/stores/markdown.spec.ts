import { describe, it, expect } from "vitest"
import { parseIndex, parseVocabulary } from "./markdown"

describe("parseIndex", () => {

  it("empty content", () => {
    // Arrange
    let content = ""

    // Act
    let actual = parseIndex(content)

    // Assert
    let expected = { name: "", links: [] }
    expect(actual).toEqual(expected)
  })

  it ("full index", () => {
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
    let expected = {name: "7. Klasse", links: [
      {name: "Englisch/Erdkunde", link: "en/index.md"},
      {name: "Französisch", link: "fr/index.md"}
    ]}
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
    let expected = { name: "", words: [] }
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
    let expected = { name: "Ch 04 - Erdkunde", words: [] }
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
        { text: "time zone", phonetic: "", translation: "Zeitzone", sentence: "" },
        { text: "local time", phonetic: "", translation: "Ortszeit", sentence: "" }
      ]
    }
    expect(actual).toEqual(expected)
  })


})