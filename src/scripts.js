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
  }

  function setupReferenceSVG() {
    var svgObject = document.getElementById('svgSampleRef');
    if (svgObject == undefined) {
      console.error('setupReferenceSVG: Reference SVG: Object cannot be accessed!');
      return;
    }

    //load event doesn't fire because it's already loaded, probably
    svgObject.addEventListener("load",function() {
      console.log('setupReferenceSVG: Reference SVG: load event');
      accessReferenceSVG();
    }, false);
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


  mixer.isLoaded();
});
