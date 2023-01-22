const INCREASE_NUMBER_ANIMATION_SPEED = 10
let animationInited = false

function increaseNumberAnimationStep(i, element, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      element.innerText = i + '+'
    } else {
      element.innerText = i
    }
    i += 3
  }
  setTimeout(() => {
    increaseNumberAnimationStep(i, element, endNumber)
  }, INCREASE_NUMBER_ANIMATION_SPEED)
}

function initIncreaseNumberAnimation() {
  let element = document.querySelector('.features__clients-count')

  increaseNumberAnimationStep(0, element, 666)
}

document
  .querySelector('#budget')
  .addEventListener('change', function handleSelectChange(event) {
    if (event.target.value === 'other') {
      let formContainer = document.createElement('div')
      formContainer.classList.add('form__group')
      formContainer.classList.add('form__other-input')

      let input = document.createElement('input')
      input.setAttribute('placeholder', 'Введите ваш вариант')
      input.setAttribute('type', 'text')

      formContainer.append(input)

      document
        .querySelector('form')
        .insertBefore(formContainer, document.querySelector('.form__submit'))
    }
    let otherInput = document.querySelector('.form__other-input')
    if (event.target.value !== 'other' && Boolean(otherInput)) {
      document.querySelector('form').removeChild(otherInput)
    }
  })

function updateScroll() {
  document.querySelector('header').classList.add('header__scrolled')

  if (window.scrollY === 0) {
    document.querySelector('header').classList.remove('header__scrolled')
  }

  let windowBottomPosition = window.scrollY + window.innerHeight
  let countElementPosition = document.querySelector(
    '.features__clients-count'
  ).offsetTop
  console.log(countElementPosition)
  console.log(windowBottomPosition)

  if (windowBottomPosition >= countElementPosition && !animationInited) {
    initIncreaseNumberAnimation()
    animationInited = true
  }
}

window.addEventListener('scroll', updateScroll)

function addSmoothScroll(link) {
  link.addEventListener('click', onLinkClick)
}

function onLinkClick(event) {
  event.preventDefault()
  document.querySelector(event.target.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
  })
}

document.querySelectorAll('a[href^="#"]').forEach((el) => {
  addSmoothScroll(el)
})

addSmoothScroll(document.querySelector('button[href="#features"]'))

let img = document.querySelector('img')
img.attributes.width = 100
console.log(img)
