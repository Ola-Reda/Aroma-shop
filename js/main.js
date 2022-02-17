$(document).ready(function() {
    //navbar
    $('.navbar-toggler').click(function() {
        // $("span").css("background-color", "yellow"),
        // $("span").Animate({ border: "yellow" });
        // $('span:first-child').css("transform ", "rotate(20deg)");
        // $("span:nth-child(2)").css("opacity", "0"),
        // $('span:last-child').css("transform", "rotate(40deg)");

    });


    //section product
    $('.owl-carousel:first').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            800: {
                items: 3,
            }
        }
    });



    $(".owl-carousel").hover(function() {
        $(".carousel-link").slideToggle(function() {
            $('this').animate({
                bottom: "100px",
                opacity: "0"
            }, 500);
        });
    });




    //section best
    $(".owl-carousel:last").owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            950: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    })

});