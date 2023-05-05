function createAbout() {
  const about = document.createElement('div')
  about.className = 'about'

  const mainHeading = document.createElement('h1')
  mainHeading.textContent = 'About'
  mainHeading.className = 'about__heading'

  about.appendChild(mainHeading)

  return about
}

export default createAbout
