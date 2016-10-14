$(document).ready(function() {
  var scene4 = new ScrollMagic.Controller();

  // Screen Wipe definition
  var wipeAnimation = new TimelineMax()
    .fromTo("#scene4",    1, {x:"-100%"}, {x:"0%", ease: Linear.easeNone})  // in from right

  // Pin Scene
  new ScrollMagic.Scene({
				triggerElement: "#scene4",
				triggerHook: "onLeave",
        duration: "100%",
        pushFollowers: false
			})
			.setPin("#scene4")
			.setTween(wipeAnimation)
			.addTo(scene4);

})
