/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGithub, faMarkdown } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faGear, faUser } from "@fortawesome/free-solid-svg-icons"

library.add(faGithub)
library.add(faMarkdown)

library.add(faHouse)
library.add(faGear)
library.add(faUser)

export const FontIcon = FontAwesomeIcon
