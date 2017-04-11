//http://scrollmagic.io/docs/index.html
window.addEventListener('load', init, false);
function init() {
  var timing_1 = new TimelineMax();
  var controller_Scroller = new ScrollMagic.Controller();
  var trigger1 = document.getElementById("trigger1");
  var animate1 = document.getElementById("animate1");

  //first scene.
  var scene1 = new ScrollMagic.Scene({ triggerElement: trigger1 });
  scene1.addTo(controller_Scroller);

  //Second scene. CLOUDS
  function clouds() {
    var clouds = [];
    clouds.push(document.getElementById("cloud_1"));
    clouds.push(document.getElementById("cloud_2"));
    clouds.push(document.getElementById("cloud_3"));
    clouds.push(document.getElementById("cloud_4"));
    clouds.push(document.getElementById("cloud_5"));
    clouds.push(document.getElementById("cloud_6"));
    clouds.push(document.getElementById("cloud_7"));
    var count_Clouds = 0;

    for (var i = 0; i < clouds.length; i++) {
      count_Clouds++;
      var cloudTween = TweenLite.from(clouds[i], count_Clouds, { ease: Back.easeOut.config(1.5), y: "100%" });
    }
    console.log('CONTADOR DE NUBES', count_Clouds);
    /*var cloudKeepMoving = new TimelineMax({repeat:-1});
    function floating_Clouds(){
      var cloudTween = TweenLite.from(clouds,count_Clouds,{ease:Back.easeOut.config(1.5), y: "100%"});
    }*/
    //cloudKeepMoving.add(floating_Clouds);
  }

  //sun.
  function sun_moving() {
    //var sun =
    document.getElementsByClassName("st46");
    //console.log(sun);
    TweenMax.to("st46", 2.5, { scaleX: 1, scaleY: 0.8, opacity: 0.7 });
  }

  //smoke.
  //clementine eyes.
  var scene2 = new ScrollMagic.Scene({ triggerElement: trigger2 });
  scene2.setTween(clouds); // Start the clouds animation.
  timing_1.add(sun_moving);
  //scene2.setTween(sun_moving); // Start the sun animation.
  scene2.addTo(controller_Scroller);

  scene2.on('update', function (event) {
    console.log("Hit enter point of scene 1.");
  });

  scene2.on('leave', function (event) {
    console.log("Hit end point of scene 1.");
  });

  scene2.on("progress", function (event) {
    console.log("Scene progress changed to " + event.progress);
  });
}


//notes
//  //scene1.setTween(animate1Tween); // hace que aparezca el animate1Tween.
  //scene1.addIndicators({ name: "1 (duration: 1 second)" }); // add indicators (requires plugin)
  //    //let animate1Tween = TweenLite.to(animate1, 1, { color: "white" });
  //      //var trigger2 = document.getElementById("trigger2");
    //var animate2 = document.getElementById("animate2");
    //    //scene2.addIndicators({ name: "2 (duration: 300 px)" });
