//http://scrollmagic.io/docs/index.html
window.addEventListener('load', init, false);
function init() {
  var clouds_timeline = new TimelineMax();
  var controller_Scroller = new ScrollMagic.Controller();

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
      var cloudTween = TweenLite.from(clouds[i], count_Clouds, { ease: Back.easeOut.config(1.5), y: "100%"});
      clouds_timeline.add(cloudTween);
    }
  }

  //sun.
  function sun_moving() {
    console.log('HOLA');
    //var sun = document.getElementsByClassName("st46");
    //TweenMax.to("st46", 2.5, { scaleX: 1, scaleY: 0.8, opacity: 0.7 });

  }

  //smoke.
  //clementine eyes.



  var scene1 = new ScrollMagic.Scene({ triggerElement: trigger2 });
  scene1.setTween(clouds_timeline); // Start the clouds animation.
  scene1.addIndicators({ name: "2 (duration: 300 px)" });


  //scene2.setTween(sun_moving); // Start the sun animation.
  //timing_1.add(sun_moving);

  scene1.addTo(controller_Scroller);

  scene1.on('update', function (event) {
    //console.log("Changes the position");
  });

  scene1.on('leave', function (event) {
    console.log("Leave the target");

  });

  scene1.on("progress", function (event) {
//    console.log("?? " + event.progress);

  });
}
