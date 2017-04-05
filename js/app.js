//http://scrollmagic.io/docs/index.html
window.addEventListener('load', init, false);
console.log('hola');

TweenMax.from(".cloud", 10, {xPercent: +100});



function init() {

    var controller = new ScrollMagic.Controller();

    var trigger1 = document.getElementById("trigger1");
    var animate1 = document.getElementById("animate1");
    let animate1Tween = TweenLite.to(animate1, 1, { color: "white" });

    var scene1 = new ScrollMagic.Scene({ triggerElement: trigger1 });
    scene1.setTween(animate1Tween); // trigger a TweenMax.to tween
    scene1.addIndicators({ name: "1 (duration: 1 second)" }); // add indicators (requires plugin)
    scene1.addTo(controller);

    var trigger2 = document.getElementById("trigger2");
    var animate2 = document.getElementById("animate2");
    let animate2Tween = TweenLite.to(animate2, 1, { color: "red" });

    var scene2 = new ScrollMagic.Scene({ triggerElement: trigger2, duration: 200 });
    scene2.setTween(animate2Tween); // the tween durtion can be omitted and defaults to 1
    scene2.addIndicators({ name: "2 (duration: 300 px)" });
    scene2.addTo(controller);

    scene2.on('enter', function (event) {
        console.log("Hit enter point of scene 1.");
    });

    scene2.on('leave', function (event) {
        console.log("Hit end point of scene 1.");
    });

    var trigger3 = document.getElementById("trigger3");
    var animate3 = document.getElementById("animate3");
    var animate4 = document.getElementById("animate4");

    // add multiple tweens, wrapped in a timeline.
    var timeline = new TimelineMax();
    var tween1 = TweenMax.to(animate3, 1, { color: "red" });
    var tween2 = TweenMax.to(animate4, 1, { color: "green" });
    timeline.add(tween1);
    timeline.add(tween2);

    var scene3 = new ScrollMagic.Scene({ triggerElement: trigger3 });
    scene3.setTween(timeline);
    scene3.addIndicators({ name: "3 (duration: 1s)" });
    scene3.addTo(controller);
}
