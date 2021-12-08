const sliderHero = document.querySelector('.hero__inner')

const hero = new Swiper(sliderHero, {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".hero__button-next",
        prevEl: ".hero__button-prev",
    },
    pagination: {
        el: ".hero__bullets",
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        },
        991: {
            slidesPerView: 3
        },
    }
    
});
