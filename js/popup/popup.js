$(document).ready(function () {
  $(".js-popup").click(function () {
    $("#body").css("overflow", "hidden");
    $(".js-form").addClass("popup_active");
  });

  $(".js-form-close").click(function () {
    $("#body").css("overflow", "visible");
    $(".js-form").removeClass("popup_active");
  });

  $(".js-form").click(function (event) {
    if (!event.target.closest(".js-content")) {
      $("#body").css("overflow", "visible");
      $(".js-form").removeClass("popup_active");
    }
  });
});
