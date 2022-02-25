// AOS.init();
// new WOW().init();

// Nav

const iconsmenue = document.querySelector("i");
const linkes = document.querySelector("header .navbares .link");
const header = document.querySelector("header");
const linkcreat = document.querySelector(
  "header .navbares .link .register .button-two a"
);

iconsmenue.addEventListener("click", () => {
  iconsmenue.classList.toggle("fa-x");
});

window.addEventListener("scroll", (eo) => {
  if (window.scrollY > 50) {
    header.classList.add("header-fixed");
    linkcreat.classList.add("link-background");
  } else {
    header.classList.remove("header-fixed");
    linkcreat.classList.remove("link-background");
  }
});

//

const arrowup = document.querySelector(".arrow-up");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    arrowup.classList.add("show");
  } else {
    arrowup.classList.remove("show");
  }
});

arrowup.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
