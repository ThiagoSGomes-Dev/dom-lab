// Adicionando elementos abaixo de outros elementos com:

// insertBefore
// nextElementSibling
const div = document.createElement('div')
div.innerText = 'Olá Mundo'
const body = document.querySelector('body')
const header = body.querySelector('header')

body.insertBefore(div, header.nextElementSibling)


