wow = new WOW({
  boxClass: 'wow',
  animateClass: 'animated',
  offset: 0,
  mobile: !0,
  live: !0
})
wow.init();

jQuery(document).ready(function () {
  
  jQuery('.banner-slider').owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    nav: true,
    animateOut: 'fadeOut'
  });

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
	  console.log('123');
	  
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
		  
	  console.log('123');
	  
		  
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

});