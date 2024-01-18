// Custom Owl-Carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});

// 
Fancybox.bind("[data-fancybox]", {
  // Your custom options
  Thumbs: {
    type: "classic",
  },
});
