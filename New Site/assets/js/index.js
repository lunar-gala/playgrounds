$(window).scroll(function() {
  var wScroll = $(window).scrollTop();
  if (wScroll < $(window).height()) {
    $(".overlay").css("opacity", 0.5 + wScroll / 400);
  }
  if (wScroll > $(window).height()/2) {
    $(".logo-right").addClass("active");
  } else {
    $(".logo-right").removeClass("active");
  }
  if (wScroll > $(window).height()) {
    $(".freeze").addClass("fixed");
  } else {
    $(".freeze").removeClass("fixed");
  }
});


window.onload = function() {
 $("path").addClass("stroke");
 $("text").addClass("fade");
 $(".background").addClass("active");
}
