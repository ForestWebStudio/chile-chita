const aboutMenu = document.querySelectorAll('.about__menu a')

aboutMenu.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault()
        let currentBtn = item
        const href = this.getAttribute('href').substring(1)
        const scrollTarget = document.getElementById(href)
        const topOffset = 200
        const elementPosition = scrollTarget.getBoundingClientRect().top
        const offsetPosition = elementPosition - topOffset

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })

        aboutMenu.forEach(item => {
            item.classList.remove('active')
        })

        currentBtn.classList.add('active')
    })
})



