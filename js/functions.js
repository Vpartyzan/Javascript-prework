function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printCompImg(image) {	
	let img = document.createElement('img');
	img.src = image;
	img.id = 'game-img-c';
	document.getElementById('image-comp').appendChild(img);
}

function printPlayerImg(image) {	
	let img = document.createElement('img');
	img.src = image;
	img.id = 'game-img-p';
	document.getElementById('image-player').appendChild(img);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
	document.getElementById('game-img-p').remove();
	document.getElementById('game-img-c').remove();	
}