const modals = document.querySelectorAll('[data-modal]')

modals.forEach(modal => {
  const openBtn = document.querySelector(
    `[data-modal-open="${modal.dataset.modal}"]`
  )
  const closeBtn = modal.querySelector('[data-modal-close]')

  openBtn.addEventListener('click', () => {
    bodyScrollLock.disableBodyScroll(modal)
    modal.classList.remove('is-hidden')
  })

  closeBtn.addEventListener('click', () => {
    bodyScrollLock.enableBodyScroll(modal)
    modal.classList.add('is-hidden')
  })
})
