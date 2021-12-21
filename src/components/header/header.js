const header = document.querySelector('.header')
const main = document.querySelector('main')
const headerHeight = header.offsetHeight
const mainHeight = main.offsetHeight
const cart = document.querySelector('.cart')


window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY
    if(scrollDistance >= 300) {
        header.classList.add('header--scroll')
        main.style.marginTop = `${headerHeight}px`
        if (cart) {
            cart.style.top = `${100}px`
        }
    } else {
        header.classList.remove('header--scroll')
        main.style.marginTop = null
        if (cart) {
            cart.style.top = null
        }

    }
})
