/* Sorce code from: http://blog.cergis.com/posts/11/html5-history-api */

$.cergis = $.cergis || {};
$.cergis.loadContent = function () {
    $.ajax({
        url: pageUrl + '?type=ajax',
        success: function (data) {
            $('#main-content').html(data);
            // hide ajax loader
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