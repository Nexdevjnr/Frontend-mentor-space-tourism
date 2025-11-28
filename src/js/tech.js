let tech = [];
const techNav = document.querySelectorAll(".tech-nav-link");

async function loadTech() {
  const res = await fetch("../data.json");
  const data = await res.json();
  tech = data.technology;
  displayTech(0);
}

function displayTech(index) {
  const technology = tech[index];

  document.querySelector(".tech-name").textContent = technology.name;
  document.querySelector(".tech-description").textContent =
    technology.description;

  techNav.forEach((btn, i) => {
    btn.classList.toggle("tech-nav-link-active", i === index);
  });

  const img = document.querySelector(".tech-img");
  const sources = document.querySelectorAll(".tech-img-wrapper source");

  sources[0].srcset = "../" + technology.images.portrait.substring(2);
  sources[1].srcset = "../" + technology.images.landscape.substring(2);

  img.src = "../" + technology.images.portrait.substring(2);
  img.alt = technology.name;
}

techNav.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    displayTech(index);
  });
});

loadTech();
