wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: !0,
  live: !0
})
wow.init();

jQuery(document).ready(function () {

  jQuery(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 200) {
      jQuery("body").addClass("sticky-header")
    } else {
      jQuery("body").removeClass("sticky-header")
    }
  });

  jQuery(".navigation-menu button").click(function () {
    jQuery("html").addClass("open-menu")
  });

  jQuery(".navigation-menu .close-icon").click(function () {
    jQuery("html").removeClass("open-menu");
    // jQuery('.sub-menu').slideUp();
  });

  if (jQuery(window).width() < 1199) {

    const firstListToggle = jQuery(".nav-item > .arrow-down");
    const secListToggle = jQuery(".first-list li > .arrow-down");

    firstListToggle.each(function () {
      jQuery(this).click(function () {
        const clickedSubmenu = jQuery(this).closest('.nav-item').find('.first-list');
        
        if (clickedSubmenu.hasClass('submenu-open')) {
          clickedSubmenu.removeClass('submenu-open').slideUp(); // Slide Up animation
        } else {
          // Close all other submenus before opening the clicked one
          jQuery('.first-list').removeClass('submenu-open').slideUp(); // Slide Up all submenus first
          clickedSubmenu.addClass('submenu-open').slideDown(); // Slide Down the clicked submenu
        }
      });
    });

    secListToggle.each(function () {
      jQuery(this).click(function () {
        const clickedSubmenu = jQuery(this).closest('li').find('.second-list');
        if (clickedSubmenu.hasClass('submenu-open')) {
          clickedSubmenu.removeClass('submenu-open').slideUp();;
        } else {
          clickedSubmenu.addClass('submenu-open').slideDown();;
        }
      });
    });

  }

  var backToBtn = jQuery('.backToTop');
  jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 300) {
      backToBtn.addClass('active');
    } else {
      backToBtn.removeClass('active');
    }
  });
  backToBtn.on('click', function (e) {
    e.preventDefault();
    jQuery('html, body').animate({ scrollTop: 0 }, '300');
  });

  if (jQuery('.banner-slider').length > 0) {
    var swiper = new Swiper(".banner-slider", {
      loop: true,
      slidesPerView: 1,
      autoHeight: true,
      speed: 1000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }

  if (jQuery('.what-we-do-slider').length > 0) {
    var swiper = new Swiper(".what-we-do-slider", {
      loop: true,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoHeight: true,
      speed: 1000,
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 1.33,
        },
        1921: {
          slidesPerView: 1.6
        },
        2561: {
          slidesPerView: 1.9
        },
        2890: {
          slidesPerView: 2.3
        }
      }
    });
    // jQuery(".what-we-do-slider .swiper-slide").hover(function(){
    //   jQuery(this).closest('.what-we-do-slider').toggleClass("slide-hovered");
    // });
  }

  if (jQuery('.cp-logo-slider').length > 0) {
    var swiper = new Swiper(".cp-logo-slider", {
      spaceBetween: 0,
      centeredSlides: !0,
      speed: 2000,
      autoplay: {
        delay: 0,
      },
      loop: !0,
      slidesPerView: 'auto',
      allowTouchMove: !1,
      disableOnInteraction: !0,
    });
    jQuery(".cp-logo-slider").hover(function () {
      (this).swiper.autoplay.stop()
    }, function () {
      (this).swiper.autoplay.start()
    })
  }

  if (jQuery('.partners-slider').length > 0) {
    var swiper = new Swiper(".partners-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false,
      // },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1400: {
          spaceBetween: 40,
          slidesPerView: 3,
        },
        1600: {
          spaceBetween: 50,
          slidesPerView: 3,
        }
      }
    });
  }

});