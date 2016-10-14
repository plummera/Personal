$(document).ready(function() {
  var scene5 = new ScrollMagic.Controller();

  // Screen Wipe definition
  var wipeAnimation = new TimelineMax()
    .fromTo("#scene5",    1, {y:"-100%"}, {y:"0%", ease: Linear.easeNone})  // in from right

  new ScrollMagic.Scene({
				triggerElement: "#scene4",
				triggerHook: "onLeave",
        duration: "100%",
        pushFollowers: false
			})
			.setTween(wipeAnimation)
			.addTo(scene5);

  // Pin Scene
  new ScrollMagic.Scene({
        triggerElement: "#scene5",
        triggerHook: "onLeave",
        duration: "100%",
        pushFollowers: true
      })
      .setPin("#scene5")
      .addTo(scene5);

})
