// Сабскрибе
const buttonSubscribe = document.querySelector(`.button-subscribe`);
const emailSubscribe = document.querySelector(`.email-subscribe`);

buttonSubscribe.addEventListener(`click`, function(e){
    this.classList.toggle('active')
    if(!emailSubscribe.classList.contains('active')){
        e.preventDefault()
    emailSubscribe.classList.toggle('active')
    }
})

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
