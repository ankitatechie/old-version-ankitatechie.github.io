$(document).ready(function() {
    // To animate the list of projects
    function mouseMoveMatrix() {
        $('.col-img')
        // tile mouse actions
        .on('mouseover', function(){
          $(this).children('.img-container').css({'transform': 'scale(1.1)'});
          $(this).children('.img-overlay').css('background-color', 'rgba(0,0,0,0)');
        })
        .on('mouseout', function(){
          $(this).children('.img-container').css({'transform': 'scale(1)'});
          $(this).children('.img-overlay').css('background-color', 'rgba(0,0,0,0.4)');
        })
        .on('mousemove', function(e){
          $(this).children('.img-container').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
        })
    };
    mouseMoveMatrix();

    // To animate the header on scroll
    $(document).scroll(function() {
      if($(this).scrollTop() > ($('.home').height() - 30)) {
        $('header .header-bg').fadeIn();
      } else {
        $('header .header-bg').fadeOut();
      }
    });

    // Smooth scrolling of page
    function smoothScroll() {
      $("a").on("click", function(e) {
        $("body, html").animate({
            scrollTop: $("#"+this.href.split('#')[1]).offset().top
        }, 600);
        e.preventDefault();
      });
    }
    smoothScroll();

    // highlight active section in navbar
    function activateLink () {
      var offs = '0px';
      $('section').waypoint({
        handler: function(event, direction) {
          var active_section = jQuery(this);
          var aa = active_section.attr("id");
          if (direction === "up") active_section = active_section.prev();
          if (direction === "up") offs = '30%';
          if(typeof active_section.attr("id") != 'undefined') { 
            $(".navigation a").removeClass("active");
            $('.navigation a[href="#' + active_section.attr("id") + '"]').addClass("active");
          }
        },
        offset: offs
      });
    }
    activateLink();
});