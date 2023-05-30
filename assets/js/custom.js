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
    var $target = $(event.target);
    if (!$div.is($target) && !$div.has($target).length && !$target.is('input')) {
      $('.popupSearchBar').hide();
    }
  });
  

})(jQuery);
