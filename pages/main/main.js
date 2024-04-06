document.addEventListener('DOMContentLoaded', () => {
  $('.main__sliderBox-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: false,
    dots: false,
    autoplay: 2000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});
