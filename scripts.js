$(document).ready(function(){
  //smooth scrolling
  var $root = $('html, body');
  $('#navbarID a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function() {
        window.location.hash = href;
      });
    }
    return false;
  });
});

// hide navbar 
$(function() {
  $('.nav-item a').on('click', function(){ 
      if($('.navbar-toggler').css('display') !='none'){
          $('.navbar-toggler').trigger( "click" );
      }
  });
});
