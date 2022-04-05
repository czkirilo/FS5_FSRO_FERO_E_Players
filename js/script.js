let menu = document.getElementById("menu")

function mostrarMenu() {
  if (menu.style.display != "flex") {
    menu.style.display = "flex"
  } else {
    menu.style.display = "none"
  }
}

function mostrarPopup() {
  window.alert("eae parça")
}

let email = document.getElementById("campo-email")

function enviarEmail() {
  let emailDigitado = email.value
  console.log(emailDigitado)
}