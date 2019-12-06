$(".reviews-text").on("afterChange", function(event, slick, currentSlide) {
  $(this)
    .find(".slick-slide.text-open")
    .not(".slick-active")
    .removeClass("text-open");
});
$(".reviews-text__btn").on("click", function() {
	this.parentElement.classList.toggle("text-open");
	$(".reviews-text").find('.slick-slide.slick-active').height('auto');
	$(".reviews-text").find('.slick-list').height('auto');
});
$(".reviews-text").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
	arrows: true,
	dots: true,
  nextArrow: ".arrow-right-text",
	prevArrow: ".arrow-left-text",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
				adaptiveHeight: true
      }
    }
  ]
});
$(".video-slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
	arrows: true,
	dots: false,
  nextArrow: ".arrow-right-video",
	prevArrow: ".arrow-left-video",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
				slidesToScroll: 2,
				dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
				slidesToScroll: 2,
				dots: true
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
				adaptiveHeight: true,
				dots: true
      }
    }
  ]
});