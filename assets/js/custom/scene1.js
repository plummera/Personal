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
      offset: 700 + (150 * $i),
      duration: 1400,
    })
    .setTween(skillBoxFade)
    .setPin(boxes)
    .addTo(scene);
  }

  //Pin Scene1 for a little bit
  new ScrollMagic.Scene({
    triggerElement: "#scene1",
    triggerHook: "onEnter",
    duration: 2200,
    offset: 2864,
    pushFollowers: false
  })
  .setPin('#scene1')
  .addTo(scene);

  // Slide Divider out from under skillboxes
  new ScrollMagic.Scene({
    triggerElement: "#scene2",
    duration: 500,
    offset: -1900
  })
  .setTween(TweenMax.to("#divider1", 2.5,{x: "100%"}))
  .addTo(scene);

  // Slide skillboxes out to the left
  new ScrollMagic.Scene({
    triggerElement: "#scene2",
    duration: 500,
    offset: -1800
  })
  .setTween(TweenMax.to(".skills", 1,{x: "-600%"}))
  .addTo(scene);

  // Fade CallBoxes out
  new ScrollMagic.Scene({
    triggerElement: "#scene2",
    duration: 300,
    offset: -2200
  })
  .setTween(TweenMax.fromTo(".callout", 1,{opacity: "1"}, {opacity: "0", repeat: 0}))
  .addTo(scene);

  // // Pin Blank White Scene1
  // new ScrollMagic.Scene({
  //   triggerElement: "#scene2",
  //   duration: 1600,
  //   pushFollowers: false,
  //   offset: -800
  // })
  // .setPin("#scene2")
  // .addIndicators({name: "freeze FBI"})
  // .addTo(scene);

  // Change Background color of Scene 1
  var change = TweenMax.fromTo("#fadeBlock1", 1,{opacity: "0"}, {opacity: "1"});
  new ScrollMagic.Scene({
    triggerElement: "#scene2",
    triggerHook: "onEnter",
    duration: 1600,
    offset: -2600
  })
  .setTween(change)
  .addTo(scene);

  // Scene Down Arrow Animation
  var arrowLoop = TweenMax.fromTo(".instructionalArrow", 1, {bottom: "15%"}, {bottom: "11%", repeat: -1, yoyo: true, ease: Circ.easeInOut});
  new ScrollMagic.Scene({
    triggerElement: "#scene1",
    triggerHook: "onEnter",
    offset: 400,
    duration: 1950
  })
  .setTween(arrowLoop)
  .addTo(scene);

  // arrow Fade In
  var arrow = $(".instructionalArrow");
  var arrowFadeIn = TweenMax.fromTo(arrow, 1, {opacity: "0"}, {opacity: "1"}, {opacity: "0"});
  new ScrollMagic.Scene({
    triggerElement: "#scene1",
    duration: 400,
    offset: 150,
  })
  .setTween(arrowFadeIn)
  .addTo(scene);

  // arrow Fade Out
  var arrow = $(".instructionalArrow");
  var arrowFadeOut = TweenMax.to(arrow, 1, {opacity: "0"});

  new ScrollMagic.Scene({
    triggerElement: "#scene1",
    duration: 400,
    offset: 1600,
  })
  .setTween(arrowFadeOut)
  .addTo(scene);
});
