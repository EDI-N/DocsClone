// tmp fix for read-the-docs embeded versions injection
$(document).ready(function () {
    $(document).on("click", "[data-toggle='rst-current-version']", function() {
        $('.rst-other-versions').toggle();
    });

    // remove elements, leave only 'versions'
    var update = setInterval(function() {
        if ($('.injected .rst-versions').length) {
            clearInterval(update);
            $('.rst-current-version span:first').html(' Change version');
            $('.rst-other-versions').html($('.injected dl:first').clone());
            $('.injected').remove();
        }
    }, 300);
});