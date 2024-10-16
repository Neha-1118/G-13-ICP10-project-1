// HOME SWIPER


var swiper = new Swiper(".home-swiperr", {
    spaceBetween: 85,
    //autoplay: {
      //delay: 2500,
      //disableOnInteraction: false,
    //},
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });