const botaoMenu = document.querySelector('#botaoMenu');

botaoMenu.addEventListener('click', () => {
    const menu = document.querySelector('menu');

    menu.classList.toggle('ativo');
})