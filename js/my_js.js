
/*
	The following statement is used to controll page animation.

	I want to use a lock to controll race condition when useing mosue whell,
	but it didn't work well, need to fix it.

	Using $("#page1").offset().top to get the element y .  //解釋給哈哈聽
*/

var block_num = 4;

	$(function() {
		$( ".goto_page1" )
    		.button()
    		.click(function( event ) {
    			$('html,body').animate({scrollTop: $("#page1").offset().top }, 1200);
    	}),
		$( ".goto_page2" )
    		.button()
    		.click(function( event ) {
    			$('html,body').animate({scrollTop: $("#page2").offset().top }, 1200);
		}),
		$( ".goto_page3" )
    		.button()
    		.click(function( event ) {
    			$('html,body').animate({scrollTop: $("#page3").offset().top }, 1200);
		}),
		$( ".goto_page4" )
    		.button()
    		.click(function( event ) {
    			$('html,body').animate({scrollTop: $("#page4").offset().top }, 1200);
		});
  });

/*
	The following statement is used to listen the browser,
	if browser be resized, 
	and the box class's height will be change to windows height.

	And I used $("body").css('overflow','hidden') to hide the scroll bar,
	it can let me use scroll but didn't show that.

	Now have some problem, when resize it, it can't on the block start.
*/



	$(window).bind('mousewheel', $.throttle( function(event) {
		if ( $('#id_for_page').hasClass('scroll') ) {
			if (event.originalEvent.wheelDelta >= 0) {
			    console.log('Scroll up' + $(this).scrollTop());
				$('html,body').animate( {scrollTop:  $(this).scrollTop() - $( ".box" ).height() }, 900);

			}
			else {
			    console.log('Scroll down');
				$('html,body').animate( {scrollTop:  $(this).scrollTop() + $( ".box" ).height() }, 900);
			}
		}
		else {
			$("body").css('overflow','scroll')
		};
		
	}, 1500));	


	$(document).ready(function(){ 
		$("#bar").css('width', $(window).width())
		,$(".box").css('height', $(window).height())
		,$("body").css('overflow','hidden')
		,$(window).resize(function(){ 
			$("#bar").css('width', $(window).width())
			,$(".box").css('height', $(window).height()); 
		}); 
	}); 
