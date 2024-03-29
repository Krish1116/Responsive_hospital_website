const navItems = document.querySelector("#nav__items");
const openNavBtn = document.querySelector("#open__nav-btn");
const CloseNavBtn = document.querySelector("#close__nav-btn");

console.log(navItems);
openNavBtn.addEventListener("click", () => {
  navItems.style.display = "flex";
  openNavBtn.style.display = "none";
  CloseNavBtn.style.display = "inline-block";
});

const closeNav = () => {
  navItems.style.display = "none";
  openNavBtn.style.display = "inline-block";
  CloseNavBtn.style.display = "none";
};

CloseNavBtn.addEventListener("click", closeNav);
