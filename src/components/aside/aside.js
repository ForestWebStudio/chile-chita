const cartLink = document.querySelector('.cart__form-header a')
const cartDelete = document.querySelector('.cart__delete')
const orderingDelete = document.querySelector('.ordering__aside-header a')

if(cartLink) {
    cartLink.addEventListener('click', () => {
        cartLink.classList.toggle('active')
        cartDelete.classList.toggle('active')
    })
}


if (orderingDelete) {
    orderingDelete.addEventListener('click', () => {
        orderingDelete.classList.toggle('active')
        cartDelete.classList.toggle('active')
    })
}
