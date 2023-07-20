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

  // banner-ara

  $(".slider-wrapper-banner").owlCarousel({
    smartSpeed: 1000,
    center: true,
    items: 1.3,
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    navText: [
      '<iconify-icon icon="fa6-solid:angle-left"></iconify-icon>',
      '<iconify-icon icon="fa6-solid:angle-right"></iconify-icon>',
    ],
    responsive: {},
  });

  // Slider area

  $(".popular-products-slider-area").owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    navText: [
      '<iconify-icon icon="fa6-solid:angle-left"></iconify-icon>',
      '<iconify-icon icon="fa6-solid:angle-right"></iconify-icon>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".popup-product-image").magnificPopup({
    type: "image",
    // other options
  });

  //image canvas
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: true,
    vertical: false,
    focusOnSelect: true,
  });

  $(".suggestion-card-wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
  });

  //button-increment-decrement
  var incrementPlus;
  var incrementMinus;

  var buttonPlus = $(".right");
  var buttonMinus = $(".left");

  var incrementPlus = buttonPlus.click(function () {
    var $n = $(this).parent(".counter-button").find(".qty");
    $n.val(Number($n.val()) + 1);
  });

  var incrementMinus = buttonMinus.click(function () {
    var $n = $(this).parent(".counter-button").find(".qty");
    var amount = Number($n.val());
    if (amount > 0) {
      $n.val(amount - 1);
    }
  });

  //image upload
  var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  //file-upload
  // const dropArea = document.querySelector(".drop_box"),
  //   button = dropArea.querySelector("button"),
  //   dragText = dropArea.querySelector("header"),
  //   input = dropArea.querySelector("input");
  // let file;
  // var filename;

  // button.onclick = () => {
  //   input.click();
  // };

  // input.addEventListener("change", function (e) {
  //   var fileName = e.target.files[0].name;
  //   let filedata = `
  //   <form action="" method="post">
  //   <div class="form">
  //   <h4>${fileName}</h4>
  //   </div>
  //   </form>`;
  //   dropArea.innerHTML = filedata;
  // });

  // <input type="email" placeholder="Enter email upload file">
  //   <button class="btn">Upload</button>
})(jQuery);
