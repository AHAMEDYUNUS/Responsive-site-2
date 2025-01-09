const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("sidebar");
const body = document.body;  // The body to listen for clicks outside the sidebar

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close sidebar if the user clicks outside of it
body.addEventListener("click", (e) => {
    // Check if the click was outside the sidebar and menu button
    if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
        // Remove 'active' class to close the sidebar
        navbar.classList.remove("active");
    }
});

// Prevent clicks inside the sidebar from closing it
navbar.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent the sidebar from closing if the user clicks inside it
});



new TypeIt("#typed", {
  speed: 50,
})
  .type("")
  .pause(500)
  .move(0)
  .type("!")
  .go();

const scrollRevealOption = {
    origin: 'bottom',
    distance:'50px',
    duration: 2500,
};

ScrollReveal().reveal('.header-logo', {
  ...scrollRevealOption,
  origin: "top",
});
ScrollReveal().reveal('.navbar', {
  ...scrollRevealOption,
  origin: "top",
});
ScrollReveal().reveal('.right-grid', {delay:500});
ScrollReveal().reveal('.left-grid p', {delay:500});

ScrollReveal().reveal('.im1', {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal('.im2', {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal('.volume', {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal('.img-volume', {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal('.see-more-content div', {
  ...scrollRevealOption,
  origin: "left",
  interval: 500,
});
ScrollReveal().reveal('.see-more div', {
  ...scrollRevealOption,
  origin: "left",
  interval: 500,
});

ScrollReveal().reveal('.input div', {
  ...scrollRevealOption,
  origin: "right",
  interval: 500,
});
ScrollReveal().reveal('p', {
  ...scrollRevealOption,
  origin: "bottom",
  interval: 500,
});


ScrollReveal().reveal('.btn', {
  ...scrollRevealOption,
  origin: "bottom",
  interval: 500,
});