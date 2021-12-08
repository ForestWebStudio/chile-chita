window.onload = function preloader () {
    let preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader__hide')
    setTimeout(() => {
        preloader.classList.add('preloader__none');
    }, 950);
};
