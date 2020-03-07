// -------------------------------------------------------------------------------------------------
// Jam-Es.com Website - © Copyright 2020 - Jam-Es.com
// Licensed under the MIT License (MIT). See LICENSE in the GitHub repository for license information.
// -------------------------------------------------------------------------------------------------

// Change the following variables to customize the appearance of the particles
var numParticles = window.innerWidth / 12;
var maxSpeed = 1.5;
var minSpeed = 0.8;
var maxSize = 5;
var minSize = 3;
var maxOpacity = 0.8;
var minOpacity = 0.2;
var canvasId = "snowcanvas";

// If the following is true, the canvas resolution will be set to match the full viewport width and height.
var fixCanvasResolution = true;

var snow_particles = [];

function Redraw() {
	var c = document.getElementById(canvasId);
	var ctx = c.getContext("2d");
	ctx.clearRect(0,0,c.width,c.height);
	for (i = 0; i < snow_particles.length; i++) {
		var newYPos = snow_particles[i].yPos + snow_particles[i].speed;
		if (newYPos > window.innerHeight) {
			newYPos = getRandomInt(-100,-10);
			snow_particles[i].xPos = getRandomInt(0, window.innerWidth);
			snow_particles[i].speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
			snow_particles[i].opacity = Math.random() * (maxOpacity - minOpacity) + minOpacity;
			snow_particles[i].size = Math.random() * (maxSize - minSize) + minSize;
		}
		snow_particles[i].yPos = newYPos;
		ctx.beginPath();
		ctx.arc(snow_particles[i].xPos, newYPos, snow_particles[i].size, 0, 2 * Math.PI);
		ctx.fillStyle = "rgba(200, 200, 200, " + snow_particles[i].opacity + ")";
		ctx.fill();
	}

	for (i = 0; i < snow_particles.length; i++) {
		for (j = 0; j < snow_particles.length; j++) {
			if (snow_particles[i].xPos - snow_particles[j].xPos >= 94) {
				continue;
			}
			if (snow_particles[i].yPos - snow_particles[j].yPos >= 94) {
				continue;
			}
			var dist = Math.pow(snow_particles[i].xPos - snow_particles[j].xPos,2) + Math.pow(snow_particles[i].yPos - snow_particles[j].yPos,2);
			if (dist < 9000) {
				var opacity = ((snow_particles[i].opacity + snow_particles[j].opacity)/2) * (1-(Math.pow(dist,0.5) / 94));
				ctx.beginPath();
				ctx.moveTo(snow_particles[i].xPos, snow_particles[i].yPos);
				ctx.lineTo(snow_particles[j].xPos, snow_particles[j].yPos);
				ctx.strokeStyle = "rgba(200, 200, 200, " + opacity + ")";
				ctx.stroke();
			}
		}
	}
}

function InitPoints() {
	for (i = 0; i < numParticles; i++) {
		var startX = getRandomInt(0, window.innerWidth);
		var startY = getRandomInt(0, window.innerHeight);
		var speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
		var opacity = Math.random() * (maxOpacity - minOpacity) + minOpacity;
		var size = Math.random() * (maxSize - minSize) + minSize;

		snow_particles.push({
			"xPos": startX,
			"yPos": startY,
			"speed": speed,
			"opacity": opacity,
			"size": size,
		});
	}
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}