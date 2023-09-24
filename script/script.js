//  Menú hamburguesa en el navbar del header para versión mobile.

const navbarIcon = document.querySelector(".navbar__icon");
const navbarMenu = document.querySelector(".navbar__menu");

navbarIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

//  Filtro desplegable en el shop para versión mobile.

const filterButton = document.querySelector(".filter__button");
const filterContent = document.querySelector(".filter__content--desplegable");

filterButton.addEventListener("click", () => {
  filterContent.classList.toggle("filter-show");
});
