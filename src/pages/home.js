function createHome() {
  const home = document.createElement('div')
  home.textContent = ''
  home.className = 'home'

  const mainHeading = document.createElement('h1')
  mainHeading.textContent = 'Welcome!'
  mainHeading.className = 'home__heading'

  home.appendChild(mainHeading)

  return home
}

export default createHome
