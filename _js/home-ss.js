function onScroll() {
	if ($(this).scrollTop() > 300){
		$('.bar.ot').css({
			width: $('.content').offset().left + 816
		});
	} 
	if ($(this).scrollTop() > 1100){
		$('.bar.gt').css({
			width: $('.content').offset().left + 816
		});
	} 
	if ($(this).scrollTop() > 1900){
		$('.bar.ce').css({
			width: $('.content').offset().left + 816
		});
	} 
	if ($(this).scrollTop() > 2700){
		$('.bar.btn').css({
			width: $('.content').offset().left + 816
		});
	};
	if ($(this).scrollTop() > 363){
		$('#nav').addClass('active');
	}
	if ($(this).scrollTop() < 363){
		$('#nav').removeClass('active');
	}
}

$(document).on('touchmove',onScroll).ready(onScroll).scroll(onScroll).ready(function(){
	$('.goTo').click(function(){
		var getClass = $(this).attr('class').replace('goTo ','');
		$('html, body').animate({
			scrollTop: $('.explore-button.'+getClass).offset().top -111
		}, 1000);
	});
	$('.btt').click(function(){
		$('html, body').animate({
			scrollTop: $('#bg').offset().top
		}, 500);
	});
	$('.explore-button').click(function(){
		var getClass = $(this).attr('class').replace('explore-button ','');
		$('.explore-content.'+getClass).slideDown(1000);
	});
	$('.explore-content').click(function(){
		$(this).slideUp(1000);
	});
	$('.hs').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		} else {
			$('.hs').removeClass('active');
			$(this).addClass('active');
		};
	});
});