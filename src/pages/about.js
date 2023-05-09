import '../styles/about.css'
import Basil from '../assets/basil.jpg'
import Jazz from '../assets/jazz.jpg'

function getAge(birthDate) {
  const formattedDate = new Date(birthDate)
  const diff = Date.now() - formattedDate.getTime()
  const age = new Date(diff)
  const formattedAge = Math.abs(age.getUTCFullYear() - 1970)

  if (formattedAge === 0) {
    return Math.abs(age.getMonth()) + ' month'
  }

  return Math.abs(age.getUTCFullYear() - 1970) + ' year'
}

const basilAge = getAge("2020-2-14")
const basilDesc = `Meet Basil, our ${basilAge} old Scottish Fold. As a member of one of the friendliest cat breeds, ` +
  "Basil is no exception. He's a gentle soul who has never scratched anyone in his life, " +
  "but does prefer his alone time and will give Jazz, our puppy, a little hiss if he gets too close for comfort. " +
  "Basil came into our lives when a friend of ours had to give away their new furry companion due to allergies. " +
  "We were thrilled to welcome him into our home and shower him with all the love and care he " +
  "deserves."

const jazzAge = getAge("2022-12-25")
const jazzDesc = `Jazz is our ${jazzAge} old Samoyed puppy. ` +
  "We named him after his constant singing, as Samoyeds are known for their melodious howls. Despite his vocal talents, " +
  "Jazz is a pretty laid-back pup and loves snuggling up with his family. As a true foodie, Jazz is a discerning critic " +
  "when it comes to his meals. His go-to dish is a homemade blend of rice, meat, and veggies, which he devours with ease. " +
  "With his winning personality and impeccable taste buds, Jazz is a natural fit for any restaurant or cafe."

function createAbout() {
  const about = document.createElement('div')
  about.className = 'about'

  const mainHeading = document.createElement('h1')
  mainHeading.textContent = 'About'
  mainHeading.className = 'about__heading'

  about.appendChild(mainHeading)

  about.appendChild(createPetDescription(Basil,'grey scottish fold cat sitting on computer', 'Basil', basilDesc))

  about.appendChild(createPetDescription(Jazz, 'samoyed sitting and looking up at camera', 'Jazz', jazzDesc))

  return about
}

function createPetDescription(src, alt, name, text) {
  const container = document.createElement('div')
  const image = document.createElement('img')
  const descContainer = document.createElement('div')
  const heading = document.createElement('h2')
  const paragraph = document.createElement('p')

  container.className = 'about__pet-container'
  image.className = 'about__pet-image'
  descContainer.className = 'about__pet-desc-container'
  heading.className = 'about__pet-name'
  paragraph.className = 'about__pet-paragraph'

  image.src = src
  image.alt = alt
  heading.textContent = name
  paragraph.textContent = text

  container.appendChild(image)
  descContainer.appendChild(heading)
  descContainer.appendChild(paragraph)
  container.appendChild(descContainer)

  return container
}

export default createAbout
