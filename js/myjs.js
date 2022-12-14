window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

// Boton Subir

let circulo = document.getElementById("chevron-up");
circulo.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 0) {
    circulo.style.display = "flex";
  } else {
    circulo.style.display = "none";
  }
});

window.onscroll = () => {
  if (window.scrollY < 300) {
    circulo.classList.remove("chevron-up-on");
  } else {
    circulo.classList.add("chevron-up-on");
  }
};
