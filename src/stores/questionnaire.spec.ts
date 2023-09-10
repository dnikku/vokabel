import {describe, it, expect, beforeEach} from "vitest"

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
        let str = `Întrebări:

1: La ce trebuie să fii atent, ca căpitan de navă, înainte de a-ți începe călătoria în ceea ce privește hărțile și cărțile nautice?
R: Pentru a vă asigura că documentele sunt complete și corectate la zi.

2: De ce trebuie luată în considerare data hărții respective în navigația GPS?
R: Deoarece sistemul de referință WGS84 (World Geodetic System 1984) utilizat de GPS poate diferi de alte sisteme de referință (datum de hartă) utilizate.

3: Ce diferențe pot apărea între WGS84 și alte sisteme de referință?
R: Diferențele dintre φ și λ sunt în general de ordinul 0,1 kbl până la 1 kbl, adică de la aproximativ 20 până la 200 m. Pot apărea diferențe mai mari.

4: Unde pe harta nautică puteți găsi informații despre sistemul de referință utilizat și, dacă este necesar, instrucțiuni de corectare corespunzătoare?
R: Pe marginea cărții de sub titlu.

5: Care este, dacă este necesar, nota de corecție privind GPS-ul din harta nautică dacă datele hărții utilizate (de ex. ED 50) și WGS 84 nu se potrivesc?
R: Pozițiile din WGS 84 obținute prin navigație prin satelit (de exemplu, GPS) ar trebui să fie compensate cu 0.... minute nord/sud și 0.... minute vest/est pentru a se potrivi cu această hartă.`
    })


})