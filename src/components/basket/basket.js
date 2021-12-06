const basketNumber = document.querySelector('.basket span')

if (+basketNumber.textContent > 0) {
    basketNumber.style.backgroundColor = "#DF3663";
    basketNumber.style.color = "#fff";

}