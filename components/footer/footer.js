document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('[data-nav-button]')
  const pages = document.querySelectorAll('[data-nav-page]')

  function hideAllPage() {
    pages.forEach(page => {
      page.classList.add('pageHidden')
    })
  }

  function handleRouteActiveClasses(matchedRoute) {
    navButtons.forEach(btn => {
      btn.classList.remove('footer__nav-link--Active')

      const iteratedRoute = btn.getAttribute('data-nav-button')
      if (iteratedRoute === matchedRoute) {
        btn.classList.add('footer__nav-link--Active')
      }
    })
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      const matchedRoute = e.currentTarget.getAttribute('data-nav-button')

      handleRouteActiveClasses(matchedRoute)
      hideAllPage()

      const matchedPage = document.querySelector(`[data-nav-page=${matchedRoute}]`)
      matchedPage.classList.remove('pageHidden')
    })
  })
})
