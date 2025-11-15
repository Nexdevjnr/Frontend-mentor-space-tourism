const navBtn = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
