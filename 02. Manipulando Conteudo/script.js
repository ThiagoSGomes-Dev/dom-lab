
// Manipulando conteúdo
// textContent
// innerText
const element = document.querySelector('h1')

// Reatribuição de valor ou contatenar usando sinal +

element.textContent += " Olá Devs"

const el = document.querySelector('h2')

el.innerText += " Hello World"

// Como trocar o conteúdo HTML interno

const go = document.querySelector('h3')

go.innerHTML += " <small>Meu Blog</small>"

// Como Alterar valores dentro de uma input

const valor = document.querySelector('input')

valor.value = "Input Populado"

// Como adicionar e modificar atributos dos elementos com os id, class etc..

const header = document.querySelector('header')
header.setAttribute('id', 'id-do-header')

const headerID = document.querySelector('#id-do-header')

// console.log(headerID)

// Tammbém posso apenas pegar o atributo

console.log(headerID.getAttribute('id'))

// Ultimas considerações
// podemos também remover atributos

header.removeAttribute('id')
// Como também podemos remover atributos que forma declarados no HTML.

header.removeAttribute('class')



