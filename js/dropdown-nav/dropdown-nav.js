$(document).ready(function () {
  $("#nav-btn").click(function () {
    if ($(".page-header__toggle").hasClass("page-header__toggle--closed")) {
      $(".page-header__nav").css("display", "block");
      $(".page-header__toggle")
        .removeClass("page-header__toggle--closed")
        .addClass("page-header__toggle--opened");
    } else {
      $(".page-header__nav").css("display", "none");
      $(".page-header__toggle")
        .removeClass("page-header__toggle--opened")
        .addClass("page-header__toggle--closed");
    }

    if ($(".page-header").hasClass("page-header--margin")) {
      $(".page-header").removeClass("page-header--margin");
    } else {
      $(".page-header").addClass("page-header--margin");
    }
  });

  $(".main-nav__link--header").click(function () {
    if ($(".page-header__toggle").hasClass("page-header__toggle--opened")) {
      $(".page-header__nav").css("display", "none");
      $(".page-header__toggle")
        .removeClass("page-header__toggle--opened")
        .addClass("page-header__toggle--closed");
      $(".page-header").removeClass("page-header--margin");
    }
  });
});
