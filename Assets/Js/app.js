// Active header
const active_header = document.querySelector("#header");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 500) {
    active_header.classList.add("header__active");
  } else {
    active_header.classList.remove("header__active");
  }
});

const active__headerMenu = document.querySelector("#header__menu");
active__headerMenu.addEventListener("click", function (e) {
  if (document.querySelector(".header__menu-block").clientHeight === 0) {
    document.querySelector(".header__menu-block").style.display = "block";
  } else {
    document.querySelector(".header__menu-block").style.display = "none";
  }
});
document.onclick = function (e) {
  if (e.clientY >= 300) {
    document.querySelector(".header__menu-block").style.display = "none";
  }
};
$(document).ready(function () {
  $(".slick").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='ti-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='ti-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
});
$(document).ready(function () {
  $(".video__slick").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  });
});
