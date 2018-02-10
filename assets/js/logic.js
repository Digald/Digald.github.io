$(document).ready(function() {
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  $("#openNav").on("click", function() {
    $("#mySidenav").css("width", "250px");
    // $("#main").css("marginLeft", "250px");
    $("#openNav").hide();
  });
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  $("#closeNav").on("click", function() {
    $("#mySidenav").css("width", "0px");
    // $("#main").css("marginLeft", "0px");
    $("#openNav").show();
  });
});
