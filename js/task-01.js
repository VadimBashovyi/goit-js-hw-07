const categories = document.querySelector(`#categories`)
console.log(`В списке ${categories.children.length} категории`)

for (let child of categories.children) {
  console.log('Категория: ', child.firstElementChild.innerHTML)
  console.log('Количество элементов: ', child.lastElementChild.children.length)
}
