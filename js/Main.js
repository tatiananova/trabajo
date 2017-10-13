

$(document).ready(function(){
	$('.carousel').carousel();
	$('.slider').slider({
 		indicators: false
	},'next');
	$(".button-collapse").sideNav();
	$( '#my-slider' ).sliderPro({
		width: 200,
		height: 200,
		visibleSize: '100%',
		forceSize: 'fullWidth',
		autoSlideSize: true
	});
});

