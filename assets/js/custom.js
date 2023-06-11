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


  $(document).on('click', function (event) {
    var $div = $('#popupSearchButton');
    var $target = $(event.target);
    if (!$div.is($target) && !$div.has($target).length && !$target.is('input')) {
      $('.popupSearchBar').hide();
    }
  });

  // sidebar Video Player
  $('.play-btn').magnificPopup({
    type: 'video',
    // mainClass: 'mfp-fade'
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
