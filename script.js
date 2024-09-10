// Initialize Swiper with options
var swiper = new Swiper(".mySwiper", {
  // Number of slides to show at once
  slidesPerView: 1,

  // Enable infinite loop for continuous scrolling
  loop: true,

  // Configuration for pagination
  pagination: {
    el: ".swiper-pagination", // Selector for the pagination element
    clickable: true, // Allow pagination bullets to be clickable
  },

  // Configuration for navigation buttons
  navigation: {
    nextEl: ".swiper-button-next", // Selector for the "next" button element
    prevEl: ".swiper-button-prev", // Selector for the "previous" button element
  },
});