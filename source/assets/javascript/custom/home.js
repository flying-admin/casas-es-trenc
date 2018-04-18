if ( $('.carousel-home').length > 0 ) {
  var homeSwiperParams = {
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };
  var carouselHome = new Swiper('.carousel-home__slider', homeSwiperParams);
}