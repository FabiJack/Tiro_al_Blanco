
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
	
pincel.fillStyle = "lightgrey";
pincel.fillRect(0,0,600,400);

function limpiaPantalla() {

	pincel.clearRect(0,0,600,400);

}

function dibujarCirculo(x,y,radio,color) {

	pincel.fillStyle = color;
	pincel.beginPath();
	pincel.arc(x,y,radio,0,2*Math.PI);
	pincel.fill();

}

function dibujarBlanco(x, y, radio) {

	dibujarCirculo(x, y, radio + 20, "red");	
	dibujarCirculo(x, y, radio + 10, "white");
	dibujarCirculo(x, y, radio, "red");

}

function sortearPosicion(limite) {

	return Math.floor(Math.random()*limite);

}

function sortearBlanco() {

	limpiaPantalla();
	var xRandom = sortearPosicion(600);
	var yRandom = sortearPosicion(400);
	var radio = 10;
	dibujarBlanco(xRandom, yRandom, radio);

}

setInterval(sortearBlanco,1000);
