$(document).ready(function() {

  var scene3 = new ScrollMagic.Controller();

  // Screen Wipe definition
  var wipeAnimation = new TimelineMax()
    .fromTo("#about",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone});  // in from right

  new ScrollMagic.Scene({
    triggerElement: "#scene3",
    triggerHook: "onEnter",
    duration: "100%",
  })
  .setTween(wipeAnimation)
  .addTo(scene3);

  // Slide navbar down
  new ScrollMagic.Scene({
    triggerElement: "#scene3",
    triggerHook: "onEnter",
    duration: "80%",
    offset: -1600
  })
  .setTween(TweenMax.to(".navbar", 1,{y: "0%"}))
  .addTo(scene3);

  // Pin Scene
  new ScrollMagic.Scene({
        triggerElement: "#scene3",
        triggerHook: "onLeave",
        duration: "300%",
        pushFollowers: true
      })
      .setPin("#scene3")
      .addTo(scene3);


});
