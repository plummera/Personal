$(document).ready(function() {

  var scene = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: "#scene3",
    triggerHook: "onLeave",
  })
  .setTween(TweenMax.from('#scene3', 1, {y: "0%", autoAlpha: 1, ease:Linear.easeNone}))
  .setPin(".divider1")
  .addTo(scene);

});
