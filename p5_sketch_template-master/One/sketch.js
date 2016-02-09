// just draws a circle

function setup() {
	// create a place to draw
	createCanvas(1280, 720);
	//noLoop();
	//background(27, 15, 27);
	background(16, 30, 69);
}


function draw() {
	// clear the background


	// set drawing styles
	/*stroke(255, 0, 0);
	fill(255, 255, 255);
	strokeWeight(10);

	// draw a circle
	ellipse(320, 180, 100, 100);
	ellipse(10, 180, 200, 200);*/
	stroke(random(148), 226, 255);
	stroke(148, random(226), 255);
	strokeWeight(random(0.5, 1));
	line(random(width), height, width, random(height));
	line(width, random(height), random(width), height);
}
