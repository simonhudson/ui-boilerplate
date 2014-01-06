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
$('.carousel-wrap.linear-carousel').each(carousel);;function closeBoxMessage() {
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
$('.feedback-msg').each(closeBoxMessage);;/*
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
$('.concertina-wrap').each(concertina);;$(document).ready(function () {
    var data = ['Derby County','Leicester City','Nottingham Forest','Notts County'];

    $('#football-clubs').kendoAutoComplete({
        dataSource: data,
        filter: 'startswith',
        placeholder: 'Select country...',
        separator: ', '
    });
});;function modal() {
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
$(document).ready(modal);;function tabbedContent() {

    var
        $tabbedContentWrap = $('.tabbed-content-wrap'),
        $tabContent = $('.tab-content'),
        $tabTitle = $('.tab-title')
    ;

    $('.tab-title, .tab-content').hide();
    $tabContent.eq(0).show();

    //Add class for JS specific styling
    $tabbedContentWrap.addClass('js-on');

    //Create tab links
    $tabbedContentWrap.prepend('<ul class="tab-links"></ul>');
    var tabLinks = [];
    $tabTitle.each(function() {
        tabLinks.push($(this).text());
    });
    var count = 0;
    for (i = 0; i < tabLinks.length; i++) {
        $tabbedContentWrap.children('ul.tab-links').append('<li class="tab-link"><a href="#" class="tab-' + count++ + '">' + tabLinks[i] + '</a></li>');
    }

    //Add IDs to content areas which correspond to tab link classes
    var count = 0;
    $tabContent.each(function() {
        $(this).attr('id', 'tab-' + count++);
    });

    $tabbedContentWrap.children('ul.tab-links').children('li').children('a').each(function() {
        $(this).click(function() {
            var tabText = $(this).text();
            $(this).parent('li').siblings('li').removeClass('active');
            $(this).parent('li').addClass('active');
            var identifier = $(this).attr('class');
            $('.tab-content').hide();
            $('div[id=' + identifier + ']').show();
            return false;
        });
    });

    $tabTitle.remove();
}
$(document).ready(tabbedContent);;function tooltip() {
	
	var
		$tooltipLink = $(this),
		tooltipContent = $tooltipLink.attr('title'),
		$tooltipElement = 
			$('<div class="tooltip-wrap">' +
				'<div class="inner">' +
					tooltipContent +
				'</div>' +
			'</div>'),
		animationSpeed = 300
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