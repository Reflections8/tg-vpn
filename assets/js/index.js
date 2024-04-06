document.addEventListener('DOMContentLoaded', () => {
  /* ROOT FOOTER PADDING */
  const root = document.querySelector('.rootContainer');
  const footer = document.querySelector('.footerWrapper');

  const updateRootMaxHeight = () => {
    const footerHeight = footer.offsetHeight;
    root.style.paddingBottom = `calc(${footerHeight}px + 24px)`;
  };

  const resizeObserver = new ResizeObserver(updateRootMaxHeight);
  resizeObserver.observe(footer);

  updateRootMaxHeight();


  /* POPUPS */
  const popupWrapper = document.querySelector('.popupWrapper')

  const popups = document.querySelectorAll('[data-popup]')
  const popupButtons = document.querySelectorAll('[data-popup-btn]')
  const popupCloseIcons = document.querySelectorAll('[data-popup-close]')

  function closeAllPopups() {
    popupWrapper.classList.add('popupWrapper--Hidden')
    popups.forEach(popup => {
      popup.classList.add('popup--Hidden')
    })
  }

  popupButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      const currentAttr = e.currentTarget.getAttribute('data-popup-btn')
      const matchedPopup = document.querySelector(`[data-popup=${currentAttr}]`)
      matchedPopup.classList.remove('popup--Hidden')
      popupWrapper.classList.remove('popupWrapper--Hidden')
    })
  })

  /* Close by icon */
  popupCloseIcons.forEach(closeIcon => {
    closeIcon.addEventListener('click', closeAllPopups)
  })

  /* Close by outside click */
  popupWrapper.addEventListener('click', e => {
    if (!e.target.closest('[data-popup]')) {
      closeAllPopups()
    }
  })
});
