function createNotFound() {
  const notFound = document.createElement('div')
  notFound.className = 'not-found'

  const mainHeading = document.createElement('h1')
  mainHeading.textContent = '404 page not found'
  mainHeading.className = 'not-found__heading'

  const paragraph = document.createElement('p')
  paragraph.textContent = "Sorry, we can't find the page you are looking for."
  paragraph.className = 'hero-paragraph'

  notFound.appendChild(mainHeading)
  notFound.appendChild(paragraph)

  return notFound
}

export default createNotFound