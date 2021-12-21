const navbarLinks = document.querySelectorAll('.navbar__list a')

navbarLinks.forEach(item => {
    item.addEventListener('click', () => {
        
        navbarLinks.forEach(item => {
            item.classList.remove('active')
        })

        item.classList.add('active')
    })
})