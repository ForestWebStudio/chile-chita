const timeTabs = document.querySelectorAll('.modal-time__tab')
const timeItems = document.querySelectorAll('.modal-time__items')

timeTabs.forEach((item) => {
    item.addEventListener('click', () => {
        let currentBtn = item
        let tabId = currentBtn.getAttribute('data-tab')
        let currentTab = document.querySelector(tabId)

        if (!currentBtn.classList.contains('active')) {
            timeTabs.forEach(item => {
                item.classList.remove('active')
            })
    
            timeItems.forEach(item => {
                item.classList.remove('active')
            })
    
            currentBtn.classList.add('active')
            currentTab.classList.add('active')
        }
    })
})
