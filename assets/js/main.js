  /*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Template Name   : SASIMPOR
    Author          : Shahed Ahmed
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    */
  (function ($) {
      "use strict";
      jQuery(document).ready(function ($) {


          /*************************
          NAVBAR ALL JS
          *************************/

          //Sticky nav start
          $(window).on('scroll', function () {
              var scroll = $(window).scrollTop();
              if (scroll < 400) {
                  $(".sticky").removeClass("scroll-header");
              } else {
                  $(".sticky").addClass("scroll-header");
              }
          });
          //Sticky nav end


          // slicknav mobile and tablet costom menu

          $('ul#navigation').slicknav({
              prependTo: "#mobile_menu"
          });
          //slick nav end

          /*************************
  NAVBAR ALL JS END
  *************************/

          // JQUERY COUNTER

          $('.counter').counterUp({
              delay: 10,
              time: 3000
          });

          //JQUERY COUNTER END   



          // IMAGE LOADED JQUERY START     
          $('.grid').imagesLoaded(function () {
              // images have loaded
              //PORTFOLIO START  
              var $grid = $('.grid').isotope({
                  itemSelector: '.gallery',
                  percentPosition: true,
                  masonry: {
                      // use outer width of grid-sizer for columnWidth
                      columnWidth: '.gallery'
                  }
              })
              // filter items click
              $('.portfolio-filter').on('click', 'li', function () {
                  var filterValue = $(this).attr('data-filter');
                  $grid.isotope({
                      filter: filterValue
                  });
              });
              // filter items on button click
              $('.portfolio-filter').on('click', 'li', function () {
                  $(this).addClass('active').siblings().removeClass('active');
              });
              //PORTFOLIO END
          });
          // IMAGE LOADED JQUERY    END    


          //owl corosol
          $('.owl-carousel').owlCarousel({
              loop: true,
              margin: 10,
              nav: true,
              autoplay: true,
              autoplayTimeout: 1000,
              autoplayHoverPause: true,
              responsive: {
                  0: {
                      items: 1
                  },
                  600: {
                      items: 3
                  },
                  1000: {
                      items: 5
                  }
              }

          })

          //owl corosol end   



      }); //DOCUMENT.READY BACKET CLOSE
      //WINDOW.LOADED START
      jQuery(window).load(function () {

          //PRELOADING START
          $("#preload").delay(350).fadeOut("slow")
          //PRELOADING END 







      }); //WINDOW.LOAD JS BACKET CLOSE
  }(jQuery)); //JQUERY MAIN  BACKET CLOSE