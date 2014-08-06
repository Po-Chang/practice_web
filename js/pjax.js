/* Sorce code from: http://blog.cergis.com/posts/11/html5-history-api */

$.cergis = $.cergis || {};
$.cergis.loadContent = function () {



    $.ajax({
        url: pageUrl + '?type=ajax',
        success: function (data) {
            $('#main-content').html(data);

            //Check if need to hidden scroll bar

            if ( $('#id_for_page').hasClass('scroll') ) {
                console.log('overflow hidden');
                $("body").css('overflow','hidden');
            }
            else {
                console.log('overflow scroll');
                $("body").css('overflow','scroll');
            }

        }
    });
    if (pageUrl != window.location) {
        window.history.pushState({ path: pageUrl }, '', pageUrl);
    }
}
$.cergis.backForwardButtons = function () {
    $(window).on('popstate', function () {
        $.ajax({
            url: location.pathname + '?type=ajax',
            success: function (data) {
                $('#main-content').html(data);

                //Check if need to hidden scroll bar

                if ( $('#id_for_page').hasClass('scroll') ) {
                    console.log('overflow hidden');
                    $("body").css('overflow','hidden');
                }
                else {
                    console.log('overflow scroll');
                    $("body").css('overflow','scroll');
                }
            }
        });
    });
}

$(".pjax-a").on('click', function (e) {
    pageUrl = $(this).attr('href');
    $.cergis.loadContent();
    e.preventDefault();
});
$.cergis.backForwardButtons();