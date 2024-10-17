$(function () {
  "use strict";

  //======menu fix js======
  //   var navoff = $(".main_menu").offset().top;
  //   $(window).scroll(function () {
  //     var scrolling = $(this).scrollTop();

  //     if (scrolling > navoff) {
  //       $(".main_menu").addClass("menu_fix");
  //     } else {
  //       $(".main_menu").removeClass("menu_fix");
  //     }
  //   });

  $("#video-story").show();

  // Handle tab click
  $("#video-tab").click(function () {
    // Set active class for video tab
    $("#video-tab").addClass("active");
    $("#photo-tab").removeClass("active");

    // Show video story content and hide photo story content
    $("#video-story").addClass("active");
    $("#photo-story").removeClass("active");
  });

  $("#photo-tab").click(function () {
    // Set active class for photo tab
    $("#photo-tab").addClass("active");
    $("#video-tab").removeClass("active");

    // Show photo story content and hide video story content
    $("#photo-story").addClass("active");
    $("#video-story").removeClass("active");
  });

  // Initialize Slick Slider for both stories
  $(".slider").slick({
    dots: false,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".video-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev btn btn-outline-secondary"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next btn btn-outline-secondary"><i class="fas fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For small screens (e.g., phones)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576, // Extra small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //   //======select js=======
  //   $(".select_js").niceSelect();

  //   //======marquee animi=======
  //   $(".marquee_animi").marquee({
  //     speed: 80,
  //     gap: 140,
  //     delayBeforeStart: 0,
  //     direction: "left",
  //     duplicated: true,
  //     pauseOnHover: true,
  //   });

  //   //======category slider======
  //   $(".category_slider").slick({
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 4000,
  //     dots: false,
  //     arrows: true,
  //     nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
  //     prevArrow: '<i class="far fa-angle-left prevArrow"></i>',

  //     responsive: [
  //       {
  //         breakpoint: 1200,
  //         settings: {
  //           slidesToShow: 4,
  //         },
  //       },
  //       {
  //         breakpoint: 992,
  //         settings: {
  //           slidesToShow: 3,
  //         },
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 576,
  //         settings: {
  //           slidesToShow: 1,
  //           arrows: false,
  //         },
  //       },
  //     ],
  //   });

  //   //=====counter js=====
  //   $(".counter").countUp();

  //   //=====venobox js=====
  //   $(".venobox").venobox();

  //   //=======SELECT2======
  //   $(document).ready(function () {
  //     $(".select_2").select2();
  //   });

  //   //=====color_tab js=====
  //   $("#filter_area").colorfulTab();

  //   //======testimonial slider======
  //   $(".testi_slider").slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 4000,
  //     dots: false,
  //     arrows: true,
  //     nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
  //     prevArrow: '<i class="far fa-angle-left prevArrow"></i>',

  //     responsive: [
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           // arrows: false,
  //         },
  //       },
  //       {
  //         breakpoint: 576,
  //         settings: {
  //           arrows: false,
  //         },
  //       },
  //     ],
  //   });

  //   //======popular food slider======
  //   $(".popular_food_slider").slick({
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 4000,
  //     dots: false,
  //     arrows: true,
  //     nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
  //     prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',

  //     responsive: [
  //       {
  //         breakpoint: 1200,
  //         settings: {
  //           slidesToShow: 3,
  //         },
  //       },
  //       {
  //         breakpoint: 992,
  //         settings: {
  //           slidesToShow: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 576,
  //         settings: {
  //           slidesToShow: 1,
  //         },
  //       },
  //     ],
  //   });

  //   //======popular food slider======
  //   $(".testimonial_2_slider").slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 4000,
  //     dots: false,
  //     arrows: true,
  //     nextArrow: '<i class="far fa-arrow-right nextArrow"></i>',
  //     prevArrow: '<i class="far fa-arrow-left prevArrow"></i>',
  //   });

  //   //======menu item 4 slider======
  //   $(".menu_4_slider").slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 4000,
  //     dots: false,
  //     arrows: true,
  //     nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
  //     prevArrow: '<i class="far fa-angle-left prevArrow"></i>',
  //   });

  //   //====== testimonial 3 slider======
  //   $(".testimonial_3_slider").slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 3000,
  //     dots: false,
  //     arrows: false,
  //   });

  //   //======gallery slider======
  //   $(".gallery_slider").slick({
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 4000,
  //     dots: false,
  //     arrows: false,

  //     responsive: [
  //       {
  //         breakpoint: 1200,
  //         settings: {
  //           slidesToShow: 4,
  //         },
  //       },
  //       {
  //         breakpoint: 992,
  //         settings: {
  //           slidesToShow: 3,
  //         },
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 576,
  //         settings: {
  //           slidesToShow: 1,
  //         },
  //       },
  //     ],
  //   });

  //   //======instagram slider======
  //   $(".instagram_slider").slick({
  //     slidesToShow: 5,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 4000,
  //     dots: false,
  //     arrows: false,

  //     responsive: [
  //       {
  //         breakpoint: 1200,
  //         settings: {
  //           slidesToShow: 4,
  //         },
  //       },
  //       {
  //         breakpoint: 992,
  //         settings: {
  //           slidesToShow: 3,
  //         },
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 576,
  //         settings: {
  //           slidesToShow: 1,
  //         },
  //       },
  //     ],
  //   });

  //   //======recipes slider======
  //   $(".recipes_slider").slick({
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 4000,
  //     dots: false,
  //     arrows: true,
  //     nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
  //     prevArrow: '<i class="far fa-angle-left prevArrow"></i>',

  //     responsive: [
  //       {
  //         breakpoint: 1400,
  //         settings: {
  //           slidesToShow: 3,
  //           arrows: false,
  //         },
  //       },
  //       {
  //         breakpoint: 1200,
  //         settings: {
  //           slidesToShow: 2,
  //           arrows: false,
  //         },
  //       },
  //       {
  //         breakpoint: 992,
  //         settings: {
  //           slidesToShow: 3,
  //           arrows: false,
  //         },
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 2,
  //           arrows: false,
  //         },
  //       },
  //       {
  //         breakpoint: 576,
  //         settings: {
  //           slidesToShow: 1,
  //           arrows: false,
  //         },
  //       },
  //     ],
  //   });

  //   //======lunchmenu slider======
  //   $(".lunch_menu_slider").slick({
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 4000,
  //     dots: false,
  //     arrows: true,
  //     nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
  //     prevArrow: '<i class="far fa-angle-left prevArrow"></i>',

  //     responsive: [
  //       {
  //         breakpoint: 1200,
  //         settings: {
  //           slidesToShow: 3,
  //         },
  //       },
  //       {
  //         breakpoint: 992,
  //         settings: {
  //           slidesToShow: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 2,
  //           arrows: false,
  //         },
  //       },
  //       {
  //         breakpoint: 576,
  //         settings: {
  //           slidesToShow: 1,
  //           arrows: false,
  //         },
  //       },
  //     ],
  //   });

  //   //======slider ranger======
  //   jQuery(function () {
  //     jQuery("#slider_range").flatslider({
  //       min: 0,
  //       max: 1000,
  //       step: 5,
  //       values: [0, 1000],
  //       range: true,
  //       einheit: "$",
  //     });
  //   });

  //   //=======STICKY SIDEBAR========
  //   $(".sticky_sidebar").stickit({
  //     top: 70,
  //   });

  //   //=====RELATED SLIDER======
  //   $(".related_slider").slick({
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 4000,
  //     dots: false,
  //     arrows: true,
  //     nextArrow: '<i class="far fa-angle-right nextArrow"></i>',
  //     prevArrow: '<i class="far fa-angle-left prevArrow"></i>',

  //     responsive: [
  //       {
  //         breakpoint: 1200,
  //         settings: {
  //           slidesToShow: 3,
  //         },
  //       },
  //       {
  //         breakpoint: 992,
  //         settings: {
  //           slidesToShow: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 576,
  //         settings: {
  //           slidesToShow: 1,
  //           arrows: false,
  //         },
  //       },
  //     ],
  //   });

  //   //====== menu details slider =======
  //   $(".slider-for").slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     arrows: false,
  //     dots: false,
  //     fade: true,
  //     asNavFor: ".slider-nav",
  //   });
  //   $(".slider-nav").slick({
  //     slidesToShow: 5,
  //     slidesToScroll: 1,
  //     asNavFor: ".slider-for",
  //     autoplay: true,
  //     autoplaySpeed: 3000,
  //     dots: false,
  //     arrows: false,
  //     centerMode: true,
  //     focusOnSelect: true,
  //   });

  //   //====== menu details popover =======
  //   const popoverTriggerList = document.querySelectorAll(
  //     '[data-bs-toggle="popover"]'
  //   );
  //   const popoverList = [...popoverTriggerList].map(
  //     (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  //   );

  //   //====BARFILLER JS========
  //   $(document).ready(function () {
  //     $("#bar1").barfiller();
  //     $("#bar2").barfiller();
  //     $("#bar3").barfiller();
  //     $("#bar4").barfiller();
  //   });

  //   //======ANIMATED HEADING JS=======
  //   $(".animate-loading-bar").animatedHeadline({
  //     animationType: "loading-bar",
  //   });

  //   //=======WOW JS========
  //   new WOW().init();

  //   //======MOBILE MENU BUTTON=======
  //   $(".navbar-toggler").on("click", function () {
  //     $(".navbar-toggler").toggleClass("show");
  //   });
});
