jQuery(document).ready(function() {

    jQuery('.btn-close').click(function () {
        jQuery('iframe').attr('src', $('iframe').attr('src'));
    });

    // Responsive menu js
    jQuery('.menu-arrow').on('click', function () {
        var element = jQuery(this).parent('.menu-item-has-children');
        if (element.hasClass('toggle')) {
            element.removeClass('toggle');
            element.find('.menu-item-has-children').removeClass('toggle');
            element.find('.sub-menu').slideUp('slow');
        } else {
            var name = element.find('a').html();
            element.addClass('toggle');
            element.children('.sub-menu').slideToggle('slow');
            element.siblings('.menu-item-has-children').children('.sub-menu').slideUp('slow');
            element.siblings('.menu-item-has-children').removeClass('toggle');
            element.siblings('.menu-item-has-children').find('.menu-item-has-children').removeClass('toggle');
            element.siblings('.menu-item-has-children').find('.sub-menu').slideUp('slow');
        }
    });
    jQuery(".nav-toggle").click(function () {
        jQuery("html").addClass("open-menu");
    });
    jQuery('.close-icon').click(function() {
        jQuery("html").removeClass("open-menu");
        jQuery('.sub-menu').removeClass('toggle');
        jQuery('.menu-item-has-children').removeClass('toggle');
    });

    // Fixed Header Script
    function headerStuff() {
        if ($(window).scrollTop() > 100) {
            $('body').addClass('sticky-header');
        }
        else {
            $('body').removeClass('sticky-header');
        }
    };
    $(document).ready(function () {
        headerStuff();
        $(window).scroll(function () {
        headerStuff();
        });
    });

    // Owl Carousel Slider
    jQuery('.owl-carousel').each(function() {
        var $carousel = jQuery(this);
        var $items = ($carousel.data('items') !== undefined) ? $carousel.data('items') : 1;
        var $items_xl = ($carousel.data('items-xl') !== undefined) ? $carousel.data('items-xl') : 1;
        var $items_lg = ($carousel.data('items-lg') !== undefined) ? $carousel.data('items-lg') : 1;
        var $items_md = ($carousel.data('items-md') !== undefined) ? $carousel.data('items-md') : 1;
        var $items_sm = ($carousel.data('items-sm') !== undefined) ? $carousel.data('items-sm') : 1;
        var $items_ssm = ($carousel.data('items-ssm') !== undefined) ? $carousel.data('items-ssm') : 1;
        $carousel.owlCarousel ({
        loop : ($carousel.data('loop') !== undefined) ? $carousel.data('loop') : true,
        items : $carousel.data('items'),
        margin : ($carousel.data('margin') !== undefined) ? $carousel.data('margin') : 0,
        dots : ($carousel.data('dots') !== undefined) ? $carousel.data('dots') : true,
        nav : ($carousel.data('nav') !== undefined) ? $carousel.data('nav') : false,
        navText : ["<div class='slider-no-current'><span class='current-no'></span><span class='total-no'></span></div><span class='current-monials'></span>", "<div class='slider-no-next'></div><span class='next-monials'></span>"],
        autoplay : ($carousel.data('autoplay') !== undefined) ? $carousel.data('autoplay') : false,
        autoplayTimeout : ($carousel.data('autoplay-timeout') !== undefined) ? $carousel.data('autoplay-timeout') : 5000,
        animateIn : ($carousel.data('animatein') !== undefined) ? $carousel.data('animatein') : false,
        animateOut : ($carousel.data('animateout') !== undefined) ? $carousel.data('animateout') : false,
        mouseDrag : ($carousel.data('mouse-drag') !== undefined) ? $carousel.data('mouse-drag') : false,
        autoWidth : ($carousel.data('auto-width') !== undefined) ? $carousel.data('auto-width') : false,
        autoHeight : ($carousel.data('auto-height') !== undefined) ? $carousel.data('auto-height') : false,
        center : ($carousel.data('center') !== undefined) ? $carousel.data('center') : false,
        responsiveClass: true,
        dotsEachNumber: true,
        smartSpeed: 1100,
        autoplayHoverPause: false,
        responsive : {
            0 : {
            items : $items_ssm,
            },
            480 : {
            items : $items_sm,
            },
            768 : {
            items : $items_md,
            },
            992 : {
            items : $items_lg,
            },
            1200 : {
            items : $items,
            },
            1921 : {
            items : $items_xl,
            }
        }
        });
        var totLength = jQuery('.owl-dot', $carousel).length;
        jQuery('.total-no', $carousel).html(totLength);
        jQuery('.current-no', $carousel).html(totLength);
        $carousel.owlCarousel();
        jQuery('.current-no', $carousel).html(1);
        $carousel.on('changed.owl.carousel', function(event) {
        var total_items = event.page.count;
        var currentNum = event.page.index + 1;
        jQuery('.total-no', $carousel ).html(total_items);
        jQuery('.current-no', $carousel).html(currentNum);
        });
    });
    
    
    var btn = jQuery('.back_to_top');
    setTimeout(function () {
        jQuery('.addlazyload').addClass('lazyload');
    }, 1000);
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, '300');
    });


    /* WOW */
    new WOW().init();
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    })
    wow.init();


    // Swiper Marquee Script
    let SwiperTop = new Swiper('.swiper--top', {
        spaceBetween: 0,
        centeredSlides: true,
        speed: 6000,
        autoplay: {
            delay: 1,
        },
        loop: true,
        slidesPerView: 'auto',
        allowTouchMove: false,
        disableOnInteraction: true
    });


    var windowWidth = jQuery(window).width();
    if (windowWidth <= 767) {
        jQuery(".news .btc-block").insertAfter(".news > .container > .row");
    };

    if (windowWidth >= 992) {
        jQuery(".btc_mCustomScrollbar").mCustomScrollbar({});
    }

    // TeamListings
    if (jQuery('.team-members').length > 0) {
        var $container = $('.portfolioContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        
        $('.portfolioFilter button').click(function () {
            $('.portfolioFilter .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }
    
});