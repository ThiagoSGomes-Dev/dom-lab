// Alterando estilos com um objeto JavaScript
// Usando Style.backgroundColor

const element = document.querySelector('body')
element.style.backgroundColor = "#6646b0"

// Agora usando o ClassList
let bgHeader = document.querySelector('header')
let estilo = document.querySelector('h1')

// Nosso console vai nos retornar um Tipo de dado DOMTokenList [value: ''] que vai nos retornar uma lista de classes que me permite utilizar o método add()
estilo.classList.add('active')
bgHeader.classList.add("green")
estilo.classList.remove("active")


// Existe também o toggle() que funcional basicamente com um interruptor

// quando a class foi removida ele aplica novamente.
// qunado a class existe ele remove.

// bgHeader.classList.remove("green")
bgHeader.classList.toggle("green")


console.log(estilo.classList)



