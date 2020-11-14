// Constantes para acceder al DOM comodamente

const checkbox = document.querySelector("#checkbox");
const body = document.body;

// Si Por defecto se tiene en sistema el DARKMODE

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  checkbox.setAttribute("checked", true);
  document.body.classList.add("darktheme");
}

//EventListener, si el Checkbox cambia => Togglea el Darktheme

checkbox.addEventListener("change", function (event) {
  if (this.checked) {
    body.classList.toggle("darktheme");
  } else {
    body.classList.toggle("darktheme");
  }
});
