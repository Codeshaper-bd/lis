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

  //searchbar
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

  //image-gallery-school
  $(document).ready(function () {

    $('a.btn-gallery').on('click', function (event) {
      event.preventDefault();

      var gallery = $(this).attr('href');

      $(gallery).magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
          enabled: true
        }
      }).magnificPopup('open');
    });

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





})(jQuery);

//calendar
function selectDate(date) {
  $('.booking-calender').updateCalendarOptions({
    date: date
  });
  console.log(calendar.getSelectedDate());
}

var defaultConfig = {
  weekDayLength: 1,
  date: '08/05/2021',
  onClickDate: selectDate,
  showYearDropdown: true,
  startOnMonday: false,
};

var calendar = $('.booking-calender').calendar(defaultConfig);
console.log(calendar.getSelectedDate());



//pass hide icon
function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
