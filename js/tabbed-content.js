function tabbedContent() {

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
$(document).ready(tabbedContent);