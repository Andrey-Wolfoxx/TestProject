'use strict';

let btnEnt = document.getElementById('btn');
let msg = document.getElementById('msg');


function getRandInt(fromNun, toNum) {
	let result = Math.round(Math.random() * (toNum - fromNun)) + fromNun;
	return result;
}

function exeRand() {
	let minId = document.getElementById('min');
	let maxId = document.getElementById('max');
	let min = +minId.value;
	let max = +maxId.value;
	if (typeof min !== 'number' || typeof max !== 'number' || isNaN(min) || isNaN(max) || 
		min > 1000 || max > 1000 || min >= max) {
		msg.innerHTML = 'Wrong imput! Try again';
		minId.value = '';
		maxId.value = '';

		document.getElementById('res').innerHTML = 'OwO';
		console.log('Error!');
		return 'Wrong imput!';
	}
	document.getElementById('res').innerHTML = getRandInt(min, max);
	msg.innerHTML = '';
	console.log('Done');
}

function handleKeyPress(e) {
	var enterButton = document.getElementById('btn');

	e = e || window.event;

	if (e.keyCode === 13) {
		enterButton.click();
		return false;
	}
}

var guessInputMin = document.getElementById("min");
guessInputMin.onkeypress = handleKeyPress;
var guessInputMax = document.getElementById("max");
guessInputMax.onkeypress = handleKeyPress;

btnEnt.onclick = function () {
	exeRand();
};



 