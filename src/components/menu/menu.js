const menuLink = document.querySelectorAll('.about__menu-list a')

menuLink.forEach((item) => {
    item.addEventListener('click', () => {

        menuLink.forEach((item) => {
            item.classList.remove('active')
        })

        item.classList.add('active')
    })
})