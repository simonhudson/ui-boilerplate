function closeBoxMessage() {
	var $boxMsg = $(this);
	$boxMsg.prepend('<a class="close-message" href="#" title="Close"><span class="sprite"></span><span class="hidden">Close</span></a>');

	var $closeLink = $boxMsg.find('.close-message');

	$closeLink.click(function() {
		$boxMsg.fadeOut('slow', function() {
			$boxMsg.remove();
		});
		return false;
	});
}
$('.feedback-msg').each(closeBoxMessage);