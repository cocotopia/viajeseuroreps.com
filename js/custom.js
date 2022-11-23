// navigation  menu js
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");

}


// owl carousel slider js
$('.owl-first').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

$(".owl-second").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});