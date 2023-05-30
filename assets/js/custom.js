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

  $(document).on('click', function(event) {
    var $div = $('#popupSearchButton');
    if (!$div.is(event.target) && !$div.has(event.target).length) {
      $(".popupSearchBar").hide();
    }
  });
  

})(jQuery);
