/* 
	Author: Apostolos Voulkidis
	Website: http://apovtx.eu
*/


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
			lineWidth = options.lineWidth || 0.2*radius,
			fontSize = options.fontSize || (radius/name.length * 2.2)+'px',
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
		context.fillText(name, X, Y+(radius*0.2));
}
