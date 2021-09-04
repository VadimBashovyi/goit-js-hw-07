const addRemoveBox = document.querySelectorAll('button[data-action]')
const inputBox = document.querySelector('input')
const boxesDiv = document.querySelector('#boxes')

function createBoxes(amount) {
  const arr = []
  let widthBoxes = 30
  let heightBoxes = 30
  const stepBoxes = 10
  for (let i = 0; i < amount; i += 1) {
    arr.push(document.createElement('div'))
    arr[i].style.width = widthBoxes + 'px'
    arr[i].style.height = heightBoxes + 'px'
    arr[i].style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 256,
    )},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    widthBoxes += stepBoxes
    heightBoxes += stepBoxes
  }
  boxesDiv.append(...arr)
}
function clearBoxes() {
  boxesDiv.innerHTML = ''
}
addRemoveBox.forEach((el) => {
  el.dataset.action === 'render'
    ? el.addEventListener('click', () => {
        clearBoxes()
        createBoxes(inputBox.value)
      })
    : el.addEventListener('click', clearBoxes)
})
