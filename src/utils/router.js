import { switchPage } from '../pages/pageLayout'

let routes = {}
export const BASE_URI = '/cafe-page'

function route (path, template) {return routes[path] = template}

route(BASE_URI + '/', () => {
  switchPage('Home')
})
route(BASE_URI, () => {
  switchPage('Home')
})
route(BASE_URI + '/menu', () => {
  switchPage('Menu')
})
route(BASE_URI + '/about', () => {
  switchPage('About')
})

function router() {
  let url = window.location.pathname || '/'
  let route = routes[url]

  if (route) {
    route()
  } else {
    switchPage('404')
  }
}

export default router