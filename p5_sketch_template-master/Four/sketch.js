function setup() {
  createCanvas(1280, 720);
  colorMode(RGB, 255);
  background(48, 46, 51);
  noStroke();
}

function draw() {
  var r = min(random(0, 400));
  x = random(0, 1600);
  y = random(0, 800);
  R = random(252, 250);
  G = random(154, 250);
  B = random(193, 250);
  H = random(0, 50);
  J = random(142, 250);
  K = random(155, 250);
  L = random(232, 250);


  fill(R, G, B, H);
  fill(J, K, L, H);

  ellipse(x, y, r, r);

}
