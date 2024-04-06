document.addEventListener('DOMContentLoaded', () => {
  $('.subscribe__sliderBox-slider').slick({
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

  /* SUBSCRIBES */
  const subscribesList = document.querySelector('.subscribes__list')
  const subscribes = subscribesList.querySelectorAll('.subscribes__list-item')

  function handleSubscribeCheckLogic(clickedItem) {
    subscribes.forEach(item => {
      const checkIcon = item.querySelector('.subscribes__list-item-checkMark')

      if (item !== clickedItem) {
        item.classList.remove('subscribes__list-item--Checked')
        checkIcon.setAttribute('src', 'pages/subscribe/img/checkmark-gray.svg')
      } else {
        item.classList.add('subscribes__list-item--Checked')
        checkIcon.setAttribute('src', 'pages/subscribe/img/checkmark.svg')
      }
    })
  }

  subscribesList.addEventListener('click', e => {
    const clickedItem = e.target.closest('.subscribes__list-item')
    if (clickedItem) {
      handleSubscribeCheckLogic(clickedItem)
    }
  })
});
