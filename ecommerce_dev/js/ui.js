var ecommerce = {};

ecommerce.Products = function() {
    if ($("body").hasClass("rtl") == true) {
      var first=   $("#first__products").lightSlider({
            item: 4,
            autoWidth: false,
            slideMove: 1, // slidemove will be 1 if loop is true
            slideMargin: 0,
            controls: true,
            useCss: true,
            rtl:true,
            loop:true,
            mode: "slide",
            prevHtml: '<span><i class="fi flaticon-left-arrow"></i></span>',
            nextHtml: '<span><i class="fi flaticon-next"></i></span>',
            auto:true,
            responsive : [
                {
                    breakpoint:800,
                    settings: {
                        item:3,
                        slideMove:1,
                        slideMargin:0,
                      }
                },
                {
                    breakpoint:768,
                    settings: {
                        item:2,
                        slideMove:1
                      }
                },
                {
                    breakpoint:576,
                    settings: {
                        item:1,
                        slideMove:1
                      }
                }
            ]
            
        });
      var second =  $("#second__products").lightSlider({

            rtl:true,
            item: 4,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 0,
        controls: true,
        useCss: true,
        auto:true,
        mode: "slide",
        loop:true,
        prevHtml: '<span><i class="fi flaticon-left-arrow"></i></span>',
        nextHtml: '<span><i class="fi flaticon-next"></i></span>',
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:0,
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:2,
                    slideMove:1
                  }
            },
            {
                breakpoint:576,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
        });
        $('#first__products').on('mouseenter',function(){
            first.pause();
        });
        $('#first__products').on('mouseleave',function(){
            first.play();
        });
        $('#second__products').on('mouseenter',function(){
            second.pause();
        });
        $('#second__products').on('mouseleave',function(){
            second.play();
        });
    }
    else {
       var first = $("#first__products").lightSlider({
            item: 4,
            autoWidth: false,
            slideMove: 1, // slidemove will be 1 if loop is true
            slideMargin: 0,
            controls: true,
            useCss: true,
            loop:true,
            rtl:"false",
            mode: "slide",
            auto:true,
            prevHtml: '<span><i class="fi flaticon-left-arrow"></i></span>',
            nextHtml: '<span><i class="fi flaticon-next"></i></span>',
            responsive : [
                {
                    breakpoint:800,
                    settings: {
                        item:3,
                        slideMove:1,
                        slideMargin:0,
                      }
                },
                {
                    breakpoint:768,
                    settings: {
                        item:2,
                        slideMove:1
                      }
                },
                {
                    breakpoint:576,
                    settings: {
                        item:1,
                        slideMove:1
                      }
                }
            ]
            
        });
     var second =   $("#second__products").lightSlider({

            rtl:false,
            item: 4,
        autoWidth: false,
        loop:true,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 0,
        controls: true,
        useCss: true,
        mode: "slide",
        auto:true,
        loop:true,
        prevHtml: '<span><i class="fi flaticon-left-arrow"></i></span>',
        nextHtml: '<span><i class="fi flaticon-next"></i></span>',
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:0,
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:2,
                    slideMove:1
                  }
            },
            {
                breakpoint:576,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
        });
        $('#first__products').on('mouseenter',function(){
            first.pause();
        });
        $('#first__products').on('mouseleave',function(){
            first.play();
        });
        $('#second__products').on('mouseenter',function(){
            second.pause();
        });
        $('#second__products').on('mouseleave',function(){
            second.play();
        });
    }


};
ecommerce.mostsales = function(){
    if ($("body").hasClass("rtl") == true) {

        var mostsales =  $(".most-sales").lightSlider({
  
              rtl:true,
              item: 1,
          autoWidth: false,
          slideMove: 1, // slidemove will be 1 if loop is true
          slideMargin: 0,
          controls: true,
          useCss: true,
          auto:true,
          mode: "fade",
          pager:false,
          loop:true,
          prevHtml: '<span><i class="fi flaticon-left-arrow"></i></span>',
          nextHtml: '<span><i class="fi flaticon-next"></i></span>',
 
          });
          var recent =  $(".recent-offers").lightSlider({
  
            rtl:true,
            item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 0,
        controls: true,
        useCss: true,
        auto:true,
        mode: "fade",
        pager:false,
        loop:true,
        prevHtml: '<span><i class="fi flaticon-left-arrow"></i></span>',
        nextHtml: '<span><i class="fi flaticon-next"></i></span>',

        });
      }
      else {
        var mostsales =  $(".most-sales").lightSlider({

              item: 1,
              autoWidth: false,
              slideMove: 1, // slidemove will be 1 if loop is true
              slideMargin: 0,
              controls: true,
              useCss: true,
              pager:false,
              loop:true,
              rtl:"false",
              mode: "fade",
              auto:true,
              prevHtml: '<span><i class="fi flaticon-left-arrow"></i></span>',
              nextHtml: '<span><i class="fi flaticon-next"></i></span>',

              
          });
          var recent =  $(".recent-offers").lightSlider({
  
            rtl:"false",
            item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 0,
        controls: true,
        useCss: true,
        auto:true,
        mode: "fade",
        pager:false,
        loop:true,
        prevHtml: '<span><i class="fi flaticon-left-arrow"></i></span>',
        nextHtml: '<span><i class="fi flaticon-next"></i></span>',

        });

      }
};

