$(document).ready(function() {
  // On Page Refresh, Scroll to the Top of the Page
  window.onbeforeunload = function(e) {
    $(window).scrollTop(0);
  };
});

function test() {
  console.log('this is a test');
}

function reset() {
  $(window).scrollTop(0);
  $('body').css('overflow-y', 'hidden');
};
