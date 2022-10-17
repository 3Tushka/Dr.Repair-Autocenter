import Swiper from "swiper/bundle"


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        }
    }
});

new Swiper(".price-list", {
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
});