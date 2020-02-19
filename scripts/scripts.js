const menu = document.querySelector('.header-top__body');
const body = document.body;

addEventListener("scroll", ()=>{
    const scrolled = document.scrollingElement.scrollTop;
    const position = menu.offsetTop;
    scrolled >= position && menu.classList.add('fixed');
    scrolled === 0 && menu.classList.remove('fixed');
});

