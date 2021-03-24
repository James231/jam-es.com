// -------------------------------------------------------------------------------------------------
// Jam-Es.com Website - © Copyright 2020 - Jam-Es.com
// Licensed under the MIT License (MIT). See LICENSE in the GitHub repository for license information.
// -------------------------------------------------------------------------------------------------

window.onload = function() {
	document.querySelectorAll('.shake-vertical').forEach(function (item) {
		item.animate([
			{top: '0'},
			{top: '10px'},
			{top: '0'}
			],{
				duration: 700,
				iterations: Infinity
			});
	});

	if (fixCanvasResolution) {
		var c = document.getElementById(canvasId);
		c.width = window.innerWidth;
		c.height = window.innerHeight;
	}

	InitPoints();

	// running at 50 frames per second
	setInterval(Redraw, 20);
}