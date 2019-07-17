// ===== Scroll to Top ==== 
(function () {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#topchik').fadeIn(200);    // Fade in the arrow
        } else {
            $('#topchik').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#topchik').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });
})
();
