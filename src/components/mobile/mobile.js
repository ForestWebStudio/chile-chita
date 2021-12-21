const mobileBtn = document.querySelector('.burger button')
const main = document.querySelector('main')
const footer = document.querySelector('footer')
const mobileMenu = document.querySelector('.mobile__menu')

mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.toggle('active')
    main.classList.toggle('active')
    footer.classList.toggle('active')
    mobileMenu.classList.toggle('active')
})
