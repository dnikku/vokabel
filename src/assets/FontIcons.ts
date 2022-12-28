/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGithub, faMarkdown } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faGear, faUser, faList, faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons"

library.add(faGithub)
library.add(faMarkdown)

library.add(faHouse)
library.add(faGear)
library.add(faUser)
library.add(faList)
library.add(faGraduationCap)

library.add(faSquare)
library.add(faSquareCheck)

export const FontIcon = FontAwesomeIcon
