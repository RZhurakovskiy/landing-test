const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line",
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 500,
};

// header container
ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    interval: 400,
});

// about container
ScrollReveal().reveal(".about__card", {
    ...scrollRevealOption,
    interval: 400,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
    ...scrollRevealOption,
    interval: 400,
});

// news container
ScrollReveal().reveal(".news__card", {
    ...scrollRevealOption,
    interval: 400,
});

$(document).ready(function () {
    $(".cats-slider").owlCarousel({
        items: 2,
        margin: 25,
    });
});
