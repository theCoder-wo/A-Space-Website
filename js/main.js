/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((link) => link.addEventListener("click", linkAction));
/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);
/*=============== SWIPER PLANETS ===============*/
const swiperTravel = new Swiper(".travel-swiper ", {
  loop: true,
  spaceBetween: "32",
  grabCursor: "true",
  slidesPerview: "auto",
  centeredSlides: "auto",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },
});
/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scrollUp");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 58;
    const sectionId = section.getAttribute("id");
    const sectionClass = document.querySelector(
      `.nav-menu a[href*='${sectionId}']`
    );

    if (
      scrollPosition > sectionTop &&
      scrollPosition <= sectionTop + sectionHeight
    ) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2500,
  delay: 300,
});

sr.reveal(`.home-data, .travel-swiper, .contact-container`);
sr.reveal(`.home-img`, { origin: "bottom" });
sr.reveal(`.home-ovni`, { delay: 800 });
sr.reveal(`.explore-img`, { origin: "left" });
sr.reveal(`.explore-data`, { origin: "right" });
sr.reveal(`.explore-planet`, { origin: "right", delay: 800 });
sr.reveal(`.history-card`, { interval: 100 });
sr.reveal(`.history-planet-1`, { origin: "left", delay: 1000 });
sr.reveal(`.history-planet-2`, { origin: "right", delay: 1200 });
sr.reveal(`.footer-planet-1`, { origin: "bottom", delay: 600 });
sr.reveal(`.footer-planet-2`, { delay: 800 });
