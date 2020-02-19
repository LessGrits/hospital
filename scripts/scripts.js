const menu = document.querySelector('.header-top__body');
const contactInfo = document.querySelector('.contact-info');

addEventListener("scroll", ()=> {
    const scrolled = document.scrollingElement.scrollTop;
    const position = menu.offsetTop;
    scrolled >= position + 10 && (menu.classList.add('fixed') , contactInfo.classList.add('hidden'));
    scrolled === 0 && (menu.classList.remove('fixed') , contactInfo.classList.remove('hidden'));
});

