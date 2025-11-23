const navBtn = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const close = document.querySelector(".close-menu");

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

close.addEventListener("click", () => {
  navLinks.classList.remove("active");
});
