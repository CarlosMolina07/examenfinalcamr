const $btniniciarsesion = document.querySelector(".iniciar-sesion-btn"),
  $btnregistrarse = document.querySelector(".registrarse-btn"),
  $registrarse = document.querySelector(".registrarse"),
  $iniciarsesion = document.querySelector(".iniciar-sesion");

document.addEventListener("click", (e) => {
  if (e.target === $btniniciarsesion || e.target === $btnregistrarse) {
    $iniciarsesion.classList.toggle("active");
    $registrarse.classList.toggle("active");
  }
});
