const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]
const ingredientsEl = document.querySelector(`#ingredients`)

const addElIngredients = (element) => {
  return element.map((elemen) => {
    const itemListEl = document.createElement('li')
    itemListEl.textContent = elemen
    return itemListEl
  })
}
ingredientsEl.append(...addElIngredients(ingredients))
console.log(ingredientsEl)
