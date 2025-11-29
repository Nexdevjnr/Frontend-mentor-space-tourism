const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const closeMenu = document.querySelector(".close-menu");
const overlay = document.querySelector(".overlay");

function toggleMenu() {
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

hamburger.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
