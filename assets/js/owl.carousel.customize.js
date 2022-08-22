$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin:30,
    center: true,
    nav:true,
    navText: [
        "<span class='owl-btn-left'><i class='fa-solid fa-arrow-left'></i></span>",
        "<span class='owl-btn-right'><i class='fa-solid fa-arrow-right'></i></span>"
    ],
    autoHeight:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        },
        1400: {
            items:6
        },
        1800: {
            items:8
        }
    }
})