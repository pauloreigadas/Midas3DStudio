$(function(){
	$(".carousel-clients").slick({
    centerMode: true,
    centerPadding: "0px",    
    infinite: true,
    slidesToShow: 4,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,

	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        // arrows: false,
	        centerMode: true,
	        centerPadding: '00px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        // arrows: false,
	        centerMode: true,
	        centerPadding: '00px',
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        // arrows: false,
	        centerMode: true,
	        centerPadding: '0px',
	        slidesToShow: 1
	      }
	    }
	  ]


	});
  $(".slick-slide").css("display", "flex");
});
