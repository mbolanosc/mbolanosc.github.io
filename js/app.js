//http://scrollmagic.io/docs/index.html
window.addEventListener('load', init, false);
function init() {

  let clouds_timeline = new TimelineMax();
  var controller_Scroller = new ScrollMagic.Controller();

  var clouds = [];
  clouds.push(document.getElementById("cloud_1"));
  clouds.push(document.getElementById("cloud_2"));
  clouds.push(document.getElementById("cloud_3"));
  clouds.push(document.getElementById("cloud_4"));
  clouds.push(document.getElementById("cloud_5"));
  clouds.push(document.getElementById("cloud_6"));
  var count_Clouds = 0;

  for (var i = 0; i < clouds.length; i++) {
    count_Clouds++;
    clouds_timeline.add(TweenLite.from(clouds[i], 1, { ease: Back.easeOut.config(1.5), y: "100%" }));
  }

  //Add the onComplete callback to the last tween
  clouds_timeline.add(TweenLite.from(document.getElementById("cloud_7"), 1, { ease: Back.easeOut.config(1.5), y: "100%", onComplete: sunMoving }));

  function sunMoving() {
    console.log('sun_moving()');
  }

  var scene1 = new ScrollMagic.Scene({ triggerElement: trigger2 });
  scene1.setTween(clouds_timeline); // Start the clouds animation.
  scene1.addIndicators({ name: "2 (duration: 300 px)" });
  scene1.addTo(controller_Scroller);
}
