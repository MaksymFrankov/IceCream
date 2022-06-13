(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-buy-open]"),
    closeModalBtn: document.querySelector("[data-buy-close]"),
    modal: document.querySelector("[data-buy]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-mob-open]"),
    modal: document.querySelector("[data-mob]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();