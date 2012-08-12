/* 
	Author: Apostolos Voulkidis
	Website: http://apovtx.eu
*/

window.onload = initialize();

function initialize() {
	var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
	var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 70;
	
	SkillIndicator(context, 
		{
			X: canvas.width / 2,
			Y: canvas.height / 2,
			radius: 70,
			name: 'CSS'
			
		});
	SkillIndicator(context, 
		{
			X: canvas.width / 5,
			Y: canvas.height / 2,
			radius: 70,
			name: 'JS',
			level: 75,
			color: '#8EDddd'
			
		});
	SkillIndicator(context, 
		{
			X: canvas.width-(canvas.width/5),
			Y: canvas.height / 2,
			radius: 70,
			name: 'HTML5',
			level: 75,
			color: '#8EDddd',
			fontSize: '28pt'
		});		
}

function SkillIndicator(context, options) {
		var options = options || {};

		if(typeof context == 'undefined') {
			return undefined;
		}
		
		var color = options.color || "#8ED6FF",
			borderColor = options.borderColor|| "#000", 
			X = options.X || 1,
			Y = options.Y || 1,
			level = options.level || 50,
			name = options.name || "canvas",
			radius = options.radius || 70,
			lineWidth = options.lineWidth || 15,
			fontSize = options.fontSize || '35pt',
			font = options.font || "italic " + fontSize + " Calibri",
			fontColor = options.fontColor || "white";
		
		context.beginPath();
		context.arc(X, Y, radius, 0, 2 * Math.PI, false);
		context.fillStyle = color;
		context.fill();
    
		context.beginPath();
		context.arc(X, Y, radius-lineWidth/2, 0, level/50 * Math.PI, false);
		context.lineWidth = lineWidth;
		context.strokeStyle = borderColor;
		context.stroke();
		
		context.font = font;
		context.textAlign = 'center';
		context.fillStyle = fontColor;
		context.fillText(name, X, Y+(radius*0.20));
}



