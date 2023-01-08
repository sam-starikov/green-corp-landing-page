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
  console.log(element)

  increaseNumberAnimationStep(0, element, 666)
}
initIncreaseNumberAnimation()
