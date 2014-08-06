
/*
	The following statement is used to controll page animation.

	Using $("#page1").offset().top to get the element y .  //解釋給哈哈聽

	And scroll_to_page function is used to scroll the page to where I need,
	and chage any thing what I want.
	
	I can reuse it on click event or mousewheel event.
*/
	function scroll_to_page( page_num ) {

		if (page_num == 1)
		{
			$('html,body').animate({scrollTop: $("#page1").offset().top }, 1200);
		}
		else if (page_num == 2)
		{
			$('html,body').animate({scrollTop: $("#page2").offset().top }, 1200);
		}
		else if (page_num == 3) 
		{
			$('html,body').animate({scrollTop: $("#page3").offset().top }, 1200);
		}
		else if (page_num == 4)
		{
			$('html,body').animate({scrollTop: $("#page4").offset().top }, 1200);
		}
	}


	$(function() {
		$( ".goto_page1" )
			.button()
			.click(function( event ) {
				scroll_to_page(1);
		}),
		$( ".goto_page2" )
			.button()
			.click(function( event ) {
				scroll_to_page(2);
		}),
		$( ".goto_page3" )
			.button()
			.click(function( event ) {
				scroll_to_page(3);
		}),
		$( ".goto_page4" )
			.button()
			.click(function( event ) {
				scroll_to_page(4);
		});
	});

/*
	I detect all of these pages(1~4) which on one page scroll.
	We only need which page be scroll and scroll to top page or bottom page.
	and now we can set the right hand side's button to waht I wnat theme now.

	Now have some problem, when resize it, it can't on the block start.
*/


	$(document).ready(function(){ 

		$('#page1').bind('mousewheel', $.throttle(function(event) {

			if (event.originalEvent.wheelDelta >= 0) {
					console.log('Scroll up');
				}
			else {
					console.log('Scroll down');
					scroll_to_page(2);
				}

		}, 1500));


		$('#page2').bind('mousewheel', $.throttle(function(event) {

			if (event.originalEvent.wheelDelta >= 0) {
					console.log('Scroll up');
					scroll_to_page(1);
				}
			else {
					console.log('Scroll down');
					scroll_to_page(3);
				}

		}, 1500));

		$('#page3').bind('mousewheel', $.throttle(function(event) {

			if (event.originalEvent.wheelDelta >= 0) {
					console.log('Scroll up');
					scroll_to_page(2);
				}
			else {
					console.log('Scroll down');
					scroll_to_page(4);
				}

		}, 1500));

		$('#page4').bind('mousewheel', $.throttle(function(event) {

			if (event.originalEvent.wheelDelta >= 0) {
					console.log('Scroll up');
					scroll_to_page(3);
				}
			else {
					console.log('Scroll down');
				}

		}, 1500));

	});

	$(document).ready(function(){ 
		$("#bar").css('width', $(window).width())
		,$(".box").css('height', $(window).height())
		,$("body").css('overflow','hidden')
		,$(window).resize(function(){ 
			$("#bar").css('width', $(window).width())
			,$(".box").css('height', $(window).height()); 
		}); 
	}); 
