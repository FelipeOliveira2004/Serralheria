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