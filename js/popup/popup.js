$(document).ready(function () {
  $(".js-popup").click(function () {
    $(".js-form").addClass("popup_active");
  });

  $(".js-form-close").click(function () {
    $(".js-form").removeClass("popup_active");
  });

  $(".js-form").click(function (event) {
    if (!event.target.closest(".js-content")) {
      $(".js-form").removeClass("popup_active");
    }
  });
});
