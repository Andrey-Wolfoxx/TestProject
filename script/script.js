'use strict';

let btnEnt = document.getElementById('btn'),
	msg = document.getElementById('msg'),
	minId = document.getElementById('min'),
	maxId = document.getElementById('max'),
	res = document.getElementById('res');

function getRandInt(fromNun, toNum) {
	let result = Math.round(Math.random() * (toNum - fromNun)) + fromNun;
	return result;
}

function exeRand() {
	let min = +minId.value,
		max = +maxId.value;
	
	if (min >= 0 && min < 1000 && max > 0 && max <= 1000 && min < max && Number.isInteger(min) && Number.isInteger(max)) {
		res.innerHTML = getRandInt(min, max);
		msg.innerHTML = '';
		return false;
	}

	msg.innerHTML = 'Wrong imput! Try again';
	minId.value = '';
	maxId.value = '';
	res.innerHTML = 'OwO';
	return false;
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