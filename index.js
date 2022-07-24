$(document).ready(function(){
    $(".start-btn").click(function() {
        $('html').animate({
            scrollTop: $(".content").offset().top},
            'slow');
    });
})
