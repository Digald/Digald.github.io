$(document).ready(function() {
  // change places of brand name and collapsable navbar at screen width
  $(window).resize(function() {
    if ($(window).width() <= 767) {
      $(".navbar-brand")
        .detach()
        .prependTo("#nav-container");
    } else {
      $(".navbar-brand")
        .detach()
        .appendTo("#nav-container");
    }
  });

  // collapsed nav menu for mobile and smaller screens
  $("#toggle-drop").on("click", function() {
    if ($("#toggle-drop").data('overlay')) {
      $("#myNav").css("height", "0%");
      $('#toggle-drop').data('overlay', "false");
    } else {
      $("#myNav").css("height", "100%");
      $('#toggle-drop').data('overlay', "true");
    }
  });

  // $("#toggle-drop").on("click", function() {
  //   $("#myNav").css('height', '0%');
  // });
});
