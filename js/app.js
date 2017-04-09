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
    var timeline_1 = new TimelineMax({delay:10});
    function clouds() {
      //cada id meterlo en un array y con un for
      //recorrer cada uno de los obj, y incrementarle el tween 3 #.
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
        //console.log(clouds[i]);
        var cloudTween = TweenLite.from(clouds[i],count_Clouds,{ease:Back.easeOut.config(1.5), y: "100%"});
      }
      console.log('CONTADOR DE NUBES', count_Clouds);
    }
    
		//Animation of popcorn.
		//hacer una despues de otra.

    var scene2 = new ScrollMagic.Scene({ triggerElement: trigger2 });
    scene2.setTween(clouds); // Start the clouds animation.
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
