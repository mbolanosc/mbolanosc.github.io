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

  /*function clouds_Floating(){
    var keep_floating = new TimelineMax({repeat:-1, yoyo:true});

    var clouds = [];
    clouds.push(document.getElementById("cloud_1"));
    clouds.push(document.getElementById("cloud_2"));
    clouds.push(document.getElementById("cloud_3"));
    clouds.push(document.getElementById("cloud_4"));
    clouds.push(document.getElementById("cloud_5"));
    clouds.push(document.getElementById("cloud_6"));
    clouds.push(document.getElementById("cloud_7"));
    clouds.push(document.getElementById("cloud_8"));

    for (var i = 0; i < clouds.length; i++) {
      console.log("float");
      keep_floating.add(TweenLite.from(clouds[i], 1, { ease: Back.easeOut.config(1.5), y: "5%" }));
    }
  }
  */

  function sunMoving() {
    console.log('sun_moving()');
    var sun_timeline = new TimelineMax({onComplete:blinkingEyes,repeat:-1, yoyo:true});
    //outerline
    sun_timeline.fromTo('#sun',1,{scale:1,transformOrigin:"0% 100%"},{scale:1.2,ease:Power2.easeOut});

    //callback

  }

  function blinkingEyes() {
    console.log('blinkingEyes()');

    var eye1_timeline = new TimelineMax({repeat:-1, yoyo:true});
    var eye2_timeline = new TimelineMax({repeat:-1, yoyo:true});

    eye1_timeline.to('#eye_1',2,{fill:"#0000"});
    eye2_timeline.to('#eye_2',2,{fill:"#0000"});

    //callback
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

    //callback

  }

  function clementine_first_look (){
    console.log('clementine 1');
    var clementine_first_appear = new TimelineMax();

    clementine_first_appear.fromTo('#clementine-first', 0.4, {opacity:0}, {opacity:3, ease:Power1.easeInOut,display:'block'})

    //callback

  }

  function clementine_moves() {
    console.log('clementine eyes');
    //eyes PARPADEO MEJORAR.
    var clementine_eyes_timeline= new TimelineMax({repeat:-1, yoyo:true});
    clementine_eyes_timeline.to('.clementine-eyes',2,{fill:"#FFFFFF"});
    //callback

  }

  
  var scene1 = new ScrollMagic.Scene({ triggerElement: trigger2 });
  scene1.setTween(clouds_timeline); // Start the clouds animation.
  scene1.addIndicators({ name: "2 (duration: 300 px)" });
  scene1.addTo(controller_Scroller);
}



/*orden
1. nubes YA
2. que floten las nubes.
3. sol YA
4. el viento de la cubeta de agua.
5. el humo de la casita. YA
6. los ojos parpadeando dentro del arbol. YA
7. clementine sale del arbol.YA -> parpadeando  NO.
8. clementine camina hacia la cubeta de agua. NO
9. clementine se moja con el agua.NO
10. clementine camina hacia las manzanas. NO
11. clementine se va a dormir. NO
*/


//FALTAS:
//problemas con los callback
