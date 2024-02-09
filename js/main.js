

// Скрол
const anchors = document.querySelectorAll(`a[href*="#"]`);

anchors.forEach((el) => {
    el.addEventListener(`click`, (e) =>{
        e.preventDefault();
        const blockId = el.getAttribute(`href`);
        document.querySelector(``+blockId).scrollIntoView({
            behavior:`smooth`,
            blokk:`start`,
        })
    })
});

// бургер
const burger = document.querySelector(`.burger`);
const headerNavigation = document.querySelector(`.header__mobile-navigation`);
const overlay =document.querySelector(`#overlay`)

burger.addEventListener(`click`, function(e){
    this.classList.toggle(`active`);
    headerNavigation.classList.toggle(`active`);
    overlay.classList.toggle(`active`);
})
// Fancy

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});
