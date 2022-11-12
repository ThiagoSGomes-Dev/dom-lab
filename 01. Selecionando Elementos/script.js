// getElementById() Forma de pegar Elementos HTML pelo seu id=""

document.getElementById('my-blog')

// getElementsByClassName() Forma de pegar Elementos HTML pela sua class=""

const element = document.getElementsByClassName('meu-h2')


// getElementsByTagName() Forma de pegar Elementos HTML pela sua tag.

const tag = document.getElementsByTagName('p')

// querySelector('') Forma de pegar Elementos HTML pela seletor obs: querySelector só vai pegar um elemento  de cada vez.

let cor = document.querySelector('.cor-h3')

// qualquer outro elemento

document.querySelector('[src]')

// querySelectorAll('') Forma de pegar Elementos HTML pela seletor  ou qualquer outro elemento até links e vai pegar varios elementos de uma so vez, ou seja uma coleção de Nós (NodeList).

// Com querySelectorAll('') podemos usar NodeList para fazr um forEach

const elements = document.querySelectorAll('.meu-h2')

elements.forEach(el => console.log(el))


// Qual usar?

// getElementById (element).
// getElementsByClassName (HTMLCollection).
// getElementsByTagName (HTMLCollection).
// querySelector    (element).
// querySelectorAll (NodeList).

// querySelector vs getElementsById ambos vão retornar diretamente o (elemento).

// getElementsByTagName também retorna um (HTMLCollection).

// querySelectorAll vs getElementsByClassName
// querySelectorAll vai te retornar um dado (Nodelist) que permite o uso do forEach().

// querySelectorAll vai te retornar um dado (HTMLCollection).




