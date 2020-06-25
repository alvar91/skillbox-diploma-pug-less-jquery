$(".slider__list").slick({
  infinite: true,
  arrows: true,
  prevArrow: $(".slider__nav--left"),
  nextArrow: $(".slider__nav--right"),
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1370,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: "nav-circle__list",
        appendDots: $(".nav-circle"),
      },
    },
    {
      breakpoint: 1024,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: "nav-circle__list",
        appendDots: $(".nav-circle"),
      },
    },
    {
      breakpoint: 600,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        arrows: false,
        dots: true,
        dotsClass: "nav-circle__list",
        appendDots: $(".nav-circle"),
      },
    },
  ],
});
