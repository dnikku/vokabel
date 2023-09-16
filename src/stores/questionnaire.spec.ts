import {describe, it, expect, beforeEach} from "vitest"
import {parseQuestionTranslation} from "@/stores/questionnaire";

describe("parseRealData", () => {

    it("from english", () => {
        let str = `Questions:

1: What do you as a ship's captain have to pay attention to before starting your journey in terms of nautical charts and nautical books?
A:To ensure that the documents are complete and corrected up to date.

2: Why does the respective map date have to be taken into account in GPS navigation?
R: Because the WGS84 (World Geodetic System 1984) reference system used by GPS may differ from other reference systems (map datum) used.

3: What differences can occur between WGS84 and other reference systems?
A:The differences between φ and λ are generally in the order of 0.1 kbl to 1 kbl, i.e. from about 20 to 200 m. Larger differences can occur.

4: Where on the nautical chart can you find information about the reference system used and, if necessary, corresponding correction instructions?
A:On the edge of the card under the title.

5: What, if necessary, is the correction note regarding GPS in the nautical chart if the chart data used (e.g. ED 50) and WGS 84 do not match?
A: Positions obtained from satellite navigation (e.g. GPS) in WGS 84 should be offset 0.... minutes north/south and 0.... minutes west/east to match this map.`

    })

    it("from romana", () => {
        // Arrange
        let str = `Întrebări (12):

1: Ce este vântul și cum este creat?
_: Vântul mișcă aer. Mișcarea este cauzată de diferențele de presiune dintre zonele de înaltă și joasă presiune.

2: Care este punctul de rouă?
_: Punctul de rouă este temperatura la care aerul trebuie răcit pentru a deveni saturat cu umiditate. Se instalează condensarea (formarea de rouă).

3: Care este nivelul general de umiditate utilizat în transport maritim?
_: Umiditatea relativă în procente.`

        // Act
        let questions = parseQuestionTranslation(str)

        // Assert
        let expected = {
            topicId: 12,
            questions: [{
                nr: 1,
                text_de: "", answer_de: "",
                text_ro: "Ce este vântul și cum este creat?",
                answer_ro: "Vântul mișcă aer. Mișcarea este cauzată de diferențele de presiune dintre zonele de înaltă și joasă presiune."
            }, {
                nr: 2,
                text_de: "", answer_de: "",
                text_ro: "Care este punctul de rouă?",
                answer_ro: "Punctul de rouă este temperatura la care aerul trebuie răcit pentru a deveni saturat cu umiditate. Se instalează condensarea (formarea de rouă)."
            }, {
                nr: 3,
                text_de: "", answer_de: "",
                text_ro: "Care este nivelul general de umiditate utilizat în transport maritim?",
                answer_ro: "Umiditatea relativă în procente."
            }]
        }
        expect(questions).toEqual(expected)
    })


})