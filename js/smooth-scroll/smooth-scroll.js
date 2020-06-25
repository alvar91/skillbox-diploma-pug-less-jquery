$(document).ready(function () {
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    const target = this.hash;
    const $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top,
        },
        900,
        "swing",
        function () {
          // window.location.hash = target;
        }
      );
  });
});
