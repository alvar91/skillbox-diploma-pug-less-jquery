$(document).ready(function () {
  const jsForm = $(".js-form");
  $(".js-popup").click(function () {
    jsForm.fadeIn(300);
  });

  $(".js-form-close").click(function () {
    jsForm.fadeOut(300);
  });

  jsForm.click(function (event) {
    if (!event.target.closest(".js-content")) {
      jsForm.fadeOut(300);
    }
  });
});
