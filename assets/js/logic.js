$(document).ready(function() {

  // change places of brand name and collapsable navbar at screen width
  $(window).resize(function(){
    if ($(window).width() <= 767) {
      $(".navbar-brand").detach().prependTo("#nav-container");
    } else {
      $(".navbar-brand").detach().appendTo("#nav-container");
    }
  });
});
