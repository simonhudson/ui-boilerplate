/*
Global concertina functionality
--------------------------------------*/
function concertina() {
	var
		$concertinaWrap = $(this),
		$concertinaToggle = $concertinaWrap.find('.concertina-toggle'),
		$concertinaContent = $concertinaWrap.find('.concertina-content')
	;
	$concertinaContent.hide();
	$concertinaToggle.wrapInner('<a href="#"></a>');
	$concertinaToggle.children('a').prepend('<span class="sprite"></span>');

	$concertinaToggle.children('a').click(function() {
		$concertinaContent.slideToggle();
		$concertinaToggle.find('.sprite').toggleClass('active');
		return false;
	});
}
$('.concertina-wrap').each(concertina);