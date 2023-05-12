function createNotFound() {
  const notFound = document.createElement('div')
  notFound.className = 'not-found'

  const mainHeading = document.createElement('h1')
  mainHeading.textContent = '404 page not found'
  mainHeading.className = 'not-found__heading'

  notFound.appendChild(mainHeading)

  return notFound
}

export default createNotFound