const input = document.querySelector(`input#name-input`)
const span = document.querySelector(`span#name-output`)
input.addEventListener(`input`, (event) => {
  if (event.currentTarget.value) {
    span.textContent = event.currentTarget.value
  } else {
    span.textContent = `незнакомец`
  }
})
