function tabbedContent() {

    $('.tab-title, .tab-content').hide();
    $('.tab-content').eq(0).show();

    //Add class for JS specific styling
    $('.tabbed-content-wrap').addClass('js-on');

    //Create tab links
    $('.tabbed-content-wrap').prepend('<ul class="tab-links"></ul>');
    var tabLinks = [];
    $('.tab-title').each(function() {
        tabLinks.push($(this).text());
    });
    var count = 0;
    for (i = 0; i < tabLinks.length; i++) {
        $('.tabbed-content-wrap').children('ul.tab-links').append('<li class="tab-link"><a href="#" class="tab-' + count++ + '">' + tabLinks[i] + '</a></li>');
    }

    //Add IDs to content areas which correspond to tab link classes
    var count = 0;
    $('.tab-content').each(function() {
        $(this).attr('id', 'tab-' + count++);
    });

    $('.tabbed-content-wrap').children('ul.tab-links').children('li').children('a').each(function() {
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

    //Add tab corners
    if (tabLinks.length == 1) {
        $('li.tab-link').prepend('<span class="crnr tab-tl"></span><span class="crnr tab-tr"></span>').addClass('active');
    }
    else {
        $('a.tab-0').parent('li.tab-link').prepend('<span class="crnr tab-tl"></span>').addClass('active');
        $('li.tab-link:last').prepend('<span class="crnr tab-tr"></span>');
    }
	
    $('.tab-title').remove();

}
$(document).ready(tabbedContent);