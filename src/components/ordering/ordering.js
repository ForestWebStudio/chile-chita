const userTabs = document.querySelectorAll('.form__user-tab')
const userItems = document.querySelectorAll('.form__user-item')

userTabs.forEach(item => {
    

    item.addEventListener('click', () => {
        let currentBtn = item
        let tabId = currentBtn.getAttribute("data-tab")
        let currentTab = document.querySelector(tabId)

        userTabs.forEach(item => {
            item.classList.remove('active')
        })

        userItems.forEach(item => {
            item.classList.remove('active')
        })

        currentBtn.classList.add('active')
        currentTab.classList.add('active')
    })
})
