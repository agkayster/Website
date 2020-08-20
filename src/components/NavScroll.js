import $ from "jquery";

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 563) {
      $("nav").addClass("scrolled");
    } else {
      $("nav").removeClass("scrolled");
    }
  });
  console.log($(document).scrollTop());
});
