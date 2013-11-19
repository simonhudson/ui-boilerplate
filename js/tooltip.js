function tooltip() {
	
	var
		$tooltipLink = $(this),
		tooltipContent = $tooltipLink.attr('title'),
		$tooltipElement = 
			$('<div class="tooltip-wrap">' +
				'<div class="inner">' +
					tooltipContent +
				'</div>' +
			'</div>'),
		animationSpeed = 600
	;

	function createTooltip() {
		$tooltipLink.removeAttr('title');
		$('body').append($tooltipElement);
		fadeInTooltip();
	}

	function fadeInTooltip() {
		$tooltipElement.animate({
			opacity:1
		}, animationSpeed);
	}

	function positionTooltip(event) {
		$tooltipElement.css({
			left:(event.clientX + 10),
			position:'absolute',
			top:(event.clientY + 10)
		});
	}

	function fadeOutTooltip() {
		$tooltipElement.animate({
			opacity:0
		}, (animationSpeed / 2), function() {
			removeTooltip();
		});
	}

	function removeTooltip() {
		$tooltipElement.remove();
	}

	$tooltipLink.mouseover(createTooltip);
	$tooltipLink.mousemove(positionTooltip);
	$tooltipLink.mouseout(fadeOutTooltip);
}
$('.tooltip').each(tooltip);