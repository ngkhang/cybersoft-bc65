// Slick custom
$(document).ready(() => {
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
$(document).ready(() => {
  $(".btnUp").click((event) => {
    event.preventDefault();
    const style = {
      scrollTop: 0,
    }

    const option = {
      easing: "swing",
      duration: 400,
    }
    /*
      (selector).animate({styles},speed,easing,callback)
    or (selector).animate({styles},{options}) 
    */

    $('html, body').animate(style, option);
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
