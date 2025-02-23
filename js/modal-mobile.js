const refs = {
  openModalBtn: document.querySelector('[data-modal-open-mobile-pf]'),
  closeModalBtn: document.querySelector('[data-modal-close-mobile-pf]'),
  modal: document.querySelector('[data-modal-mobile-pf]')
}

refs.openModalBtn.addEventListener('click', () => {
  refs.modal.classList.remove('is-hidden')
  bodyScrollLock.disableBodyScroll(refs.modal)
})

refs.closeModalBtn.addEventListener('click', () => {
  refs.modal.classList.add('is-hidden')
  bodyScrollLock.enableBodyScroll(refs.modal)
})
