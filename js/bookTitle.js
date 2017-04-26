var Started = false;
if (!Started) {
  window.addEventListener('load', init, false);
}
function init() {
  console.log('hola');
  var tl = new TimelineMax();
  var cloudstm = new TimelineMax({repeat: -1, yoyo: true});
  var letters = [];
  var presentationClouds = [];
  var countMoveUp = 0;
  var countMoveDown = 0;
  letters.push(document.getElementById("title-c1"));
  letters.push(document.getElementById("title-l1"));
  letters.push(document.getElementById("title-e1"));

  letters.push(document.getElementById("title-m1"));
  letters.push(document.getElementById("title-e2"));
  letters.push(document.getElementById("title-n1"));

  letters.push(document.getElementById("title-t1"));
  letters.push(document.getElementById("title-i1"));
  letters.push(document.getElementById("title-n2"));
  letters.push(document.getElementById("title-e3"));

  for (var i = 0; i < letters.length; i++) {
    tl.add(TweenLite.from(letters[i], 1, {
      y: "+=1000%"
    }, {
      ease: Back.easeOut.config(1.5),
      y: "100%"
    }));
  }
  //second title-
  //
  move_2 = TweenMax.to('title-span > tspan', 2,{opacity:0}, {
		opacity:"100%",
  //  x: "100%",
    display: 'block'
  });
  presentationClouds.push(document.getElementsByClassName("presentation-cloud"));

  //countes for clouds
  var countUpTop = 2;
  var countDown = 2;

  function elementMoveUp(elementItem) {
    countUpTop + 2;
    TweenMax.to(elementItem, 2, {
      top: countUpTop,
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

  if (presentationClouds == null) {} else {
    for (var i = 0; i < presentationClouds.length; i++) {
      //console.log('sds',clouds[i]);
      countMoveUp++;
      countMoveDown++;
      elementMoveDown(presentationClouds[i]);
    }
  }

  //console.log('hola',presentationClouds);
}
