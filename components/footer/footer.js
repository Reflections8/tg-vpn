document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('[data-nav-button]')
  const pages = document.querySelectorAll('[data-nav-page]')

  function hideAllPage() {
    pages.forEach(page => {
      page.classList.add('pageHidden')
    })
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      const clickedBtn = e.currentTarget.getAttribute('data-nav-button')
      hideAllPage()
      const matchedPage = document.querySelector(`[data-nav-page=${clickedBtn}]`)
      matchedPage.classList.remove('pageHidden')
    })
  })
})
