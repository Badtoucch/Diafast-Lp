'use strict';

$(function () {
  var ACTIVE_CLASS_NAME = 'active';

  var $selects = $('.creators__select');
  var $body = $('.creators__body');
  var $cards = $('.creator-card');

  // var getMaxCardHeight = function () {
  //   return Math.max.apply(null, $cards.map(function () {
  //     return $(this).outerHeight();
  //   }).toArray());
  // };

  var addBodyHeight = function () {
    // var maxHeight = getMaxCardHeight();
    // $body.css('min-height', $(window).outerWidth() > 479 ? maxHeight : activeHeight);
    var activeHeight = $cards.filter('.' + ACTIVE_CLASS_NAME).outerHeight();


    $body.css('min-height', activeHeight);
  };

  addBodyHeight();

  $(window).resize(addBodyHeight);

  $selects.click(function (evt) {
    evt.preventDefault();
    var $this = $(this);
    var id = $selects.index($this);

    if ($this.hasClass(ACTIVE_CLASS_NAME)) return;

    $selects.removeClass(ACTIVE_CLASS_NAME).eq(id).addClass(ACTIVE_CLASS_NAME);
    $cards.removeClass(ACTIVE_CLASS_NAME).eq(id).addClass(ACTIVE_CLASS_NAME);
    addBodyHeight();
  });
});