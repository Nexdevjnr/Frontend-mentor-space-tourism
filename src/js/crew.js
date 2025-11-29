let crewMembers = [];
const navButtons = document.querySelectorAll(".crew-nav-btn");

async function loadCrew() {
  const res = await fetch("/src/data.json");
  const data = await res.json();
  crewMembers = data.crew;
  displayCrew(0);
}

function displayCrew(index) {
  const member = crewMembers[index];
  document.querySelector(".member-role").textContent = member.role;
  document.querySelector(".member-name").textContent = member.name;
  document.querySelector(".member-bio").textContent = member.bio;

  navButtons.forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });

  const img = document.querySelector(".member-img");
  img.src = "/src/" + member.images.webp.substring(2);
  img.alt = `${member.role} ${member.name}`;
}

navButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    displayCrew(index);
  });
});

loadCrew();
