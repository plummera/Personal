$(document).ready(function() {

  // On Intro Button Click unlock scrolling
  $('#arrow').click(function() {
    $('body').css('overflow-y','auto');
  });

  // Initiate Controller
  var controller = new ScrollMagic.Controller();

  // Scene Init Button Motion Animation
  var arrowLoop = TweenMax.fromTo("#arrow", 1, {top: "87%"}, {top: "84%", repeat: -1, yoyo: true, ease: Circ.easeInOut});
  new ScrollMagic.Scene({triggerElement: "#intro", duration: "100%"})
                  .setTween(arrowLoop)
                  .addTo(controller);

  // Scene Init Button Fade Animation
  var arrowFade = TweenMax.fromTo("#arrow", 1, {opacity: "1"}, {opacity: "0", repeat: 0});
  new ScrollMagic.Scene({triggerElement: "#scene1", triggerHook: 1, duration: "100%"})
                  .setTween(arrowFade)
                  .addTo(controller);

  // NavBar Fade Animation
  var navBarFade = TweenMax.to(".navbar", 1, {className: "-=shadow"});
  new ScrollMagic.Scene({triggerElement: "#intro", triggerHook: "onLeave", duration: "100%"})
                  .setTween(navBarFade)
                  .addTo(controller);

  // Intro FadeOut Animation
  var scene1Fade = TweenMax.fromTo("#intro", 1, {opacity: "1"}, {opacity: "0", repeat: 0});
  new ScrollMagic.Scene({triggerElement: "#Scene1", triggerHook: "onLeave", duration: "100%"})
                  .setTween(scene1Fade)
                  .addTo(controller);
});
