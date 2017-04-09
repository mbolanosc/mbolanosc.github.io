//http://scrollmagic.io/docs/index.html
window.addEventListener('load', init, false);
function init() {
    var controller_Scroller= new ScrollMagic.Controller();
    var trigger1 = document.getElementById("trigger1");
    var animate1 = document.getElementById("animate1");

		//first scene.
    var scene1 = new ScrollMagic.Scene({ triggerElement: trigger1 });
    scene1.addTo(controller_Scroller);

		//Second scene. CLOUDS

		var clouds =  document.getElementsByClassName("cloud");

		//Animation of popcorn.
		//hacer una despues de otra.
		var cloudTween = TweenLite.from(clouds, 2.5, {tease: Bounce.easeOut, y: "100%"});

    var scene2 = new ScrollMagic.Scene({ triggerElement: trigger2 });
    scene2.setTween(cloudTween); // Start the clouds animation.
    scene2.addTo(controller_Scroller);

		//smoke.
		//sun.
		//clementine eyes.

}


//notes
//  //scene1.setTween(animate1Tween); // hace que aparezca el animate1Tween.
  //scene1.addIndicators({ name: "1 (duration: 1 second)" }); // add indicators (requires plugin)
  //    //let animate1Tween = TweenLite.to(animate1, 1, { color: "white" });
  //      //var trigger2 = document.getElementById("trigger2");
    //var animate2 = document.getElementById("animate2");
    //    //scene2.addIndicators({ name: "2 (duration: 300 px)" });
