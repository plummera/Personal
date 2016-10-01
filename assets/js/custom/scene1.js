$(document).ready(function() {

  var scene = new ScrollMagic.Controller();


  // Pin Greywrap
  new ScrollMagic.Scene({
    triggerElement: "#scene1",
    triggerHook: "onLeave",
    duration: 2200,
    offset: -12,
    pushFollowers: true,
    reverse: true
  })
  .setPin("#greywrap")
  .addTo(scene);

  // Skill boxes
  // background Image Loop
  boxes = $(".skills");
  $backgrounds = [
    'url(/assets/img/bg/b_g.png) repeat',
    'url(/assets/img/bg/b_g.png) repeat',
    'url(/assets/img/bg/b_g.png) repeat',
    'url(/assets/img/bg/b_g.png) repeat',
    'url(/assets/img/bg/b_g.png) repeat',
    'url(/assets/img/bg/b_g.png) repeat'
  ];
  for ($i = 0;$i < boxes.length;$i++) {
    // Skills Box FadeOut Animation
    $(boxes[$i]).css('background', $backgrounds[$i]);
    skillBoxFade = TweenMax.fromTo(boxes[$i], 1, {opacity: "0"}, {opacity: "1", repeat: 0});
    new ScrollMagic.Scene({
      triggerElement: "#intro",
      triggerHook: "onLeave",
      offset: 800,
      duration: 1400,
    })
    .setTween(skillBoxFade)
    .setPin(boxes)
    .addTo(scene);
  }

  //Pin Scene1 for a little bit
  new ScrollMagic.Scene({
    triggerElement: "#scene2",
    triggerHook: "onEnter",
    duration: 2200,
    offset: -2271,
    pushFollowers: true
  })
  .setPin('#scene1')
  .addTo(scene);


});
