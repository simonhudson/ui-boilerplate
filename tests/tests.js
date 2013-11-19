test('concertina()', function() {

	/*
	To Test:
		* Concertina present
		* Toggle present
		* Toggle has clickale <a/>
		* Toggle has icon
		* Content present
		* Content hidden on page load
		* Click on toggle <a/>
			-> Content is toggled
			-> Active class on icon is toggled
			-> Return false
	*/
	
	var
		concertinaWrap = $('.concertina-wrap')
	;
	ok (concertinaWrap.length > -1,
		'Concertina is present');
	
	// var
	// 	$concertinaWrap = $('.concertina-wrap'),
	// 	$concertinaToggle = $concertinaWrap.find('.concertina-toggle'),
	// 	$concertinaToggleClickable = $concertinaToggle.children('a'),
	// 	$concertinaToggleIcon = $concertinaToggleClickable.children('span'),
	// 	$concertinaContent = $concertinaWrap.find('.concertina-content')
	// ;
	// ok ($concertinaWrap.length > -1,
	// 	'Concertina present');

	// ok ($concertinaToggle.length > -1,
	// 	'Toggle present');

	// ok ($concertinaToggleClickable.length > -1,
	// 	'Toggle has a clickable <a/> tag');

	// ok ($concertinaToggleIcon.length > -1,
	// 	'Toggle has icon');

	// ok ($concertinaContent.length > -1,
	// 	'Content present');

});