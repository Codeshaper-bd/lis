(function ($) {
  "use strict";

  // Mean Menu
  $(".mean-menu").meanmenu({
    meanScreenWidth: "1199",
  });

  // Search Bar
  $("#popupSearchButton").on("click", function () {
    $(".popupSearchBar").toggle();
  });

  $(document).on("click", function (event) {
    var $div = $("#popupSearchButton");
    var $target = $(event.target);
    if (
      !$div.is($target) &&
      !$div.has($target).length &&
      !$target.is("input")
    ) {
      $(".popupSearchBar").hide();
    }
  });

  // sidebar Video Player
  $(".play-btn").magnificPopup({
    type: "video",
    // mainClass: 'mfp-fade'
  });

  //calousel
  $(".slider-card-wrapper").owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    navText: ["<iconify-icon icon='ic:round-keyboard-arrow-left'>", "<iconify-icon icon='ic:round-keyboard-arrow-left' rotate='180deg'> "],
    responsive: {
      0: {
        items: 1,
      },
      991: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });


  //calendar
  $('.booking-calender').updateCalendarOptions({
    date: '05/11/2017'
  });


})(jQuery);

function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
