///////////////////////////////////////// owl-carousel ////////////////////////////////
$(function () {
  $(".owl_show_carosal").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    nav: false,
    mouseDrag: true,
    dotsEach: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
});
$(function () {
  $(".owl-ourNews-carosal").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    nav: true,
    mouseDrag: true,
    dotsEach: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
});
$(function () {
  $(".companis_carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 15,
    nav: false,
    mouseDrag: true,
    dotsEach: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      798: {
        items: 3,
      },
    },
  });
});
///////////////////////////////////////// owl-carousel ////////////////////////////////
// ///////////////////////////////////////// nice scroll ////////////////////////////////
// $(function () {
//   "use strict";

//   $("html").niceScroll({
//     cursorColor: "#040B14",
//   });
// });
// ///////////////////////////////////////// nice scroll ////////////////////////////////
