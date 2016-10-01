// On Page Refresh, Scroll to the Top of the Page
window.onbeforeunload = function(e) {
  $(window).scrollTop(0);
};

function test() {
  console.log('this is a test');
}

// H1 Section Divider Font Re-size
$('.divider1').css('text-align','center');

function reset() {
  $(window).scrollTop(0);
  $('body').css('overflow-y', 'hidden');
};
