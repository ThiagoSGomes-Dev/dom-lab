// Criar e Adicionar elementos

// createElement
const h2 = document.createElement('h2')
h2.innerHTML = "Olá Devs!"
const h3 = document.createElement('h3')
h3.innerHTML = "Olá Amigos"
// append prepend
const header = document.querySelector('header')
// add antes do header
header.prepend()
// add depois do hearder
header.append(h2)

