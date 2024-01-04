$(document).ready(function () {
  $(".slickCustom").slick({
    autoplay: true,
    accessibility: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    dotsClass: 'slick-dots',
    arrows: false,
  })
})

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
