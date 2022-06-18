$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],
        autoplay: true,
        autoplayTimeout: 2500,
        autoplaySpeed: 2500,
        autoplayHoverPause: 2500,
        navSpeed: 2000,
        responsive:{
            0:{
                items:1
            },

            540:{
                items:2
            },

            750:{
                items:3
            },

            1100:{
                items:5
            }
        }
    });
});