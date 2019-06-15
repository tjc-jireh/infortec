$(function() {
	
	$('.slide').unslider({
		fluid: true,
	    keys: true,
	    dots: true,
		speed: 900
	});


    var unslider = $('.slide').unslider();
    
    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];
        
        unslider.data('unslider')[fn]();
    });
	
});