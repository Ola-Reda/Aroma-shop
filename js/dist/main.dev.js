"use strict";

$(document).ready(function () {
  //product
  // $('.owl-carousel').owlCarousel({
  //     loop: true,
  //     margin: 10,
  //     dots: false,
  //     autoplay: true,
  //     autoplayTimeout: 5000,
  //     responsive: {
  //         0: {
  //             items: 1,
  //         },
  //         600: {
  //             items: 2,
  //         },
  //         800: {
  //             items: 3,
  //         }
  //     }
  // })
  //best
  $('.anthor-owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      950: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
});