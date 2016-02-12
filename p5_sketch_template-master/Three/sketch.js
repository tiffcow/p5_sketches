var dim;

function preload() {
  sound = loadSound('assets/RaspberryBeat.wav');
}

function setup() {
  sound.setVolume(1.0);
  sound.play();
  var cnv = createCanvas(1280, 720);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();

  dim = width / 2;
  colorMode(HSB, 360, 100, 100);
  ellipseMode(RADIUS);
}

function draw() {
  background('#45211D');


  var spectrum = fft.analyze();
  noStroke();

  fill(random(0, 150), 230, 150, random(50, 80));
  for (var i = 0; i < spectrum.length; i++) {
    var x = map(i, 0, spectrum.length * 0.2, 0, width);

    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x * random(1, 5), height, width / spectrum.length * random(1, 7), h);
    fill(0, random(200), 150, random(10, 50));
    rect(x, height, width / spectrum.length * random(2, 6), h);

  }
  // for (var x = 0; x <= width; x += dim) {
  //   drawGradient(x, height / 2);
  // }

  // var waveform = fft.waveform();
  // noFill();
  // beginShape();
  // stroke(255, 0, 0); // waveform is red
  // strokeWeight(random(1, 5));
  // for (var i = 0; i < waveform.length; i++) {
  //   var x = map(i, 0, waveform.length, 0, width);
  //   var y = map(waveform[i], -1, 1, 0, height);
  //   vertex(x, y);
  // }
  // endShape();

  //text('click to play/pause', 4, 10);
}

// fade sound if mouse is over canvas
// function drawGradient(x, y) {
//   var radius = dim / 2;
//   var h = random(0, 360);
//   for (var r = radius; r > 0; --r) {
//     fill(h, 90, 90);
//     ellipse(spectrum[i], y, r, r);
//     h = (h + 1) % 360;
//   }
// }

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}
// var frequency = 220;
//
// function setup() {
//   createCanvas(640, 360, WEBGL);
//
//   carrier = new p5.Oscillator('sine');
//   carrier.amp(1); // set amplitude
//   carrier.freq(220); // set frequency
//   carrier.start(); // start oscillating
// }
//
// function draw() {
//   frequency += random(-10, 10); // vary frequency using brownian motion
//   carrier.freq(frequency);
//   /*background(0);
//   ambientLight(random(255), 255, random(255));
//   ambientMaterial(400);
//   sphere(400);*/
// }
