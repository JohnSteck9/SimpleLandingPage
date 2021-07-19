const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbar__links_ul");
const links = document.querySelectorAll(".navbar__links_ul li");

const navbarLogo = document.querySelector(".navbar__logo");
// const nav = document.querySelector("#navbar");

hamburger.addEventListener("click", () => {
  navbarLogo.classList.toggle("ok");
  // nav.classList.toggle("open");

  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

console.log("js Ok")

