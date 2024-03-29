const navItems = document.querySelector("#nav__items");
const openNavBtn = document.querySelector("#open__nav-btn");
const CloseNavBtn = document.querySelector("#close__nav-btn");

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

// testimonial section(swiper js)
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // responsive breakpoint
    breakpoints: {
      // when window width is >= 600px
      600: {
        slidesPerView: 2,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
      },
    },
  });
});
