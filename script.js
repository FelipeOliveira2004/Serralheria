const botaoMenu = document.querySelector('#botaoMenu');
const menu = document.querySelector('menu');
const menuOpcoes = [...menu.querySelectorAll('a')];

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
})

menuOpcoes.map(element => {
    element.addEventListener('click', () => {
        menu.classList.remove('ativo');
    })
})

const servicosOpcoes = [...document.querySelectorAll('#servicos > ul > li')]
const galeria = [...document.querySelectorAll('#fotos > .galeria')]

servicosOpcoes.map((element, index) => {
    element.addEventListener('click', () => {
        servicosOpcoes.forEach(element => {
            element.classList.remove('ativo');
        })

        element.classList.add('ativo');

        galeria.forEach(element => {
            element.classList.remove('ativo');
        })
        galeria[index].classList.add('ativo')
    })
})