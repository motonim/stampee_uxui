window.addEventListener('DOMContentLoaded', function(){

    // Scroll To Top
    let btnScollToTop = document.querySelector('[data-js-scroll-to-top]');

    btnScollToTop.addEventListener('click', function(e){
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })

    // Footer Year
    document.getElementById("copyright-year").innerHTML = new Date().getFullYear();

    // Add aria-label to carousel buttons
    let carouselBtnPrev = document.querySelector('.owl-prev');
    let carouselBtnNext = document.querySelector('.owl-next');
    carouselBtnPrev.ariaLabel = "carousel previous button";
    carouselBtnNext.ariaLabel = "carousel next button";
})