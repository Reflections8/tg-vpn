document.addEventListener('DOMContentLoaded', () => {
  const createBtn = document.querySelector('.popup__createDevice-footer-btn')
  const createBtnText = document.querySelector('.popup__createDevice-footer-btn-text')
  const createBtnLoader = document.querySelector('.popup__createDevice-footer-btn-loader')

  createBtn.addEventListener('click', () => {
    createBtnText.style.display = 'none'
    createBtnLoader.style.display = 'block'
    setTimeout(() => {
      createBtnText.style.display = 'block'
      createBtnLoader.style.display = 'none'
    }, 1000)
  })

  /* PILLS */
  const pillsWrapper = document.querySelector('.popup__createDevice-pills-main')
  const shape = pillsWrapper.querySelector('.shape')
  const tabs = pillsWrapper.querySelectorAll('.tab')
  const radios = pillsWrapper.querySelectorAll('input[type="radio"]')
  let tabWidth = tabs[0].clientWidth
  shape.style.width = `${tabWidth}px`


  window.addEventListener('resize', () => {
    tabWidth = tabs[0].clientWidth
    shape.style.width = `${tabs[0].clientWidth}px`

    radios.forEach((radio, index) => {
      if (radio.checked) {
        if (index + 1 === 1) {
          shape.style.left = '2px'
        }
        if (index + 1 === 2) {
          shape.style.left = `${tabWidth}px`
        }
        if (index + 1 === 3) {
          shape.style.left = `${tabWidth * 2}px`
        }
      }
    })
  })

  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      const clickedTab = e.currentTarget.getAttribute('for')
      switch (clickedTab) {
        case 'tab_1':
          shape.style.left = '2px'
          break
        case 'tab_2':
           shape.style.left = `${tabWidth}px`
          break
        case 'tab_3':
           shape.style.left = `${tabWidth * 2}px`
          break
      }
    })
  })
})
