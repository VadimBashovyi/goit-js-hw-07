const ulItem = document.querySelector('#categories')
console.log(`В списке ${ulItem.children.length} категории`)

for (let item of ulItem.children) {
  console.log('Категория: ', item.firstElementChild.innerHTML)
  console.log('Количество элементов: ', item.lastElementChild.children.length)
}
