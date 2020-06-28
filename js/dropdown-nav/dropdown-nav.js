$(document).ready(function () {
  const pageHeaderToggle = $(".page-header__toggle");
  const pageHeader = $(".page-header");
  const pageHeaderNav = $(".page-header__nav");
  
  $("#nav-btn").click(function () {
    if (pageHeaderToggle.hasClass("page-header__toggle--closed")) {
      pageHeaderNav.css("display", "block");
      pageHeaderToggle
        .removeClass("page-header__toggle--closed")
        .addClass("page-header__toggle--opened");
    } else {
      pageHeaderNav.css("display", "none");
      pageHeaderToggle
        .removeClass("page-header__toggle--opened")
        .addClass("page-header__toggle--closed");
    }

    if (pageHeader.hasClass("page-header--margin")) {
      pageHeader.removeClass("page-header--margin");
    } else {
      pageHeader.addClass("page-header--margin");
    }
  });

  $(".main-nav__link--header").click(function () {
    if (pageHeaderToggle.hasClass("page-header__toggle--opened")) {
      pageHeaderNav.css("display", "none");
      pageHeaderToggle
        .removeClass("page-header__toggle--opened")
        .addClass("page-header__toggle--closed");
        pageHeader.removeClass("page-header--margin");
    }
  });

  $(window).resize(function() {
    if ($(window).width() < 1024 && pageHeaderToggle.hasClass("page-header__toggle--closed")) {
      pageHeaderNav.css("display", "none");
    } else {
      pageHeaderNav.css("display", "block");
    }
  });
});
