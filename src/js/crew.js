let crewMembers = [];

async function loadCrew() {
  const res = await fetch("../data.json");
  const data = await res.json();
  crewMembers = data.crew;
  displayCrew(0);
}

function displayCrew(index) {
  const member = crewMembers[index];
  document.querySelector(".member-role").textContent = member.role;
  document.querySelector(".member-name").textContent = member.name;
  document.querySelector(".member-bio").textContent = member.bio;
  const navButtons = document.querySelectorAll(".crew-nav-btn");

  navButtons.forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });

  const img = document.querySelector(".member-img");
  img.src = "../" + member.images.webp.substring(2);
  img.alt = `${member.role} ${member.name}`;
}

const navButtons = document.querySelectorAll(".crew-nav-btn");

navButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    displayCrew(index);
  });
});

loadCrew();
