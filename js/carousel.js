function carousel() {
	$(this).addClass('js-on');

	var
		carouselSpeed = 300,
		$carouselWrap = $(this),
		carouselWrapWidth = $carouselWrap.width(),
		$carouselItem = $carouselWrap.find('.carousel-item'),
		itemCount = $carouselItem.length,
		itemWidth = carouselWrapWidth,
		$carouselInner = $carouselWrap.find('.carousel-inner'),
		carouselInnerWidth = (carouselWrapWidth * itemCount),
		count = 1,
		disabledClass = 'disabled',
		$carouselNav = $(
		'<div class="carousel-nav">' +
			'<ul>' +
				'<li class="carousel-prev"><a href="#"><span class="sprite"></span><span class="hidden">Previous</span></a></li>' +
				'<li class="carousel-next"><a href="#"><span class="sprite"></span><span class="hidden">Next</span></a></li>' +
			'<ul>' +
		'</div><!--/carousel-nav-->'
		),
		currentVisibleItem = 1,
		$counter = $('<p class="carousel-item-count">(<span class="current">1</span> of <span class="total">' + itemCount + '</span>)</p>')
	;
	
	// Set up the styling
	$carouselInner.width(carouselInnerWidth);
	$carouselInner.css('position', 'relative');
	$carouselItem.each(function() {
		$(this).css({
			display:'inline',
			float:'left',
			width:itemWidth
		});
		$(this).attr('id', 'carousel-item-' + count);
		count++;				
	});

	//Add counter to wrapper
	$carouselWrap.append($counter);
	
	// Next & Previous
	$carouselWrap.append($carouselNav);
	var
		$previousButton = $('.carousel-prev').children('a'),
		$nextButton = $('.carousel-next').children('a')
	;
	$carouselNav.find('a').each(function() {
		
		if (itemCount === 1) {
			$(this).addClass(disabledClass);
		}

		// Disable Previous button on load
		if ($(this).parent('li').hasClass('carousel-prev')) {
			$(this).addClass(disabledClass);
		}
		$(this).click(call_moveCarousel);
	});

	function moveCarousel(eventType, element) {
		var
			$this = $(element),
			moveDirection
		;
		
		switch(eventType) {
			case 'click':
				var moveDirection = $this.parent('li').attr('class')
			break;
			case 'swipeleft':
			case 'swiperight':
				var moveDirection = eventType
			break;
		}

		var
			moveDistance,
			currentPosition = parseInt($carouselInner.css('margin-left')),
			offset = 0
		;

		if ((moveDirection === 'carousel-prev' || moveDirection === 'swiperight') && !$previousButton.hasClass(disabledClass) && !$carouselInner.is(':animated') ) {
			moveDistance = (currentPosition + itemWidth);
			$carouselInner.animate({
				marginLeft:moveDistance + 'px'
			}, carouselSpeed );

			currentVisibleItem--;
			if (currentVisibleItem === 1) {
				$previousButton.addClass(disabledClass);
				$nextButton.removeClass(disabledClass);
			}
		} else if ( (moveDirection === 'carousel-next' || moveDirection === 'swipeleft')  && !$nextButton.hasClass(disabledClass) && !$carouselInner.is(':animated') ) {
			moveDistance = (currentPosition - itemWidth);
			$carouselInner.animate({
				marginLeft:moveDistance + 'px'
			}, carouselSpeed );

			currentVisibleItem++;
			if (currentVisibleItem === itemCount) {
				$previousButton.removeClass(disabledClass);
				$nextButton.addClass(disabledClass);
			}
		}

		if (currentVisibleItem !== 1 && currentVisibleItem !== itemCount) {
			$previousButton.removeClass(disabledClass);
			$nextButton.removeClass(disabledClass);
		}

		//Update the counter
		$counter.find('.current').text(currentVisibleItem);

		return false;
	}
	
	function call_moveCarousel(e) {
		moveCarousel(e.type, this);
		return false;
	}

	$carouselInner.on('swipeleft', call_moveCarousel);
	$carouselInner.on('swiperight', call_moveCarousel);
}
$('.carousel-wrap.linear-carousel').each(carousel);