// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika menu diklik
document.querySelector("#cek").onclick = () => {
  navbarNav.classList.toggle("active");
};

//untuk meghilangkan nav
const cek = document.querySelector("#cek");

document.addEventListener("click", function (e) {
  if (!navbarNav.contains(e.target) && !cek.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
