let smallBlock;
let bigBlock;
let clack;
let countPI = 0
const timeSteps = 1000;


function preload() {
	// clack = loadSound('..sounds/clack.wav');
}

function setup() {
	createCanvas(600, 500);
	smallBlock = new Block(100, 20, 0, 1)
	bigBlock = new Block(200, 150, -0.1, 100000000)
}

function draw() {
	background(100);
	for (let i = 0; i < timeSteps; i++) {
		if (smallBlock.collide(bigBlock)) {
			const v1 = smallBlock.bounce(bigBlock);
			const v2 = bigBlock.bounce(smallBlock);
			smallBlock.velocity = v1;
			bigBlock.velocity = v2;
			countPI += 1

		}
		if (smallBlock.hitWall()) {
			smallBlock.velocity *= -1;
			countPI += 1

		}
		console.log(countPI)
		smallBlock.update();
		bigBlock.update();
	}
	smallBlock.render();
	bigBlock.render();
}