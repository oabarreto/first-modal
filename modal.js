const openModalBtn = document.getElementById("openModal");

const modalWrapper = document.querySelector(".modal-wrapper");

const test = openModalBtn.addEventListener("click", function () {
  modalWrapper.classList.remove("invisible");
  isInvisibleOn = modalWrapper.classList.contains("invisible");
});

document.addEventListener("keydown", function (event) {
  const keyCode = event.key === "Escape" && !isInvisibleOn;

  if (keyCode) {
    modalWrapper.classList.add("invisible");
  }
});