ecommerce.mainbanner = function(){
    var owl = $('#mainbanner');
  

    if ($("body").hasClass("ar") == true) {
        owl.owlCarousel({
            items:1,
            mouseDrag:false,
            animateOut: 'zoomOut',
            animateIn: 'zoomInDown',
            nav:true,
            loop:true,
            autoHeight: true,
            nav:false,
            rtl:true,
            autoplay:true,
            autoplayTimeout:3000



          });
    }
    else {
        owl.owlCarousel({
            items:1,
            mouseDrag:false,
            animateOut: 'zoomOut',
            animateIn: 'zoomInDown',
            nav:true,
            loop:true,
            rtl:false,
            autoHeight: true,
            nav:false,
            autoplay:true,
            autoplayTimeout:3000



        
          });
    }
};
ecommerce.offers = function(){
    var owl = $('#offers');
    if ($("body").hasClass("ar") == true) {
        owl.owlCarousel({
            items:1,
            mouseDrag:false,
            animateOut: 'zoomOut',
            animateIn: 'zoomIn',
            nav:true,
            loop:true,
            rtl:true
        
          });
    }
else {
    owl.owlCarousel({
        items:1,
        mouseDrag:false,
        animateOut: 'zoomOut',
        animateIn: 'zoomIn',
        nav:true,
        loop:true,
        rtl:false
    
      });   
}
};
ecommerce.range = function(){
    $('.range-slider').jRange({
        from: 0,
        to: 400,
        step: 1,
        format: '%s',
        width: 300,
        showLabels: true,
        isRange : true
    });
}
ecommerce.side = function(){
    $(".side-menu .title__side").on("click", function() {
        $(".main-section .side-menu ul").toggleClass("active");
    })
}

ecommerce.initialize = function() {
    ecommerce.Products();
    ecommerce.offers();
    ecommerce.mainbanner();
    ecommerce.range();
    ecommerce.side();
    ecommerce.mostsales();
    $("#menu-btn").click(function () {
        $(".menu-filter").toggleClass('show');
                $("#menu-btn").toggleClass('active');

    })
  $(".close-menu a").click(function () {
        $(".menu-filter").toggleClass('show');
                $("#menu-btn").toggleClass('active');

  })
        $("#menu-categories-btn").click(function () {
        $(".menu-categories").toggleClass('show');
                $("#menu-categories-btn").toggleClass('active');

        })
      $(".close-menu-category a").click(function () {
        $(".menu-categories").toggleClass('show');
                $("#menu-categories-btn").toggleClass('active');

  })
};

jQuery(document).ready(function() {
    ecommerce.initialize();
    function isScrolledIntoView(elem) {
        if ($(elem).length == 0) {
            return false;
        }
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
      
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        //  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)); //try it, will only work for text
        return (docViewBottom >= elemTop && docViewTop <= elemBottom);
      }
      $(window).scroll(function () {
        $('.homeSe').each(function () {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('active');
            }
            else {
              $(this).removeClass('active');
    
          }
        });
    
      });
      var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       false,       // trigger animations on mobile devices (default is true)
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

    if ($("body").hasClass("rtl") == true) {

    $('#vertical').lightSlider({
        gallery:true,
        item:1,
        vertical:false,
        verticalHeight:440,
        vThumbWidth:100,
        thumbItem:4.5,
        thumbMargin:4,
        slideMargin:0,
        controls: true,
        rtl: true,
      

        responsive: [
        
            {
                breakpoint:480,
                 settings: {
                    item:1.5,
                     gallery: false,
                          pager:false

                  }
            }
        ]
      });   
    }
          else {
      $('#vertical').lightSlider({
        gallery:true,
        item:1,
        vertical:false,
        verticalHeight:440,
        vThumbWidth:100,
        thumbItem:4.5,
        thumbMargin:4,
        slideMargin:0,
          controls: true,
         responsive : [
        
            {
                breakpoint:480,
                 settings: {
                    item:1.5,
                     gallery: false,
                                                    pager:false


                  }
            }
        ]
      }); 
          
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop()) {
        $('.scrolltop').fadeIn();
    } else {
        $('.scrolltop').fadeOut();
    }
}); 


$(".scrolltop").on("click", function() {
  $("body,html").animate({
    scrollTop: 400
  }, 1000)
})
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }
    /*profile tabs*/
    $(".settings-tabs-container .settings-tab-content:first-child").addClass("active");
    $(".settings-tabs li:first-child").addClass("selected");
    $(".settings-tabs li").click(function() {
        $(this).addClass("selected").siblings().removeClass("selected");
        $('.settings-tabs-container .settings-tab-content').eq($(this).index()).fadeIn().addClass("active").trigger('classChange').siblings().fadeOut().removeClass("active");
    });
    $(".play").click(function() {
        $(".optional-bar").toggleClass("active");
    });

