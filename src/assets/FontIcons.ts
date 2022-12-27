/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub)

export const FontIcon = FontAwesomeIcon
