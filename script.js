$(function(){
  $(".about-content").hide();
  $(".review-content").hide();
  $("#about-btn").click(function() {
    $(".about-content").slideToggle();
  });
  $("#rvw-btn").click(function() {
    $(".review-content").slideToggle();
  });
});