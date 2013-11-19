function modal() {
	var animationSpeed = 300;
	var $dialog = $('<div class="modal-wrap"></div>');

	$('.modal-trig').each(function() {
		var $link = $(this);
		$dialog
			.load($link.attr('href') + ' #modal-content')
			.dialog({
				autoOpen: false,
				closeOnEscape: true,
				closeText:'',
				draggable: false,
				modal: true,
				title: $link.attr('title'),
				width: '70%'
			});

		$link.click(function() {
			$dialog.dialog('open');
			if ($dialog.length) {
				$('.ui-widget-overlay').css('opacity', '0.6');
				$('.ui-dialog').css({
					margin: '0 auto',
					top:'10%'
				});
				$('.ui-widget-overlay, .ui-dialog').css('opacity', '0');
				$('.ui-widget-overlay').animate({
					opacity:0.6
				}, animationSpeed );
				$('.ui-dialog').animate({
					opacity:1
				}, animationSpeed );
			}
			$('.ui-widget-overlay').height($(document).height());

			// Set the modal Y position
			var
				scrollPosition = $(document).scrollTop(),
				windowHeight = $(window).height(),
				modalPositionY = scrollPosition + (windowHeight / 5)
			;

			$('.ui-dialog').css('top', modalPositionY);
			return false;
		});
	});

	//Create custom close functionality to enable fading in/out
	$('.ui-dialog-titlebar-close').remove();
	$('.ui-dialog').prepend('<p class="close-dialog"><a class="sprite"href="#"><span class="hidden">Close</span></a></p>');
	$('.close-dialog').children('a').click(function() {
		$('.ui-widget-overlay, .ui-dialog').animate({
				opacity:0
			}, animationSpeed );
		setTimeout(function() {
			$dialog.dialog('close')
		}, animationSpeed );
		return false;
	});
	$('.ui-dialog-titlebar').remove() 
}
$(document).ready(modal);