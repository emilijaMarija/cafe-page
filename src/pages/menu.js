function createMenu() {
  const menu = document.createElement('div')
  menu.textContent = ''
  menu.className = 'menu'

  const mainHeading = document.createElement('h1')
  mainHeading.textContent = 'Menu'
  mainHeading.className = 'home__heading'

  menu.appendChild(mainHeading)

  return menu
}

export default createMenu
