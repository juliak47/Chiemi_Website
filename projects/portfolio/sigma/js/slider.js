/*
Version: 1.0
Author: your name
Author URL: your site
License: (if other than below)
This is a FREE script and is dual licensed under the following:
http://www.opensource.org/licenses/mit-license.php | http://www.gnu.org/licenses/gpl.html
Aside from these comments, you may modify and distribute this file as you please. Have fun!
*/
$(document).ready(function(){
// this is a much simpler example though it will have more code than the dynamic example given
	let locTo = 2; // variable to hold the destination slide and caption
    let myTimer = setInterval(updateSlide, 4000);
	function updateSlide(){ // primary update function
		if(locTo == 1){ // if it is going to slide 1
			$('.slide').css("z-index", "5"); // ensures slide 2 & 3 are below slide one
			$('#slide_1').css("z-index", "30").stop().animate({left:0}, 1000, 'easeOutSine'); // stops current animations and shows active slide
			$('.caption').stop().animate({left:850, opacity:0}, 1000, 'swing'); // ensures both other captions are gone
			$('#cap_1').stop().animate({left:50, opacity:1}, 1000, 'swing', function(){ // shows current caption and afterwards moves other slides away.
				$('#slide_2, #slide_3').css("left","802px"); // after the caption comes on, shifts both other slides out of the box
			});
            locTo = 2; // change locTo variable to the next location
		} else if(locTo==2){
			$('.slide').css("z-index", "5");
			$('#slide_2').css("z-index", "30").stop().animate({left:0}, 1000, 'easeOutSine');
			$('.caption').stop().animate({left:850, opacity:0}, 1000, 'swing');
			$('#cap_2').stop().animate({left:50, opacity:1}, 1000, 'swing', function(){
				$('#slide_1, #slide_3').css("left","802px");
			});
			locTo = 3;
		} else {
			$('.slide').css("z-index", "5");
			$('#slide_3').css("z-index", "30").stop().animate({left:0}, 1000, 'easeOutSine');
			$('.caption').stop().animate({left:850, opacity:0}, 1000, 'swing');
			$('#cap_3').stop().animate({left:50, opacity:1, color: "white"}, 1000, 'swing', function(){
				$('#slide_2, #slide_1').css({"left":"802px", color: "#000"});
			});
			locTo = 1;
		};
	};
	$('#dot_1').on("click", function(){ // if you click the first dot
		clearInterval(myTimer); // turn off the slide show
		locTo = 1; // set the destination slide number
		updateSlide(); // go to that slide
	}); // see above captions for lines 68 through 77
	$('#dot_2').on("click", function(){
		clearInterval(myTimer);
		locTo = 2;
		updateSlide();
	});
	$('#dot_3').on("click", function(){
		clearInterval(myTimer);
		locTo = 3;
		updateSlide();
	});
    $("#slider").hover(function(){
		clearInterval(myTimer);
	}, function(){
		myTimer = setInterval(updateSlide, 4000);
	});
});