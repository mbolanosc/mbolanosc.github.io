//http://scrollmagic.io/docs/index.html
window.addEventListener('load', init, false);
function init() {
  var tl = new TimelineMax({repeat: -1});
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
    clouds_timeline.add(TweenLite.from(clouds[i], 1, {
      ease: Back.easeOut.config(1.5),
      y: "100%"
    }));
  }

  //Add the onComplete callback to the last tween
  clouds_timeline.add(TweenLite.from(document.getElementById("cloud_7"), 1, {
    ease: Back.easeOut.config(1.5),
    y: "100%",
    onComplete: generalTimeLine
  }));

  function generalTimeLine() {
    console.log('generalTimeLine');
    var general_tm = new TimelineMax();
    var sun_timeline = new TimelineMax({onComplete: blinkingEyes, repeat: -1, yoyo: true});
    //outerline
    sun_timeline.fromTo('#sun', 1, {
      scale: 1,
      transformOrigin: "0% 100%"
    }, {
      scale: 1.2,
      ease: Power2.easeOut
    });
    function clouds_Floating() {
      console.log('clouds_Floating');
      var keep_floating = new TimelineMax({repeat: -1, yoyo: true});

      var clouds = [];
      clouds.push(document.getElementById("cloud_1"));
      clouds.push(document.getElementById("cloud_2"));
      clouds.push(document.getElementById("cloud_3"));
      clouds.push(document.getElementById("cloud_4"));
      clouds.push(document.getElementById("cloud_5"));
      clouds.push(document.getElementById("cloud_6"));
      clouds.push(document.getElementById("cloud_7"));
      clouds.push(document.getElementById("cloud_8"));

      var elementAnimationDelay = 0;
      var countMoveUp = 0;
      var countMoveDown = 0;

      function elementMoveUp(elementItem) {
        TweenMax.to(elementItem, 2, {top: "-=10px", ease: Power2.easeIn, onCompleteParams: [elementItem], onComplete: elementMoveDown});
      }
      function elementMoveDown(elementItem) {
        console.log('element down');
        TweenMax.to(elementItem, 2, {delay: 2,y: "-=10px",ease: Power2.easeOut,repeat: -1,
          yoyo: true,onCompleteParams: [elementItem],onComplete: elementMoveUp});
      }

      if (clouds == null) {
        console.log('esta nulo');
      }else{
        console.log('no esta nulo');
        for (var i = 0; i < clouds.length; i++) {
          //console.log('sds',clouds[i]);
          countMoveUp++;
          countMoveDown++;
          elementMoveDown(clouds[i]);
        }
      }
    }

    function smoke() {
      console.log('smoke()');
      var smoke_timeLine = new TimelineMax({repeat: -1, yoyo: true});
      var smoke_clouds = [];
      smoke_clouds.push(document.getElementById("smoke_1"));
      smoke_clouds.push(document.getElementById("smoke_2"));
      smoke_clouds.push(document.getElementById("smoke_3"));
      smoke_clouds.push(document.getElementById("smoke_4"));

      for (var i = 0; i < smoke_clouds.length; i++) {
        smoke_timeLine.add(TweenLite.from(smoke_clouds[i], 0.5, {
          opacity: 0.2,
          ease: Power2.easeInOut
        }));
      }

    }

    function blinkingEyes() {
      console.log('blinkingEyes()');
      //cambiarlo por tween y agregarle un tween al timeline
      var eye1_timeline = new TimelineMax({onComplete: notBlinkingTree,repeat: -1, yoyo: true});
      var eye2_timeline = new TimelineMax({onComplete: notBlinkingTree,repeat: -1, yoyo: true});

      eye1_timeline.to('#eye_1', 2, {fill: "#0000"});
      eye2_timeline.to('#eye_2', 2, {fill: "#0000"});
    }
    //sigue mala es para dejar de parpadear.
    function notBlinkingTree(){
      console.log('not blinking');
      var not_blinking_tm = new TimelineMax();
      not_blinking_tm.to('#eye_1', 2, {fill: "#0000"});
      not_blinking_tm.to('#eye_2', 2, {fill: "#0000"});

    }

    function clementine_first_look() {
      //con un sscope.
      console.log('clementine 1');
      var clementine_first_appear = new TimelineMax();

      clementine_first_appear.fromTo('#clementine-first', 0.4, {
        opacity: 0
      }, {
        opacity: 3,
        ease: Power1.easeInOut,
        display: 'block',
        delay: 8
      })

    }
    function clementine_moves() {
      console.log('clementine eyes');
      //eyes PARPADEO MEJORAR.
      var clementine_eyes_timeline = new TimelineMax({repeat: -1, yoyo: true});
      clementine_eyes_timeline.to('.clementine-eyes', 2, {fill: "#FFFFFF"});
      //mover a clementine hasta el agua
      console.log('move clementine');

      var clementine_to_water = new TimelineMax();
      clementine_to_water.to('#clementine-first', 1,{x:"-=150%",y:"=100%",delay:12});
      //patitas

      //path: tweens para un path a seguir agregar el callback
    }
    function water(){
      console.log('water');
      TweenLite.to(".st58", 1.5, {width:100, height:200});

    }
    general_tm.add(clouds_Floating);
    general_tm.add(smoke);
    general_tm.add(blinkingEyes);
    general_tm.add(clementine_first_look);
    general_tm.add(clementine_moves);
    general_tm.add(water);

  }

  //Scroll things.
  var scene1 = new ScrollMagic.Scene({triggerElement: trigger2});
  scene1.setTween(clouds_timeline); // Start the clouds animation.
  scene1.addIndicators({name: "2 (duration: 300 px)"});
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
//4. el viento de la cubeta de agua.
//8. clementine camina hacia la cubeta de agua. NO
//9. clementine se moja con el agua.NO
//10. clementine camina hacia las manzanas. NO
//11. clementine se va a dormir. NO
//12 hacer caminito de piedra.
