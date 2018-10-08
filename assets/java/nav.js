$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 5) {
    	$('nav').addClass('shrink');
    }
    else {
    $('nav').removeClass('shrink');
    }
  });
});

function responsiveNav() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}