import {beforeEach, describe, expect, it} from "vitest";
import {createPinia, setActivePinia} from "pinia";
import {useFetchStore} from "@/stores/fetch";


describe("stub api", () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it("index.md => content-1", async () => {
        // Arrange
        const fetcher = useFetchStore()
        fetcher.stubUrl(/.*index\.md$/, "content-1")

        // Act
        let actual = await fetcher.fetchText("something/index.md")

        // Assert
        expect(actual).toEqual("content-1")
    })

    it("index.md => error(HTTP 404)", async () => {
        // Arrange
        const fetcher = useFetchStore()
        fetcher.stubUrl(/.*index\.md$/, "content-1")

        // Act & Assert
        await expect(async () => await fetcher.fetchText("something/index2.md"))
            .rejects.toThrowError('(HTTP 404)')
    })

})