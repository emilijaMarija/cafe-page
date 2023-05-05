import '../styles/home.css'
import { switchPage } from './pageLayout'
import CatIcon from '../assets/cat-icon.png'

function createHome() {
  const home = document.createElement('div')
  home.className = 'home'

  const mainHeading = document.createElement('h1')
  mainHeading.textContent = 'Welcome!'
  mainHeading.className = 'home__heading'

  const paragraph = document.createElement('p')
  paragraph.textContent = "At Basil & Jazz Cafe we are excited about food." +
    " Not only do some of us completely lose it in its presence, we love sharing the joy " +
    "and love that comes with the culture of food. Join us over a warm chocolate chip cookie and " +
    "let's savour the moment together."
  paragraph.className = 'home__paragraph'

  const menuContainer = document.createElement('div')
  menuContainer.className = 'home__menu-container'

  const menuHeading = document.createElement('h2')
  const menuText = document.createElement('p')
  const menuButton = document.createElement('button')
  const catIcon = document.createElement('img')

  menuHeading.textContent = 'Check out our menu!'
  menuText.textContent = 'All options are completely homemade.'
  menuButton.textContent = 'Take me there'
  menuButton.addEventListener("click", () => switchPage('Menu'))
  catIcon.src = CatIcon
  catIcon.alt = ''
  catIcon.className = 'home__cat-icon'

  menuContainer.appendChild(catIcon)
  menuContainer.appendChild(menuHeading)
  menuContainer.appendChild(menuText)
  menuContainer.appendChild(menuButton)

  home.appendChild(mainHeading)
  home.appendChild(paragraph)
  home.appendChild(menuContainer)

  return home
}

export default createHome
