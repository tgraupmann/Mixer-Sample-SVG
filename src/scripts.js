window.addEventListener('load', function initMixer() {
  // Move the video by a static offset amount
  const offset = 50;
  mixer.display.moveVideo({
    top: offset,
    bottom: offset,
    left: offset,
    right: offset,
  });

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


  // TEST INLINE SVG
  console.log('Showing Inline SVG in 3...2...1');
  setupInlineSVG();
  setTimeout(function() {
    var svgObject = document.getElementById('svgSampleInline');
    if (svgObject != undefined) {
      svgObject.style = "";
      accessInlineSVG();
    }
  }, 3000);


  mixer.isLoaded();
});
