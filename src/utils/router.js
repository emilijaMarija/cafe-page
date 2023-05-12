import { switchPage } from '../pages/pageLayout'

let routes = {}
function route (path, template) {return routes[path] = template}

route('/', () => {
  switchPage('Home')
})
route('/menu', () => {
  switchPage('Menu')
})
route('/about', () => {
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