//http://scrollmagic.io/docs/index.html
window.addEventListener('load', init, false);
function init() {
    var controller = new ScrollMagic.Controller();
    var trigger1 = document.getElementById("trigger1");
    var animate1 = document.getElementById("animate1");
    let animate1Tween = TweenLite.to(animate1, 1, { color: "white" });

		//first scene.
    var scene1 = new ScrollMagic.Scene({ triggerElement: trigger1 });
    scene1.setTween(animate1Tween); // hace que aparezca el animate1Tween.
    scene1.addIndicators({ name: "1 (duration: 1 second)" }); // add indicators (requires plugin)
    scene1.addTo(controller);

		//Second scene.
    var trigger2 = document.getElementById("trigger2");
    var animate2 = document.getElementById("animate2");
		var clouds =  document.getElementsByClassName("cloud");

		//Animation of popcorn.
		var cloudTween = TweenLite.from(clouds, 10, {transformOrigin: "50% 50%",y: +100,ease:Power1.easeInOut},"bounce");

    var scene2 = new ScrollMagic.Scene({ triggerElement: trigger2 });
    scene2.setTween(cloudTween); // Start the clouds animation.
    scene2.addIndicators({ name: "2 (duration: 300 px)" });
    scene2.addTo(controller);
	
}
