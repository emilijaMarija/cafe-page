import createPageLayout from './pages/pageLayout'
import router from './utils/router'

createPageLayout()

window.addEventListener('load', router)
window.addEventListener('popstate', router)
