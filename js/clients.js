$(function(){
	$(".carousel-clients").slick({
    centerMode: true,
    centerPadding: "0px",    
    infinite: true,
    slidesToShow: 4,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true

	  // responsive: [
	  //   {
	  //     breakpoint: 768,
	  //     settings: {
	  //       arrows: false,
	  //       centerMode: true,
	  //       centerPadding: '40px',
	  //       slidesToShow: 3
	  //     }
	  //   },
	  //   {
	  //     breakpoint: 480,
	  //     settings: {
	  //       arrows: false,
	  //       centerMode: true,
	  //       centerPadding: '40px',
	  //       slidesToShow: 1
	  //     }
	  //   }
	  // ]


	});
  // $(".slick-slide").css("display", "flex");
});
