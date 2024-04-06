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

  /* Copy device links to clipboard */
  const linkBoxes = document.querySelectorAll('.main__devicesBox-grid-item-link')
  linkBoxes.forEach(linkBox => {
    linkBox.addEventListener('click', e => {
      const textElement = linkBox.querySelector('.main__devicesBox-grid-item-link-text')
        navigator.clipboard.writeText(textElement.innerText)
          .catch(err => {
           alert(`Не удалось скопировать ссылку, ошибка: ${err}`)
          });
    })
  })

});
