"use strict"

function imprimirDataEnPantalla(mensaje){
  document.getElementById('data').innerHTML += `<li>${mensaje}</li>`;
}

let ford = new Carro();

/*function imprimirDataEnPantalla(){
  let value = '';
  data.forEach(function (elemento, indice, array) {
    value += `<li class="list-group-item">${elemento}</tr>`;
    console.log(value);
  });
  document.getElementById('data').innerHTML = value;

};*/


// document.getElementByClassName('list-group-item').innerHTML = "vanesita"

function encender(){
  ford.interruptor(true);
}


function funcionPrincipal() {
  /*
  console.log("Encender: ");
  //data.push(ford.interruptor(true));
  //data.push(ford.arrancar());
  let destino = new Ruta();
  ford.paradas(destino.getNumParada());
  console.log("Encender: ");
  
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


}

function funcionRuta(){
let destino = new Ruta();
imprimirDataEnPantalla("Configuración del destino");
imprimirDataEnPantalla("Numero de paradas: " + destino.getNumParada());
imprimirDataEnPantalla("Distancia a recorrer: " + destino.getDistancia() + " km");
imprimirDataEnPantalla("Duración de la parada: " + destino.getDuracionParada() + " seg");
imprimirDataEnPantalla("Cada cuanto hace la parada: " + destino.cadaCuantoParada() + " km");
//Mandar por parametros sacados del timer a la funcion de calcular Tiempo Total
// imprimirDataEnPantalla("Tiempo total del viaje: " + destino.calcularTiempoTotal(260, 20) + " horas");
}

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