import { switchPage } from '../pages/pageLayout'

let routes = {}
function route (path, template)  {return routes[path] = template}

route('/', () => {
  switchPage('Home')
})
route('/menu', () => {
  switchPage('Menu')
})
route('/about', () => {
  switchPage('About')
})

function resolveRoute(route) {
  try {
    return routes[route]
  } catch (e) {
    throw new Error(`Route ${route} not found`)
  }
}

function router() {
  let url = window.location.pathname || '/'
  let route = resolveRoute(url)

  route();
}

export default router