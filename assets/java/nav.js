$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 5) {
    	$('#nav').addClass('shrink');
    }
    else {
    $('#nav').removeClass('shrink');
    }
  });
});