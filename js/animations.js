const INCREASE_NUMBER_ANIMATION_SPEED = 10

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
initIncreaseNumberAnimation()

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
