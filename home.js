document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.home-slider', {
        loop: true,
        autoplay: {
            delay: 5000, // Change slide every 5 seconds
        },
    });
});