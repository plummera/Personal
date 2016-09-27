$(document).ready(function() {


  var scene = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    triggerElement: "#trigger0",
    triggerElement: "onLeave",
  })
  .setPin("#greywrap")
  .addIndicators({name: "whuh"})
  .addTo(scene);

  // Skill boxes
  // background Image Loop
  boxes = $(".skills");
  $backgrounds = [
    'url(/assets/img/bg/b_g.png) repeat center top',
    'url(/assets/img/bg/b_g.png) repeat center top',
    'url(/assets/img/bg/b_g.png) repeat center top'
  ];
  for ($i = 0;$i < boxes.length;$i++) {
    // Skills Box FadeOut Animation
    $(boxes[$i]).css('background', $backgrounds[$i]);
    skillBoxFade = TweenMax.fromTo(boxes[$i], 1, {opacity: "0"}, {opacity: "1", repeat: 0});
    new ScrollMagic.Scene({
      triggerElement: "#Scene1",
      duration: 500,
      offset: 500
    })
    .setTween(skillBoxFade)
    .addTo(scene);
  }


});
