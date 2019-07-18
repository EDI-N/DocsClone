// ===== Scroll to Top ==== 
//$(window).scroll(function() {
//    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
//        $('#topchik').fadeIn(200);    // Fade in the arrow
//    } else {
//        $('#topchik').fadeOut(200);   // Else fade out the arrow
//    }
//});
//$('#topchik').click(function() {      // When arrow is clicked
//    $('body,html').animate({
//        scrollTop : 0                       // Scroll to top of body
//    }, 500);
//});




(function () {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("topchik").style.display = "block";
      } else {
        document.getElementById("topchik").style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    } 
})
();