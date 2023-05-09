import '../styles/menu.css'
import ChocoCookies from '../assets/cookies.jpg'
import PistachioCookies from '../assets/cookies-2.jpg'
import Candy from '../assets/candy.jpg'
import Sandwich from '../assets/sandwich.jpg'
import Focaccia from '../assets/focaccia.jpg'

const itemData = [
  {
    src: ChocoCookies,
    alt: 'chocolate chip cookies with a caramel sauce on top',
    desc: "Indulge in these irresistible chocolate chip cookies that have " +
      "a crispy exterior and a soft, chewy center. But wait, there's more! We take these classic " +
      "cookies to the next level by drizzling a salted caramel sauce on top, creating a " +
      "heavenly combination of flavors and textures."
  },
  {
    src: PistachioCookies,
    alt: 'pistachio cookies with cream cheese frosting and pistachio bits on top',
    desc: "These cookies are also good."
  },
  {
    src: Candy,
    alt: 'candy in individual baking paper wrappers',
    desc: "Experience a refreshing burst of coolness with our delicious chewy mint candy!"
  },
  {
    src: Sandwich,
    alt: 'rye bread with avocado, salmon and lemon slices on top',
    desc: "These sandwiches are made from hearty slices of freshly baked rye bread, topped with a " +
      "generous layer of creamy avocado, slices of smoked salmon and tangy, refreshing lemon."
  },
  {
    src: Focaccia,
    alt: 'a focaccia with a dog staring at it',
    desc: "This focaccia is here because the photo includes Jazz."
  },
]

function createMenu() {
  const menu = document.createElement('div')
  menu.className = 'menu'

  const mainHeading = document.createElement('h1')
  mainHeading.textContent = 'Menu'
  mainHeading.className = 'menu__heading'

  const paragraph = document.createElement('p')
  paragraph.textContent = "Everything on our menu is made from scratch with the highest quality ingredients. " +
    "Each dish is crafted with care and attention to detail. Just be prepared to share a bite or two – Jazz has been " +
    "known to give some serious puppy-dog eyes to those who don't!"
  paragraph.className = 'menu__paragraph'

  menu.appendChild(mainHeading)
  menu.appendChild(paragraph)
  for (const item of itemData) {
    const {src, alt, desc} = item
    menu.appendChild(createMenuItem(src, alt, desc))
  }

  return menu
}

function createMenuItem(src, alt, description) {
  const item = document.createElement('div')
  const image = document.createElement('img')
  const desc = document.createElement('p')

  item.className = 'menu__item'
  image.className = 'menu__item-image'
  desc.className = 'menu__item-desc'

  image.src = src
  image.alt = alt

  desc.textContent = description

  item.appendChild(image)
  item.appendChild(desc)

  return item
}

export default createMenu
