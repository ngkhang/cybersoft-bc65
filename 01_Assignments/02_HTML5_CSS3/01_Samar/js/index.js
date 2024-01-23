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
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// Setup Fancybox
Fancybox.bind("[data-fancybox]", {
  // Your custom options
  Thumbs: {
    type: "classic",
  },
});

// Setup Counter-Up
$('.counter').countUp({
  'time': 2000,
  'delay': 10
});

// Setup Wow.js
new WOW().init();

// Handle Scroll to Top
const handleScrollToTop = () => {
  window.scrollTo(0, 0);
}

// Handle visible button scroll to Top
window.addEventListener('scroll', () => {
  const OFFSET = 300;
  const btnScrollToTop = document.getElementById('btnScrollToTop');
  let windowTop = window.scrollY || document.documentElement.scrollTop;

  (windowTop > OFFSET)
    ? btnScrollToTop.classList.add('btn-is-visible')
    : btnScrollToTop.classList.remove('btn-is-visible');
})