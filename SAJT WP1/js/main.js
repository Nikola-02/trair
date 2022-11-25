const hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("menu-active");
});

const nav_menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  nav_menu.classList.toggle("mobile-nav");
});
