$(document).ready(function() {

  var scene2 = new ScrollMagic.Controller();

  // Slide navbar up
  new ScrollMagic.Scene({
    triggerElement: "#scene2",
    duration: 200,
    offset: -1100
  })
  .setTween(TweenMax.to(".navbar", 1,{y: "-100%"}))
  .addTo(scene2);

  // Pin Scene
  new ScrollMagic.Scene({
        triggerElement: "#scene2",
        triggerHook: "onLeave",
        duration: "800%",
        pushFollowers: false
      })
      .setPin("#scene2")
      .addTo(scene2);

  // Start movie
  $('#video').vide({
    mp4: '/assets/video/movie.mp4',
    webm: '/assets/video/movie.mp4',
    ogv: '/assets/video/movie.mp4',
    poster: '/assets/video/movie'
  }, {
    autoplay: true,
    mute: true,
    volume: 1,
    loop: true
  });

  // Fade in GitHub Link
  var github = TweenMax.fromTo("#pillbox", 1,{opacity: "0"}, {opacity: "1"});

  new ScrollMagic.Scene({
    triggerElement: "#scene3",
    triggerHook: "onEnter",
    duration: "200%",
    offset: -3000
  })
  .setTween(github)
  .addTo(scene2);

  //Pulse Github Cloud
  var pulse = TweenMax.fromTo("#githubCloud", 1,
								{height: 115},
								{height: 100, repeat: -1, yoyo: true, ease: Circ.easeInOut}
							);
  new ScrollMagic.Scene({
    triggerElement: "#scene3",
    triggerHook: "onEnter",
    duration: "400%",
    offset: -2400
  })
  .setTween(pulse)
  .addTo(scene2);


});
