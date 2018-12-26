$(function () {
	$('.text-wrapper h3,.home-info .info-wrapper, .about-info .info-wrapper, .work-box').css({
		opacity: 0,
		overflow:'hidden'
	});
	// init controller
  var scrollmagic = new ScrollMagic.Controller({
    addIndicators: false,

    globalSceneOptions: {
      //triggerHook: 'onLeave'
      offset: 0 // trigger element before this height
    }
  });

  var sceneone = new ScrollMagic.Scene({
    // starting scene, when reaching this element
    triggerElement: '.home-text',
    // pin the element for a total of 400px
		duration: $('.home-text').outerHeight()
  });
  var scenetwo = new ScrollMagic.Scene({
    // starting scene, when reaching this element
    triggerElement: '.about-info',
    // pin the element for a total of 400px
		duration: $('.about-info').outerHeight()
  });
  var scenethree = new ScrollMagic.Scene({
    // starting scene, when reaching this element
    triggerElement: '#work-with-me',
    // pin the element for a total of 400px
		duration: $('#work-with-me').outerHeight()
  });

  // Add Scene to ScrollMagic Controller
  scrollmagic.addScene([sceneone, scenetwo, scenethree]);

  sceneone.on('enter', function(event) {
    //console.log("Scene entered.");
    var timeline = new TimelineMax();

    timeline.to('.text-wrapper h3', 0.3,{
      opacity: 1,
      ease: Linear.easeNone
		}).to('.home-info .info-wrapper', 0.4, {
			opacity: 1,
      ease: Linear.easeNone
		});
	});

	scenetwo.on('enter', function(event) {
    //console.log("Scene entered.");
    var timeline = new TimelineMax();

    timeline.to('.about-info .info-wrapper', 0.4, {
			opacity: 1,
      ease: Linear.easeNone
		});
	});
	scenethree.on('enter', function(event) {
    //console.log("Scene entered.");
    var timeline = new TimelineMax();

    timeline.staggerTo('.work-box', 0.4, {
			opacity: 1,
      ease: Linear.easeNone
		},0.2);
	});
});
