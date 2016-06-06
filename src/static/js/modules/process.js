var $ = require('jquery');
require('./secondary-nav');
require('jquery.scrollto');

function jumpToAnchorLink() {
  // check for hash value - hash is first priority
  var hash = window.location.hash.substr(1).toLowerCase(),
    re = /^[a-zA-Z0-9\-]*$/;

  // only allow letters, digits and - symbols in hashes
  if (!re.test(hash)) return;

  var $el = $( '#' + hash),
    $expandable = $el.closest('.expandable');

  if (hash !== "" && $expandable.length && !$expandable.hasClass('expandable__expanded')) {
    $expandable.find('.expandable_target')[0].click();
    $.scrollTo( $el, {
      duration: 600,
      offset: -30
    });
  }
}


$(document).ready( function() {
  jumpToAnchorLink();
  $(window).on('hashchange', function () {jumpToAnchorLink();});
  
  // scroll to the top of the parent expandable when a close
  // link is clicked at the bottom of a step
  $('.bottom-close-link').on('click', function (e) {    
    $.scrollTo( $(e.target).closest('.expandable'), {
      duration: 250,
      offset: -30
    });
    
  })
});
