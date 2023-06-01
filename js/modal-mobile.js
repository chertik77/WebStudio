;(() => {
 const refs = {
  openModalBtn: document.querySelector("[data-modal-open-mobile-pf]"),
  closeModalBtn: document.querySelector("[data-modal-close-mobile-pf]"),
  modal: document.querySelector("[data-modal-mobile-pf]"),
 }
 refs.openModalBtn.addEventListener("click", toggleModal)
 refs.closeModalBtn.addEventListener("click", toggleModal)
 function toggleModal() {
  refs.modal.classList.toggle("is-hidden")
 }
})()
