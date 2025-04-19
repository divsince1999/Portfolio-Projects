gsap.registerPlugin(
  ScrollTrigger,
  ScrollSmoother,
  DrawSVGPlugin,
  MotionPathPlugin
);

wow = new WOW({
  boxClass: "wow",
  animateClass: "animated",
  offset: 0,
  mobile: true,
  live: true,
});
wow.init();

jQuery(document).ready(function () {
  jQuery(".ta-arrow-down1").click(function () {
    if (jQuery(this).parent().hasClass("ta-change-icon")) {
      jQuery(this).siblings(".ta-sub-menu").slideUp();
      jQuery(this).parent().removeClass("ta-change-icon");
    } else {
      jQuery(".ta-sub-menu").slideUp();
      jQuery(this).siblings(".ta-sub-menu").slideDown();
      jQuery(".ta-open-menu li ul li").removeClass("ta-change-icon-submenu");
      jQuery(".ta-open-menu li").removeClass("ta-change-icon");
      jQuery(this).parent().addClass("ta-change-icon");
    }
  });

  jQuery(".ta-arrow-down2").click(function () {
    if (jQuery(this).parent().hasClass("ta-change-icon-submenu")) {
      jQuery(this).siblings(".ta-sub-menu").slideUp();
      jQuery(this).parent().removeClass("ta-change-icon-submenu");
    } else {
      jQuery(".ta-change-icon-submenu .ta-sub-menu").slideUp();
      jQuery(this).siblings(".ta-sub-menu").slideDown();
      jQuery(".ta-open-menu .ta-change-icon ul li").removeClass(
        "ta-change-icon-submenu"
      );
      jQuery(this).parent().addClass("ta-change-icon-submenu");
    }
  });

  jQuery(".ta-navigation-menu .ta-close-icon").click(function () {
    jQuery("html").removeClass("ta-open-menu");
    jQuery(".ta-sub-menu").slideUp();
    jQuery(".ta-navigation-menu ul li").removeClass("ta-arrow-down1");
    jQuery(".ta-navigation-menu ul li").removeClass("ta-arrow-down2");
    jQuery(".ta-open-menu .ta-change-icon ul li").removeClass(
      "ta-change-icon-submenu"
    );
    jQuery(".ta-open-menu li").removeClass("ta-change-icon");
  });

  jQuery(".ta-navigation-menu button").click(function () {
    jQuery("html").addClass("ta-open-menu");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let smoother = ScrollSmoother.create({
    smooth: 0.7,
    effects: false,
    smoothTouch: 0.1,
  });

  //***** banner animations *****\\

  document
    .querySelectorAll(".home, .cart-vagies, .menu-slider")
    .forEach((el) => {
      el.style.willChange = "transform, opacity";
    });

  gsap.set(".home", { opacity: 0 });

  gsap.to(".home", {
    opacity: 1,
    duration: 3,
    ease: "back.out(1)",
    overwrite: "auto",
  });

  gsap.to(".front-wheel, .rear-wheel", {
    rotate: -360,
    transformOrigin: "50% 50%",
    duration: 3,
    repeat: -1,
    ease: "linear",
  });

  gsap.fromTo(
    ".tractor-ele",
    {
      x: 200,
      rotate: 0,
      opacity: 1,
      transformOrigin: "center",
    },
    {
      x: -200,
      rotate: 0,
      duration: 3,
      ease: "power2.out",
    }
  );

  gsap.to(".hero-sec .cloud", {
    x: "200%",
    opacity: 0,
    duration: 5,
    repeat: -1,
    ease: "power1.inOut",
  });

  //***** Good food cart animation *****\\

  const defaultCartItems = [
    {
      target: ".cart-carrot-img",
      from: {
        left: "calc(100% - 450px)",
        bottom: "calc(100% - 75px)",
        rotation: 115,
      },
      to: { left: "340px", bottom: "220px", rotation: 0 },
    },
    {
      target: ".cart-bit-2-img",
      from: { left: "calc(100% - 420px)", bottom: "calc(100% + 20px)" },
      to: { left: "390px", bottom: "360px" },
    },
    {
      target: ".cart-bit-img",
      from: { left: "calc(100% - 500px)", bottom: "100%" },
      to: { left: "190px", bottom: "360px" },
    },
    {
      target: ".cart-carrot-2-img",
      from: {
        left: "calc(100% - 700px)",
        bottom: "calc(100% - 85px)",
        rotation: -105,
      },
      to: { left: "470px", bottom: "330px", rotation: 0 },
    },
    {
      target: ".cart-potato-img",
      from: { left: "calc(100% - 350px)", bottom: "calc(100% - 100px)" },
      to: { left: "270px", bottom: "170px" },
    },
    {
      target: ".cart-spinach-2-img",
      from: { left: "calc(100% - 200px)", bottom: "calc(100% - 100px)" },
      to: { left: "125px", bottom: "200px" },
    },
    {
      target: ".cart-spinach-img",
      from: { left: "calc(100% - 100px)", bottom: "calc(100% - 100px)" },
      to: { left: "240px", bottom: "180px" },
    },
    {
      target: ".cart-tomato-img",
      from: { left: "calc(100% - 650px)", bottom: "100%" },
      to: { left: "140px", bottom: "340px" },
    },
  ];

  const screenOverrides = [
    {
      maxWidth: 1699,
      overrides: {
        ".cart-carrot-2-img": {
          to: { left: "450px", bottom: "310px" },
        },
        ".cart-bit-2-img": {
          to: { bottom: "340px" },
        },
        ".cart-potato-img": {
          to: { bottom: "190px" },
        },
        ".cart-tomato-img": {
          to: { bottom: "310px" },
        },
      },
    },
    {
      maxWidth: 1399,
      overrides: {
        ".cart-carrot-2-img": {
          from: {
            left: "calc(100% - 550px)",
            bottom: "calc(100% - 65px)",
          },
          to: { left: "380px", bottom: "270px" },
        },
        ".cart-carrot-img": {
          from: {
            left: "calc(100% - 380px)",
            bottom: "calc(100% - 55px)",
          },
          to: { left: "310px", bottom: "180px" },
        },
        ".cart-potato-img": {
          from: { left: "calc(100% - 300px)", bottom: "calc(100% - 80px)" },
          to: { bottom: "180px", left: "250px" },
        },
        ".cart-tomato-img": {
          from: { left: "calc(100% - 500px)", bottom: "100%" },
          to: { bottom: "270px", left: "110px" },
        },
        ".cart-bit-2-img": {
          from: { left: "calc(100% - 350px)" },
          to: { bottom: "290px", left: "330px" },
        },
        ".cart-bit-img": {
          from: { left: "calc(100% - 410px)" },
          to: { bottom: "290px", left: "190px" },
        },
        ".cart-spinach-img": {
          to: { left: "200px", bottom: "160px" },
        },
        ".cart-spinach-2-img": {
          to: { left: "85px", bottom: "180px" },
        },
      },
    },
  ];

  function getFinalCartItems() {
    const width = window.innerWidth;
    let mergedItems = JSON.parse(JSON.stringify(defaultCartItems)); // Deep copy

    screenOverrides.forEach(({ maxWidth, overrides }) => {
      if (width <= maxWidth) {
        mergedItems = mergedItems.map((item) => {
          const override = overrides[item.target];
          if (override) {
            return {
              ...item,
              from: { ...item.from, ...override.from },
              to: { ...item.to, ...override.to },
            };
          }
          return item;
        });
      }
    });

    return mergedItems;
  }

  function getResponsiveScrollTrigger() {
    const width = window.innerWidth;

    // Default ScrollTrigger settings
    const scrollTrigger = {
      trigger: ".good-food-sec",
      start: "20% 70%",
      end: "50% 50%",
      scrub: 1,
      // markers: true,
    };

    // Override based on screen width
    if (width <= 1024) {
      scrollTrigger.start = "0% 40%";
      scrollTrigger.end = "50% 40%";
    }

    return scrollTrigger;
  }

  if (window.innerWidth >= 768) {
    const scrollTriggerConfig = getResponsiveScrollTrigger();

    getFinalCartItems().forEach(({ target, from, to }) => {
      gsap.set(target, from);
      gsap.to(target, {
        ...to,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          ...scrollTriggerConfig,
        },
      });
    });
  }

  // Cloud animation
  gsap.to(".good-food-sec .cloud", {
    x: "100%",
    opacity: 0,
    duration: 5,
    repeat: -1,
    ease: "power1.inOut",
  });

  //***** SVG Path and Dot Animation *****\\

  const path = document.querySelector("#Path_440");
  const roundHead = document.querySelector(".round-head");

  const pathLength = path.getTotalLength();

  gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

  roundHead.style.display = "none";

  const easyTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".easy-sec",
      start: "top 50%",
      end: "bottom 50%",
      scrub: true,
      //   markers: true,
      onEnter: () => (roundHead.style.display = "block"),
      onLeaveBack: () => (roundHead.style.display = "none"),
    },
  });

  easyTl.to(path, { strokeDashoffset: 0, ease: "none", duration: 1 }, 0);

  easyTl.to(
    roundHead,
    {
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
      },
      ease: "none",
      duration: 1,
    },
    0
  );

  if (window.innerWidth >= 768) {
    gsap.utils.toArray(".easy-text-block").forEach((block) => {
      ScrollTrigger.create({
        trigger: block,
        start: "top 50%",
        // markers: true,
        onEnter: () => block.classList.add("active"),
        onLeaveBack: () => block.classList.remove("active"),
      });
    });
  }

  gsap.set(".spinach-img", { opacity: 0, y: "-1000vh", rotate: 34 });
  gsap.set(".carrot-img", { opacity: 0, y: "-1000vh", rotate: 55 });
  gsap.set(".chili-img", { opacity: 0, y: "-1000vh", rotate: -22 });
  gsap.set(
    ".bit-img, .carrot-img, .chili-img, .spinach-img, .tomato-red-img, .tomato-img",
    { opacity: 0, y: "-1000vh" }
  );

  gsap.to(
    ".bit-img, .carrot-img, .chili-img, .spinach-img, .tomato-red-img, .tomato-img",
    {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".easy-sec",
        start: "50% 50%",
        end: "bottom 20%",
        // markers: true,
        once: true,
      },
    }
  );

  //***** Optimize Slick Slider Initialization *****\\

  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
        }
      }
    ]
  });

  $(".filter li").on("click", function () {
    var filter = $(this).data("filter");
    $(".filter li").removeClass("active");
    $(this).addClass("active");
    $(".slider")
      .slick("slickUnfilter")
      .slick("slickFilter", function () {
        return $(this).hasClass(filter);
      });
  });

  //***** neighbors veggies drops *****\\

  gsap.set(".neighbors-potato", { opacity: 0, y: "-1000vh", rotate: 110 });
  gsap.set(".neighbors-spinach-2", { opacity: 0, y: "-1000vh", rotate: 60 });
  gsap.set(".neighbors-red-chilli", { opacity: 0, y: "-1000vh", rotate: -48 });
  gsap.set(".neighbors-carrot", { opacity: 0, y: "-1000vh", rotate: 48 });
  gsap.set(".neighbors-chilli", { opacity: 0, y: "-1000vh", rotate: -22 });
  gsap.set(".neighbors-chilli-2", { opacity: 0, y: "-1000vh", rotate: 23 });
  gsap.set(
    ".neighbors-bit-2, .neighbors-bit, .neighbors-carrot, .neighbors-chilli-2, .neighbors-chilli, .neighbors-potato-2, .neighbors-potato, .neighbors-red-chilli, .neighbors-spinach-2, .neighbors-tomato-green, .neighbors-tomato, .neighbors-spinach",
    { opacity: 0, y: "-1000vh" }
  );

  gsap.to(
    ".neighbors-bit-2, .neighbors-bit, .neighbors-carrot, .neighbors-chilli-2, .neighbors-chilli, .neighbors-potato-2, .neighbors-potato, .neighbors-red-chilli, .neighbors-spinach-2, .neighbors-tomato-green, .neighbors-tomato, .neighbors-spinach",
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".neighbors-sec",
        start: "top top",
        end: "bottom 20%",
        // markers: true,
        once: true,
      },
    }
  );

  document
    .querySelectorAll(".neighbors-data-block-wrapper .data-block")
    .forEach((box, index) => {
      gsap.to(box, {
        x: () => gsap.utils.random(-15, 15),
        y: () => gsap.utils.random(-15, 15),
        z: () => gsap.utils.random(-15, 15),
        rotationX: () => gsap.utils.random(-10, 10),
        rotationY: () => gsap.utils.random(-10, 10),
        duration: gsap.utils.random(1.5, 2.5),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

  //***** Delivered section *****\\

  const DelivereImages = [
    { selector: ".img-block-1", x: -200, y: -100, rotate: -20 },
    { selector: ".img-block-2", x: -200, y: 100, rotate: 20 },
    { selector: ".img-block-3", x: 200, y: -100, rotate: 20 },
    { selector: ".img-block-4", x: 200, y: 100, rotate: -20 },
  ];

  DelivereImages.forEach((img) => {
    gsap.set(img.selector, { x: img.x, y: img.y, rotate: img.rotate });

    gsap.to(img.selector, {
      x: 0,
      y: 0,
      rotate: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".delivered-sec",
        start: "top 50%",
        end: "70% 50%",
        scrub: true,
        // markers: true,
      },
    });
  });

  //***** title split *****\\

  document.querySelectorAll(".TitleToAnimate").forEach((TitleEl) => {
    var TitleCh = new SplitText(TitleEl, {
      type: "lines, words",
      linesClass: "ts-line",
    });

    var TitleTl = gsap.timeline({
      paused: true, // Start paused so it only plays when triggered
    });

    TitleTl.addLabel("enter");

    TitleTl.staggerFromTo(
      TitleCh.words,
      0.6,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        ease: "Circ.easeOut",
      },
      0.2,
      "enter"
    );

    TitleTl.staggerFromTo(
      TitleCh.words,
      0.6,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: "Power1.easeOut",
      },
      0.2,
      "enter"
    );

    TitleTl.fromTo(
      TitleEl.closest("section, footer").querySelector(".note"),
      1,
      { opacity: 0 },
      { opacity: 0.6, ease: "Linear.easeNone" }
    );

    // ScrollTrigger to play animation when section enters the viewport
    ScrollTrigger.create({
      trigger: TitleEl.closest("section"),
      start: "top 80%", // Adjust trigger point as needed
      onEnter: () => TitleTl.play(),
      once: true, // Ensures it plays only once per scroll
    });
  });

  //***** Neighborhood leaf animation *****\\

  const neighborhoodTl = gsap.timeline({
    repeat: -1,
    defaults: { ease: "power2.inOut" },
  });

  gsap.set(".neighborhood-sec .img-block img", { opacity: 0 });
  gsap.set(".neighborhood-sec .img-block img:nth-child(1)", { opacity: 1 });

  const images = gsap.utils.toArray(".neighborhood-sec .img-block img");

  const rotations = [90, 180, 90, 0];

  neighborhoodTl
    .to(".neighborhood-sec .img-block", {
      rotation: rotations[0],
      duration: 0.5,
      onStart: () => {
        gsap.to(images[0], { opacity: 0, duration: 0.5 });
        gsap.to(images[1], { opacity: 1, duration: 0.5 });
      },
    })
    .to({}, { duration: 1 })
    .to(".neighborhood-sec .img-block", {
      rotation: rotations[1],
      duration: 0.5,
      onStart: () => {
        gsap.to(images[1], { opacity: 0, duration: 0.5 });
        gsap.to(images[2], { opacity: 1, duration: 0.5 });
      },
    })
    .to({}, { duration: 1 })
    .to(".neighborhood-sec .img-block", {
      rotation: rotations[2],
      duration: 0.5,
      onStart: () => {
        gsap.to(images[2], { opacity: 0, duration: 0.5 });
        gsap.to(images[3], { opacity: 1, duration: 0.5 });
      },
    })
    .to({}, { duration: 1 })
    .to(".neighborhood-sec .img-block", {
      rotation: rotations[3],
      duration: 0.5,
      onStart: () => {
        gsap.to(images[3], { opacity: 0, duration: 0.5 });
        gsap.to(images[0], { opacity: 1, duration: 0.5 });
      },
    })
    .to({}, { duration: 1 });
});
