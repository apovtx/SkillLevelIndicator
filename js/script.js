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




