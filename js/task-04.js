let counterValue = 0
const counterEl = document.querySelector('#value')
const buttonEl = document.querySelectorAll('button[data-action]')

const decrement = () => {
  counterValue -= 1
  newCounter()
}
const increment = () => {
  counterValue += 1
  newCounter()
}

const newCounter = () => {
  counterEl.textContent = counterValue
}

buttonEl.forEach((element) => {
  if (element.dataset.action === 'increment') {
    element.addEventListener('click', increment)
  } else {
    element.addEventListener('click', decrement)
  }
})
