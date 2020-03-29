$(function () {
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
});

$(window).on("load", function () { });
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 10) {
            $(".fixed-header").addClass("scroll-head");
        } else {
            $(".fixed-header").removeClass("scroll-head");
        }
    });
    /////////Products Slider/////////
    $('.Product-slider').owlCarousel({
        items: 4,
        autoplay: false,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        rewind: true,
        nav: true,
        dots: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4
            }
        }
    });
    ////////////////////////////////////
    $('.mo-search-icon').click(function () {
        $(".search-form").fadeIn(400);
        $("body").addClass("overflow");
        $(".search-cont").addClass("search-in");
        $('.search-input').focus();
    });
    $('.search-form').click(function () {
        $("body").removeClass("overflow");
        $(".search-form").fadeOut(500);
        $(".search-cont").removeClass("search-in");
        $('.search-input').focusout();
    });
    $('.search-cont').click(function (e) {
        e.stopPropagation();
    });
    /////////////////////////////////
    if ($(window).width() < 992) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
        $(".mega-menu").addClass("mega-xs");
        $(".mega-xs").removeClass("mega-menu");
        $('.mega-btn').click(function () {
            $(".mega-xs").slideToggle("500")
        });
        $('.mo-menu-icon').click(function () {
            $(".navbar-cont").fadeIn(400);
            $(".mo-navbar").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('.navbar-cont').click(function () {
            $(".navbar-cont").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $(".navbar-cont").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
    }


    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings().css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings().css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings().css('padding-top', "0");
    })
});