//  Submenú desplegable para versión mobile.

const navbarIcon = document.querySelector(".navbar__icon");
const navbarMenu = document.querySelector(".navbar__menu");

navbarIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});
