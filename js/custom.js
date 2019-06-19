$(window).on('load',function() {
	setTimeout(function(){
		$('#loader-wrapper').fadeOut('slow', function(){
			$('body').removeAttr('style');
		});
	}, 1500);
});
$(document).ready(function(){
	$('.side_search_content a').click(function(){
		$('.right_side_search').toggleClass('open_search');
	});
	$('.side_search_content').click(function (et) {
        et.stopPropagation();
    });
	$(document).click(function (ent) {
        ent.stopPropagation();
        $(".right_side_search").removeClass('open_search');
    });
	$('.back_to_top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 'slow');
	});
	$(window).scroll(function(){
		if ($(window).scrollTop() > 600) {
			$('.back_to_top').fadeIn();
		} else {
			$('.back_to_top').fadeOut();
		}
	});
});