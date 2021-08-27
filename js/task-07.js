const input = document.querySelector('input#font-size-control')
const span = document.querySelector('span#text')
input.addEventListener('input', (event) => {
  span.style.fontSize = event.currentTarget.value + 'px'
})
