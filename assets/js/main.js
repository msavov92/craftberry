$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    nav: false,
	    item: 1,
	    dots: true,
	    responsiveClass:true,
	    navText: ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:1,
	            nav:true,
	        },
	        1000:{
	            items:1,
	            nav:true,
	        }
	    }
	})

	// Arrow carousel
	$('header .owl-nav .owl-next').on('click', function() {
		$('header .owl-nav i.fa-arrow-left-long').css('display', 'block')
	});

	// Toggle navigation 
	$('header .hamburger i').on('click', function() {
		$('header .main_nav').toggle('blind');
	})

});