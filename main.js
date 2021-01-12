"use strict"

let data = [];

document.write

function imprimirDataEnPantalla(){
  let value = '';
  data.forEach(function (elemento, indice, array) {
    value += `<li class="list-group-item">${elemento}</tr>`;
    console.log(value);
  });
  document.getElementById('data').innerHTML = value;

};


// document.getElementByClassName('list-group-item').innerHTML = "vanesita"

function funcionPrincipal() {

  let ford = new Carro();
  console.log("Encender: ");
  data.push(ford.interruptor(true));
  data.push(ford.arrancar());
  let destino = new Ruta();
  ford.paradas(destino.getNumParada());
  console.log("Encender: ");
  
  imprimirDataEnPantalla();
  ford.interruptor();
  console.log("Arrancar: ");
  ford.arrancar();
  console.log("Giro: ");
  ford.cabrilla();
  console.log("Cambio de cambios: ");
  //ford.cambioDeCambiosAcelerar();
  console.log("Acelerador: ");
  ford.acelerar();
  console.log("Frenar: ");
  ford.frenar();
  console.log("Paradas: ");

  ford.paradas();
  console.log("h " + ford.cambiosFrenar(5));
  console.log("Reversar ");
  ford.reversar();


}

funcionPrincipal();

let destino = new Ruta();
console.log("Configuración del destino");
console.log("Numero de paradas: " + destino.getNumParada());
console.log("Distancia a recorrer: " + destino.getDistancia());
console.log("Duración de la parada: " + destino.getDuracionParada());
console.log("Cada cuanto parada: " + destino.cadaCuantoParada() + " km");
console.log("Tiempo total del viaje: " + destino.calcularTiempoTotal(260, 20) + " horas");

/*
let ford = new Carro();

console.log("Encender: ");
ford.interruptor();
console.log("Arrancar: ");
ford.arrancar();
console.log("Giro: ");
ford.cabrilla();
console.log("Cambio de cambios: ");
//ford.cambioDeCambiosAcelerar();
console.log("Acelerador: ");
ford.acelerar();
console.log("Frenar: ");
ford.frenar();
console.log("Paradas: ");

ford.paradas();
console.log("h " + ford.cambiosFrenar(5));
console.log("Reversar ");
ford.reversar();*/