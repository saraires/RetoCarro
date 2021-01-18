"use strict"

/*let contador = 0
let imprimirDataEnPantalla = setInterval((mensaje) => { 
    document.getElementById('data').innerHTML += `<li>${mensaje}</li>`;
    if (contador == 1){
      clearInterval(imprimirDataEnPantalla);
    }
    contador++;
}, 1000);*/


function imprimirDataEnPantalla(mensaje) {
  document.getElementById('data').innerHTML += `<li>${mensaje}</li>`;
}

let ford = new Carro();
let destino = new Ruta();

function prueba() {
  var list = [1, 2, 3, 4, 5];
  for (let i = 0, p = Promise.resolve(); i < 10; i++) {
    console.log("ESTO ES P: ... " + Promise.resolve());
    console.log("SE LLAMA LA FUNCION PRUEBA" + i);
    p = p.then(_ => new Promise(resolve =>
      setTimeout(function () {
        console.log("ESTO ES P: ... " + p);
        console.log(i);
        resolve();
      }, Math.random() * 1000)
    ));
  }
}


/*function imprimirDataEnPantalla(){
  let value = '';
  data.forEach(function (elemento, indice, array) {
    value += `<li class="list-group-item">${elemento}</tr>`;
    console.log(value);
  });
  document.getElementById('data').innerHTML = value;

};*/


// document.getElementByClassName('list-group-item').innerHTML = "vanesita"

function encender() {
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

function funcionRuta() {

  imprimirDataEnPantalla("Configuración del destino");
  imprimirDataEnPantalla("Numero de paradas: " + destino.getNumParada());
  imprimirDataEnPantalla("Distancia a recorrer: " + destino.getDistancia() + " km");
  imprimirDataEnPantalla("Duración de la parada: " + destino.getDuracionParada() + " seg");
  imprimirDataEnPantalla("Cada cuanto hace la parada: " + destino.cadaCuantoParada() + " km");
  //Mandar por parametros sacados del timer a la funcion de calcular Tiempo Total
}

function funcionParadas() {
  return destino.getNumParada();
}

function funcionTiempoParadas() {
  console.log("Destino.getduraciontiempoparadas  " + destino.getDuracionParada())
  return destino.getDuracionParada() * 1000;
}

function resumenDelViaje(){
  let contador = 0;
  for(let i = 0; i <= 120; i++){
    contador += i;
  }
  let a = contador/120

  console.log("ESTO ES contador: ............  " + contador);
  console.log("ESTO ES A: ............  " + a);
  
  imprimirDataEnPantalla("RESUMEN DEL VIAJE")
  imprimirDataEnPantalla("La velocidad maxima alcanzada fue de 120km/h");
  imprimirDataEnPantalla("La velocidad promedio a la que viajo el carro fue de: " + a + "km/h");
  imprimirDataEnPantalla("Tiempo total del viaje: " + destino.calcularTiempoTotal(120, 7) + " horas");
}



/*
let ford = new Carro();

console.log("Encender: ");wx
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