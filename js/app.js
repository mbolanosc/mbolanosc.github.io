//http://scrollmagic.io/docs/index.html
window.addEventListener('load', init, false);
function init() {
  var tl = new TimelineMax({repeat:-1});
  let clouds_timeline = new TimelineMax();
  var controller_Scroller = new ScrollMagic.Controller();

  var clouds = [];
  clouds.push(document.getElementById("cloud_1"));
  clouds.push(document.getElementById("cloud_2"));
  clouds.push(document.getElementById("cloud_3"));
  clouds.push(document.getElementById("cloud_4"));
  clouds.push(document.getElementById("cloud_5"));
  clouds.push(document.getElementById("cloud_6"));
  clouds.push(document.getElementById("cloud_7"));
  clouds.push(document.getElementById("cloud_8"));


  var count_Clouds = 0;

  for (var i = 0; i < clouds.length; i++) {
    count_Clouds++;
    clouds_timeline.add(TweenLite.from(clouds[i], 1, { ease: Back.easeOut.config(1.5), y: "100%" }));
  }

  //Add the onComplete callback to the last tween
  clouds_timeline.add(TweenLite.from(document.getElementById("cloud_7"), 1, { ease:Back.easeOut.config(1.5), y: "100%", onComplete: sunMoving }));

  function sunMoving() {
    //ESTA MALO EL TIEMPO
    console.log('sun_moving()');
    var sun_timeline = new TimelineMax({repeat:-1, yoyo:true});
    //outerline
    sun_timeline.to('.st46',1,{scaleX:0.8,ease:Power2.easeOut});
    //inside line
    sun_timeline.to('.st51',2,{scaleX:0.8,ease:Power2.easeOut});
    //circle sun
    sun_timeline.to('.st41',3,{scaleX:0.8,ease:Power2.easeOut});


    //Add the onComplete callback to the last tween
    //CAMBIAR PARA PROBAR
    clouds_timeline.add(TweenLite.from('.st46', 1, {ease:Back.easeOut.config(1.5),onComplete: smoke }));
  }
  function blinkingEyes() {
    console.log('blinkingEyes()');

    var eye1_timeline = new TimelineMax({repeat:-1, yoyo:true});
    var eye2_timeline = new TimelineMax({repeat:-1, yoyo:true});

    eye1_timeline.to('#eye_1',2,{fill:"#0000"});
    eye2_timeline.to('#eye_2',2,{fill:"#0000"});

    //timeline mala
    //clouds_timeline.add(TweenLite.from(document.getElementById("eye_2"),2 { fill:"#0000", onComplete: smoke }));
  }

  function smoke(){
    console.log('smoke()');
    var smoke_timeLine = new TimelineMax({repeat:-1, yoyo:true});
    var smoke_clouds = [];
    smoke_clouds.push(document.getElementById("smoke_1"));
    smoke_clouds.push(document.getElementById("smoke_2"));
    smoke_clouds.push(document.getElementById("smoke_3"));
    smoke_clouds.push(document.getElementById("smoke_4"));

    for (var i = 0; i < smoke_clouds.length; i++) {
      smoke_timeLine.add(TweenLite.from(smoke_clouds[i], 0.5, {opacity:0.2,ease:Power2.easeInOut}));
    }
  }

  var scene1 = new ScrollMagic.Scene({ triggerElement: trigger2 });
  scene1.setTween(clouds_timeline); // Start the clouds animation.
  scene1.addIndicators({ name: "2 (duration: 300 px)" });
  scene1.addTo(controller_Scroller);
}




//ME FALTA EL SOL.
//EL CALLBACK DE sunMoving.
//LLAMAR A CLEMENTINE
