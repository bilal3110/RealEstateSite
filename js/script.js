// const hamburger = document.getElementById("hamburger");
// const close = document.getElementById("closeMenu");
// const menu = document.getElementById("responsiveMenu");
// console.log('chal rha')
// hamburger.addEventListener("click", () => {
//   menu.classList.add("active");
// });

// close.addEventListener("click", () => {
//   menu.classList.remove("active");
// });

const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("closeMenu");
const responsiveMenu = document.getElementById("responsiveMenu");
const menuOverlay = document.getElementById("menuOverlay");

function openMenu() {
  responsiveMenu.classList.add("active");
  menuOverlay.classList.add("active");
  document.body.style.overflow = "hidden"; 
}

function closeMenuFunc() {
  responsiveMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.style.overflow = "auto"; 
}

hamburger.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeMenuFunc);
menuOverlay.addEventListener("click", closeMenuFunc);

const menuLinks = document.querySelectorAll(".r-nav .nav-link");
menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenuFunc);
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeMenuFunc();
  }
});

