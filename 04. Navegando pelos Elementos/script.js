// Navegando pelos Elementos Pais (parent).
// parentElement()
// Ou
// parentNode()

const body = document.querySelector('h1')
const header = document.querySelector("h1")
// console.log(header.parentNode)

// Navegando pelos Elementos Filhos. usando
// childNode ou children

// childNode //
const el = document.querySelector('body')
console.log(el.childNodes) // Vai me devolver um NodeList.

// children //
console.log(el.children) // Vai me devolver um HTMLCollection.

// Buscando por Elementos irmãos. com
// nextSibling nextElementSibling

const row = document.querySelector('header')
console.log(row.nextElementSibling)
// previousSibling previousElementSibling

