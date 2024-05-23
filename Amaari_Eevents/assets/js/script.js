//header
document.getElementsByClassName('menu-toggler')[0].addEventListener('click', () => { 
    document.getElementsByClassName('menu-toggler')[0].classList.toggle('active');
    document.body.classList.toggle('menu-open');
})

// gallery and testimonial slider
jQuery(document).ready(function () {
    new Swiper(".gallery-slider", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
        breakpoints: {
            1441: {
                spaceBetween: 50,
            },
            768: {
                spaceBetween: 30,
            }   
        }
    });
    new Swiper(".testimonials-slider", {
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

// back to top
document.getElementsByClassName('ToTop')[0].addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// fixed header on scroll
window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;
    let heroHeight = document.getElementsByClassName('hero-sec')[0].offsetHeight;
    if (currentScroll > heroHeight) {
        document.body.classList.add('header-fixed');
    }
    else{
        document.body.classList.remove('header-fixed');
    }
});

// wow animation
var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();
