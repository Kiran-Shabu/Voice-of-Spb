//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [1, 2, 3, 4, 5, 6];

$.each(sectionArray, function(index, value) {
    (function(value) { // Using an IIFE to capture the current value of 'value'
        $(document).scroll(function() {
            var offsetSection = $('#' + 'section_' + value).offset();
            if (!offsetSection) return; // Check if offsetSection is undefined
            offsetSection = offsetSection.top - 83;
            var docScroll = $(document).scrollTop();
            var docScroll1 = docScroll + 1;

            if (docScroll1 >= offsetSection) {
                $('.navbar-nav .nav-item .nav-link').removeClass('active');
                $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
                $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
                $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
            }

        });

        $('.click-scroll').eq(index).click(function(e) {
            var offsetClick = $('#' + 'section_' + value).offset();
            if (!offsetClick) return; // Check if offsetClick is undefined
            offsetClick = offsetClick.top - 83;
            e.preventDefault();
            $('html, body').animate({
                'scrollTop': offsetClick
            }, 300)
        });
    })(value); // Pass 'value' to the IIFE
});

$(document).ready(function() {
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});
