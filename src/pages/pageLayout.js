import createHome from './home'
import createMenu from './menu'
import createAbout from './about'
import Logo from '../assets/logo.png'
import GithubMark from '../assets/github-mark.svg'
import '../styles/page-layout.css'
import createNotFound from './notFound'

function createHeader() {
  const header = document.createElement('div');
  header.classList.add('header')

  const logo = document.createElement('img')
  logo.src = Logo
  logo.alt = 'Basil and Jazz Cafe'
  logo.className = 'header-logo'

  const nav = document.createElement('nav')
  const list = document.createElement('ul')
  nav.className = 'header-nav'
  list.className = 'header-list'

  list.appendChild(createLink("/", 'Home', 'Home'))
  list.appendChild(createLink("/menu", 'Menu', "Menu"))
  list.appendChild(createLink("/about", 'About Us', 'About'))

  nav.appendChild(list)

  header.appendChild(logo)
  header.appendChild(nav)

  return header;
}

function createLink(href, text, page) {
  const listItem = document.createElement('li')

  const link = document.createElement('a')
  link.href = href
  link.textContent = text
  link.addEventListener('click', (e) => {
    switchPage(page)
    history.pushState({}, '', href)
    e.preventDefault()
  })
  link.className = 'header-link'

  listItem.appendChild(link)

  return listItem
}

function createFooter() {
  const footer = document.createElement('div')
  const githubLink = document.createElement('a')
  const githubLogo = document.createElement('img')

  footer.className = 'footer'
  footer.textContent = 'Made by Emilija Marija Zakardonskytė'

  githubLink.href = 'https://github.com/emilijaMarija/cafe-page'
  githubLogo.src = GithubMark
  githubLogo.alt = 'GitHub Profile'
  githubLogo.className = 'footer-link'

  githubLink.appendChild(githubLogo)
  footer.appendChild(githubLink)

  return footer
}

function createPageLayout() {
  const body = document.getElementById('content')
  const page = document.createElement('page')
  page.id = 'page'

  body.appendChild(createHeader())
  body.appendChild(page)
  body.appendChild(createFooter())
}

export function switchPage(pageName) {
  const page = document.getElementById('page')

  while (page.firstChild) {
    page.removeChild(page.firstChild);
  }

  switch (pageName) {
    case 'Home':
      page.appendChild(createHome())
      break
    case 'Menu':
      page.appendChild(createMenu())
      break
    case 'About':
      page.appendChild(createAbout())
      break
    case '404':
      page.appendChild(createNotFound())
      break
    default:
      page.appendChild(createHome())
  }
}

export default createPageLayout
