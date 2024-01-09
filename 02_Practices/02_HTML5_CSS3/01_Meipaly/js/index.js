// Slick custom
$(document).ready(function () {
  $(".slickCustom").slick({
    autoplay: true,
    accessibility: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    dotsClass: 'slick-dots',
    arrows: false,
  })
})

// Fancybox custom
Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: false
});

// Countup
$('.counter').countUp({
  'time': 1500,
  'delay': 10,
});

// Scroll to Top 
$(document).ready(function () {
  $(".btnUp").click((event) => {
    event.preventDefault();
    /*
      (selector).animate({styles},speed,easing,callback)
    or (selector).animate({styles},{options}) 
    */

    $('html, body').animate({
      scrollTop: 0,
    }, {
      easing: "swing",
      duration: 400,
    });
  });
})


// Hidden/ Visibility button scroll
$(document).scroll(() => {
  if (window.scrollY > screen.height / 3) {
    $(".btnUp").addClass('visibility');
    $(".btnUp").removeClass('hidden');
  }
  else {
    $(".btnUp").addClass('hidden');
    $(".btnUp").removeClass('visibility');
  }
});
