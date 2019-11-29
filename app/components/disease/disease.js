$(".disease-content").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: ".arrow-left",
	prevArrow: ".arrow-right",
	autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
		{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
				slidesToScroll: 3,
				autoplay: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
				slidesToScroll: 2,
				autoplay: false,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
				slidesToScroll: 2,
				autoplay: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
				adaptiveHeight: true,
				arrows: false
      }
    }
  ]
});
