function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mariojump = loadSound("jump.wav");
	mariocoin = loadSound("coin.wav");
	mariogameover = loadSound("gameover.wav");
	mariokick = loadSound("kick.wav");
	mariodie = loadSound("mariodie.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	
	poseNet = ml5.poseNet(video, model_loaded);
	poseNet.on('pose', got_poses);
}

function draw() {
	game();
}

function got_poses(results) {
	if (results.length > 0) {
		console.log(results);
		noseX = results[0].pose.nose.x
		noseY = results[0].pose.nose.y
	console.log(noseX);
	}
}

function model_loaded() {
	console.log(model_loaded);
}



