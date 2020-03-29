$(window).on("load", function () {
    $('body,html').scrollTop(0)
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
        $(this).remove();
    });
});
$(document).ready(function () {
    new WOW().init();
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