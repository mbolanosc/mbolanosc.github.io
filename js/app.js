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

      //  var elementAnimationDelay = 0;
      var countMoveUp = 0;
      var countMoveDown = 0;

      function elementMoveUp(elementItem) {
        TweenMax.to(elementItem, 2, {
          top: "-=10px",
          ease: Power2.easeIn,
          onCompleteParams: [elementItem],
          onComplete: elementMoveDown
        });
      }
      function elementMoveDown(elementItem) {
        TweenMax.to(elementItem, 2, {
          delay: 2,
          y: "-=10px",
          ease: Power2.easeOut,
          repeat: -1,
          yoyo: true,
          onCompleteParams: [elementItem],
          onComplete: elementMoveUp
        });
      }

      if (clouds == null) {} else {
        for (var i = 0; i < clouds.length; i++) {
          //console.log('sds',clouds[i]);
          countMoveUp++;
          countMoveDown++;
          elementMoveDown(clouds[i]);
        }
      }
    }

    function smoke() {
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
      //cambiarlo por tween y agregarle un tween al timeline
      var eye1_timeline = new TimelineMax({onComplete: notBlinkingTree, repeat: -1, yoyo: true});
      var eye2_timeline = new TimelineMax({onComplete: notBlinkingTree, repeat: -1, yoyo: true});

      eye1_timeline.to('#eye_1', 2, {fill: "#0000"});
      eye2_timeline.to('#eye_2', 2, {fill: "#0000"});
    }
    //sigue mala es para dejar de parpadear.
    function notBlinkingTree() {
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
      });

    }
    function clementine_moves() {
      var clementinePathTreeTm = new TimelineMax();

      console.log('clementine eyes');
      var clementine_eyes_timeline = TweenMax.to('.clementine-eyes', 2.5, {
        repeat: -1,
        yoyo: true,
        scaleY: 0.3,
        scaleX: 1.7
      });
      //mover a clementine hasta el arbol
      move_1 = TweenMax.to('#clementine-first', 2, {
        x: "-=70%",
        delay: 10
      });
      move_2 = TweenMax.to('#clementine-first', 2, {
        y: "+70%",
        delay: 12
      });

      clementinePathTreeTm.add(TweenLite.to(document.getElementById("clementine-first"), 2, {
        onComplete: clementineStandUp,
        x: "-=90%",
        y: "=95%",
        delay: 14
      }));
    }

    function clementineStandUp() {
      var clementineStandsUpTm = new TimelineMax();
      //esconder el anterior y aparecer el de pie.
      var clementineNotDisplay = TweenMax.to('#clementine-first', 1, {
        display: 'none',
        ease: Power1.easeInOut,
        delay: 1
      });

      clementineStandsUpTm.add(TweenLite.to(document.getElementById("clementine-stand_up"), 1, {
        onComplete: water,
        display: 'block',
        ease: Power1.easeInOut,
        delay: 2
      }));
    }
    //hacer que el agua baje
    function water() {
      var WaterMovesDown = new TimelineMax();

      console.log('water');
      TweenLite.to(".st58", 1.5, {scaleY: 2.5});
      //TweenLite.to("#balde", 1.5, {scaleY:2.5});
      WaterMovesDown.add(TweenLite.to(document.getElementById("balde"), 1.5, {
        onComplete: clementineScare,
        scaleY: 2.5
      }));

      function clementineScare(){
        var clementineScareShows = new TimelineMax();

        var clementineNotDisplay = TweenMax.to('#clementine-stand_up', 0, {
          display: 'none',
          ease: Power1.easeInOut,
          delay: 0.5
        });
        clementineScareShows.add(TweenLite.to(document.getElementById("clementine-scare"), 1, {
            onComplete: clementineMovesToApple,
            display: 'block',
            ease: Power1.easeInOut,
            delay: 0.5
          }));
      }
    }

    function clementineMovesToApple(){
      //hacer que el agua vuelva a la normalidad.!!!
      var clementinePathToApple = new TimelineMax();
      var sunsetTm = new TimelineMax();


      var clementineNotDisplayScare = TweenMax.to('#clementine-scare', 0, {
          display: 'none',
          ease: Power1.easeInOut,
          delay: 0.5
        });

        var clementineDisplayAgain = TweenMax.to('#clementine-first', 1, {
          display: 'block',
          ease: Power1.easeInOut,
          delay: 0.5,
        });
        //path to apple
        move_1 = TweenMax.to('#clementine-first', 2, {
          x: "+=70%",
          y: "+=100%",
          delay: 2
        });
        move_2 = TweenMax.to('#clementine-first', 2, {
          x: "+=100%",
          //y: "+=100%",
          delay: 3
        });
        //sunset
        clementinePathToApple.add(TweenLite.to(document.getElementById("offset-1"), 2, {
          "stop-color":"yellow",
           ease: Power3.easeOut
        }));
        clementinePathToApple.add(TweenLite.to(document.getElementById("offset-2"), 2, {
          "stop-color":"#F1654C",
           ease: Power3.easeOut
        }));
        clementinePathToApple.add(TweenLite.to(document.getElementById("offset-3"), 2, {
          "stop-color":"#E01931",
           ease: Power3.easeOut
        }));
        //sun goes down.
        clementinePathToApple.add(TweenLite.to(document.getElementById("sun"), 2, {
          x:"+=200%",
          y:"+=300%",
          ease: Power0.easeOut,
          opacity:0,
          display:"none"
        }));

        clementinePathToApple.add(TweenLite.to(document.getElementById("clementine-first"), 2, {
          onComplete: eatingApple,
          x: "+=105%",
          y: "-=55%",
          delay: 3
        }));

        /*sunset_first_color = TweenMax.to('#offset-1', 2, {
          "stop-color":"yellow",
           ease: Power1.easeOut
        });
        sunset_first_color = TweenMax.to('#offset-1', 2, {
          "stop-color":"yellow",
           ease: Power1.easeOut
        });*/
    }

    function eatingApple(){
      var clementineEatsApple = new TimelineMax();

      console.log('hola');
      apple1 = TweenMax.to('#m-1', 2, {
        display:'none',
        delay: 2
      });
      apple2 = TweenMax.to('#m-2', 2, {
        display:'none',
        delay: 3
      });

      clementineEatsApple.add(TweenLite.to(document.getElementById("m-3"), 2, {
        onComplete: clementineGoesToSleep,
        display:'none',
        delay: 4
      }));

    }

    function clementineGoesToSleep(){
      console.log('clementineGoesToSleep');
      var clementineGoesToSleepTm = new TimelineMax();
      clementineGoesToSleepTm.add(TweenLite.to(document.getElementById("clementine-first"), 1, {
        onComplete: clementineDesappear,
        x: "-=70%",
        y: "-=40%",
        delay: 2
      }));
      function clementineDesappear(){
        console.log('insider function');
        clementineDesappearTm = TweenMax.to('#clementine-first', 1, {
          display:'none',
          delay: 3
        });
        clementineDesappearTm = TweenMax.to('#clementine-first', 1, {
          display:'none',
          delay: 3
        });

        clementineGoesToSleepTm.add(TweenLite.to(document.getElementById("offset-1"), 2, {
          "stop-color":"#6F2480",
           ease: Power3.easeOut
        }));
        clementineGoesToSleepTm.add(TweenLite.to(document.getElementById("offset-2"), 2, {
          "stop-color":"#6F2480",
           ease: Power3.easeOut
        }));
        clementineGoesToSleepTm.add(TweenLite.to(document.getElementById("offset-3"), 2, {
          "stop-color":"#02135C",
           ease: Power3.easeOut
        }));
        clementineGoesToSleepTm.add(TweenLite.to(document.getElementById("offset-4"), 2, {
          "stop-color":"#422E39",
           ease: Power3.easeOut
        }));
        clementineGoesToSleepTm.add(TweenLite.to(document.getElementById("offset-5"), 2, {
          "stop-color":"#004D63",
           ease: Power3.easeOut
        }));
        //moon goes up
        clementineGoesToSleepTm.add(TweenLite.to(document.getElementById("sun"), 2, {
          x:"+=350%",
          y:"-=300%",
          ease: Power0.easeOut,
          opacity:100,
          display:"block",
        }));
        sunline1 = TweenMax.to('#sunline1', 2, {
          display:"none"
        });
        sunline2 = TweenMax.to('#sunline2', 2, {
          display:"none"
        });
        sunColor = TweenMax.to('#circleSun', 2, {
        "fill":"white"

          });

      }
    }

    general_tm.add(clouds_Floating);
    general_tm.add(smoke);
    general_tm.add(blinkingEyes);
    general_tm.add(clementine_first_look);
    general_tm.add(clementine_moves);

  }

  //Scroll things.
  var scene1 = new ScrollMagic.Scene({triggerElement: trigger2});
  scene1.setTween(clouds_timeline); // Start the clouds animation.
  //scene1.addIndicators({name: "2 (duration: 300 px)"});
  scene1.addTo(controller_Scroller);
}

/*orden
1. nubes YA
2. que floten las nubes.
3. sol YA
4. el viento de la cubeta de agua.
5. el humo de la casita. YA
6. los ojos parpadeando dentro del arbol. YA
7. clementine sale del arbol.YA
8. clementine camina hacia la cubeta de agua. YA
9. clementine se moja con el agua.YA
10. clementine camina hacia las manzanas. NO
11. clementine se va a dormir. NO
*/

//FALTAS:
//4. el viento de la cubeta de agua.
//10. clementine camina hacia las manzanas. NO
//11. clementine se va a dormir. NO
//12 hacer caminito de piedra.
//13.que se haga de noche -> fondo oscuro y sol se hace luna y las nubes tienen transparencia
//animar la portada
