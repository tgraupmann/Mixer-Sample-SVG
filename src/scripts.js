window.addEventListener('load', function initMixer() {
  // Move the video by a static offset amount
  const offset = 50;
  mixer.display.moveVideo({
    top: offset,
    bottom: offset,
    left: offset,
    right: offset,
  });

  /// INLINE SVG

  function accessInlineSVG() {
    var svgObject = document.getElementById('svgSampleInline');
    if (svgObject == undefined) {
      console.error('accessInlineSVG: Inline SVG: Object cannot be accessed!');
      return;
    }

    var svgDoc = svgObject.contentDocument;
    if (svgDoc == undefined) {
      console.error('accessInlineSVG: Inline SVG: Content Document cannot be accessed!');
      return;
    }
    var leds = svgDoc.getElementsByClassName('led');
    if (leds.length == 0) {
      console.error('accessInlineSVG: Inline SVG: Led cannot be accessed!');
      return;
    }
    console.log('accessInlineSVG: Inline SVG: leds', leds)
    // change color never gets called
    leds[0].setAttribute("style", "fill: rgb(0,0,0)");
  }

  function setupInlineSVG() {
    var svgObject = document.getElementById('svgSampleInline');
    if (svgObject == undefined) {
      console.error('setupInlineSVG: Inline SVG: Object cannot be accessed!');
      return;
    }

    //load event doesn't fire because it's already loaded, probably
    svgObject.addEventListener("load",function() {
      console.log('setupInlineSVG: Inline SVG: load event');
      accessInlineSVG();
    }, false);
  }


  /// REFERENCED SVG

  function accessReferenceSVG() {
    var svgObject = document.getElementById('svgSampleRef');
    if (svgObject == undefined) {
      console.error('accessReferenceSVG: Reference SVG: Object cannot be accessed!');
      return;
    }

    var svgDoc = svgObject.contentDocument;
    if (svgDoc == undefined) {
      console.error('accessReferenceSVG: Reference SVG: Content Document cannot be accessed!');
      return;
    }
    var leds = svgDoc.getElementsByClassName('led');
    if (leds.length == 0) {
      console.error('accessReferenceSVG: Reference SVG: Led cannot be accessed!');
      return;
    }
    console.log('accessReferenceSVG: Reference SVG: leds', leds)
    // change color to blue
    leds[0].setAttribute("style", "fill: rgb(0,0,255)");
  }

  function setupReferenceSVG() {
    var svgObject = document.getElementById('svgSampleRef');
    if (svgObject == undefined) {
      console.error('setupReferenceSVG: Reference SVG: Object cannot be accessed!');
      return;
    }

    svgObject.addEventListener("load",function() {
      console.log('setupReferenceSVG: Reference SVG: load event');
      accessReferenceSVG();
    }, false);
  }


  /// DYNAMIC SVG

  function accessDynamicSVG() {
    var svgObject = document.getElementById('svgSampleRef');
    if (svgObject == undefined) {
      console.error('accessDynamicSVG: Dynamic SVG: Object cannot be accessed!');
      return;
    }

    var svgDoc = svgObject.contentDocument;
    if (svgDoc == undefined) {
      console.error('accessDynamicSVG: Dynamic SVG: Content Document cannot be accessed!');
      return;
    }
    var leds = svgDoc.getElementsByClassName('led');
    if (leds.length == 0) {
      console.error('accessDynamicSVG: Dynamic SVG: Led cannot be accessed!');
      return;
    }
    console.log('accessDynamicSVG: Dynamic SVG: leds', leds)
    // change color to white
    leds[0].setAttribute("style", "fill: rgb(255,255,255)");
  }


  // TEST INLINE SVG
  setupInlineSVG();
  function testInlineSVG() {
    console.log('Accessing Inline SVG in 3...2...1');
    setTimeout(function() {
      var svgObject = document.getElementById('svgSampleInline');
      if (svgObject != undefined) {
        accessInlineSVG();
      }
    }, 3000);
  }
  testInlineSVG();


  // TEST REFERENCE SVG
  setupReferenceSVG();
  function testReferenceSVG() {
    console.log('Showing Reference SVG in 3...2...1');
    setTimeout(function() {
      var svgObject = document.getElementById('svgSampleRef');
      if (svgObject != undefined) {
        svgObject.style = "";
      }
    }, 3000);
  }
  testReferenceSVG();


  // TEST DYNAMIC SVG
  function testDynamicSVG() {
    var svgObject = document.getElementById('svgSampleDynamic');
    if (svgObject == undefined) {
      console.error('testDynamicSVG: Reference SVG: Object cannot be accessed!');
      return;
    }

    // never gets called
    svgObject.addEventListener("load",function() {
      console.log('testDynamicSVG: Dynamic SVG: load event');

    }, false);

    var myCircle = document.createElementNS("http://www.w3.org/2000/svg","circle"); //to create a circle. for rectangle use "rectangle"
    myCircle.setAttributeNS(null,"id","mycircle");
    myCircle.setAttributeNS(null,"class","led");
    myCircle.setAttributeNS(null,"cx",100);
    myCircle.setAttributeNS(null,"cy",100);
    myCircle.setAttributeNS(null,"r",50);
    myCircle.setAttributeNS(null,"fill","cyan");
    myCircle.setAttributeNS(null,"stroke","none");

    svgObject.appendChild(myCircle);

    accessDynamicSVG();

    // regular DOM
    svgObject.children[0].setAttribute("style", "fill: rgb(255,0,255)")
    console.log('testDynamicSVG', 'class name', svgObject.children[0].className)
  }
  testDynamicSVG();


  mixer.isLoaded();
});
