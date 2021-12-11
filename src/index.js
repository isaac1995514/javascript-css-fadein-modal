import "./styles.css";

function openDialog() {
  const modal = document.getElementById("modal-container");
  modal.style.display = "grid";
}

function closeDialog(e) {
  e.stopPropagation();
  const modal = document.getElementById("modal-container");
  modal.style.display = "none";
}

const openBtn = document.getElementById("open-btn");
const crossBtn = document.getElementById("cross-btn");
const curtain = document.getElementById("modal-container");

openBtn.addEventListener("click", openDialog);
crossBtn.addEventListener("click", closeDialog);
curtain.addEventListener("click", closeDialog);

window.openDialog = openDialog;
window.closeDialog = closeDialog;
