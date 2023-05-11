import '../styles/home.css'
import { switchPage } from './pageLayout'
import CatIcon from '../assets/cat-icon.png'
import DogIcon from '../assets/dog-icon.png'

function createMenuSection() {
  const menuContainer = document.createElement('div')
  menuContainer.className = 'home__menu-container'

  const menuHeading = document.createElement('h2')
  const menuText = document.createElement('p')
  const menuLink = document.createElement('a')
  const catIcon = document.createElement('img')

  menuHeading.textContent = 'Check out our menu!'
  menuText.textContent = 'All options are completely homemade.'
  menuLink.textContent = 'Take me there'
  menuLink.href = '/menu'
  menuLink.addEventListener('click', (e) => {
    switchPage('Menu')
    history.pushState({}, '', '/menu')
    e.preventDefault()
  })
  menuLink.className = 'home__link'
  catIcon.src = CatIcon
  catIcon.alt = ''
  catIcon.className = 'home__cat-icon'

  menuContainer.appendChild(catIcon)
  menuContainer.appendChild(menuHeading)
  menuContainer.appendChild(menuText)
  menuContainer.appendChild(menuLink)

  return menuContainer
}

function createAboutSection() {
  const aboutContainer = document.createElement('div')
  aboutContainer.className = 'home__about-container'

  const aboutHeading = document.createElement('h2')
  const aboutText = document.createElement('p')
  const aboutLink = document.createElement('a')
  const dogIcon = document.createElement('img')

  aboutHeading.textContent = 'Learn more about Basil & Jazz'
  aboutText.textContent = "Even though basil is a delicious herb and jazz would make any cafe fancier, " +
    "that's not quite what we're talking about here..."
  aboutLink.textContent = 'Read more'
  aboutLink.href = '/about'
  aboutLink.addEventListener('click', (e) => {
    switchPage('About')
    history.pushState({}, '', '/about')
    e.preventDefault()
  })
  aboutLink.className = 'home__link'
  dogIcon.src = DogIcon
  dogIcon.alt = ''
  dogIcon.className = 'home__dog-icon'

  aboutContainer.appendChild(aboutHeading)
  aboutContainer.appendChild(aboutText)
  aboutContainer.appendChild(aboutLink)

  return [aboutContainer, dogIcon]
}

function createHome() {
  const home = document.createElement('div')
  home.className = 'home'

  const mainHeading = document.createElement('h1')
  mainHeading.textContent = 'Welcome!'
  mainHeading.className = 'home__heading'

  const paragraph = document.createElement('p')
  paragraph.textContent = "At Basil & Jazz Cafe we are passionate about food." +
    " Not only do some of us completely lose it in its presence, we love sharing the joy " +
    "and love that comes with the culture of food. Join us over a warm chocolate chip cookie and " +
    "let's savour the moment together."
  paragraph.className = 'home__paragraph'

  home.appendChild(mainHeading)
  home.appendChild(paragraph)
  home.appendChild(createMenuSection())
  createAboutSection().forEach(x => home.appendChild(x))

  return home
}

export default createHome
