"use strict";

const estadosPalanca = [-1, 0, 1, 2, 3, 4, 5, 6];
const nivelPresion = [0, 1, 2, 3];
const velocidadesCambioPalanca = [10, 20, 40, 60, 80];
const VELOCIDAD_MAXIMA = 120;
let mensaje = "";

/*$('body').on("keydown", function(e) { 
    if (e.which === 114) {
        this.setDireccionalIzq(true);
        console.log("Estamos girando a la Izquierda");
        console.log("Termino el giro a la Izquierda");
        this.setDireccionalIzq(false);
        e.preventDefault();
    } else if (e.which === 108){
        this.setDireccionalDer(true);
        console.log("Estamos girando a la Derecha");
        console.log("Termino el giro a la Derecha");
        this.setDireccionalDer(false);
    }
});*/

class Carro {
  constructor() {
    this._palanca = estadosPalanca[1];
    this._frenoPedal = false;
    this._frenoMano = true;
    this._clutch = nivelPresion[0];
    this._acelerador = nivelPresion[0];
    this._cabrilla = false;
    this._direccionalDer = false;
    this._direccionalIzq = false;
    this._velocidad = 0;
    this._interruptor = false;
    this._velocidadMaximaAlcanzada = 0;
  }

  //getter
  getInterruptor() {
    return this._interruptor;
  }
  getPalanca() {
    return this._palanca;
  }
  getFrenoPedal() {
    return this._frenoPedal;
  }
  getFrenoMano() {
    return this._frenoMano;
  }
  getClutch() {
    return this._clutch;
  }
  getAcelerador() {
    return this._acelerador;
  }
  getCabrilla() {
    return this._cabrilla;
  }
  getDireccionalDer() {
    return this._direccionalDer;
  }
  getDireccionalIzq() {
    return this._direccionalIzq;
  }
  getVelocidad() {
    return this._velocidad;
  }
  getVelocidadMaximaAlcanzada() {
    return this._velocidadMaximaAlcanzada;
  }

  //setter

  setInterruptor(interruptor) {
    this._interruptor = interruptor;
  }
  setPalanca(palanca) {
    this._palanca = palanca;
  }
  setFrenoPedal(frenoPedal) {
    this._frenoPedal = frenoPedal;
  }
  setFrenoMano(frenoMano) {
    this._frenoMano = frenoMano;
  }
  setClutch(clutch) {
    this._clutch = clutch;
  }
  setAcelerador(acelerador) {
    this._acelerador = acelerador;
  }
  setCabrilla(cabrilla) {
    this._cabrilla = cabrilla;
  }
  setDireccionalDer(direccionalDer) {
    this._direccionalDer = direccionalDer;
  }
  setDireccionalIzq(direccionalIzq) {
    this._direccionalIzq = direccionalIzq;
  }
  setVelocidad(velocidad) {
    this._velocidad = velocidad;
  }
  setVelocidad(velocidadMaximaAlcanzada) {
    this._velocidadMaximaAlcanzada = velocidadMaximaAlcanzada;
  }

  //////////
  interruptor(flag) {
    if (this.validarEstadoReposo) {
      this.setInterruptor(flag);
      mensaje = "El interruptor del carro esta: " +  (flag? " encendido" : " apagado");
    } else {
      mensaje = "Coloque el carro en neutro y el freno de mano";
    }
    return mensaje;
  }

  arrancar() {
    this.setClutch(nivelPresion[3]);
    this.setFrenoPedal(true);
    this.setFrenoMano(false);
    this.setPalanca(estadosPalanca[2]);
    this.setFrenoPedal(false);
    for (let i = 0; i < nivelPresion.length; i++) {
      this.setAcelerador(nivelPresion[i]);
      this.setClutch(nivelPresion[nivelPresion.length - 1 - i]);
    }
    return mensaje = ("Acelerador: " + this.getAcelerador() + "  Clutch: " + this.getClutch() + "   " + " El auto ya esta en movimiento");
  }

  cambiosAcelerar(palanca) {
    return estadosPalanca[estadosPalanca.indexOf(palanca) + 1];
  }

  cambiosFrenar(palanca) {
    console.log(" palanca" + palanca);
    console.log(
      "nueva palanca" + estadosPalanca[estadosPalanca.indexOf(palanca) - 1]
    );

    return estadosPalanca[estadosPalanca.indexOf(palanca) - 1];
  }

  cambioDeCambiosAcelerar() {
    for (let i = 0; i < nivelPresion.length; i++) {
      this.setClutch(nivelPresion[i]);
      this.setAcelerador(nivelPresion[nivelPresion.length - 1 - i]);
      console.log(
        "Acelerador: " + this.getAcelerador() + "  Clutch: " + this.getClutch()
      );
    }
    let palancaActual = this.getPalanca();
    this.setPalanca(this.cambiosAcelerar(this.getPalanca()));
    console.log(
      "Se hace el cambio de palanca en " +
      palancaActual +
      " a: " +
      this.getPalanca()
    );

    for (let i = 0; i < nivelPresion.length; i++) {
      this.setAcelerador(nivelPresion[i]);
      this.setClutch(nivelPresion[nivelPresion.length - 1 - i]);
      console.log(
        "Acelerador: " + this.getAcelerador() + "  Clutch: " + this.getClutch()
      );
    }
  }

  cambioDeCambiosFrenar() {
    for (let i = 0; i < nivelPresion.length; i++) {
      this.setClutch(nivelPresion[i]);
      this.setAcelerador(nivelPresion[nivelPresion.length - 1 - i]);
      console.log(
        "Acelerador: " + this.getAcelerador() + "  Clutch: " + this.getClutch()
      );
    }
    let palancaActual = this.getPalanca();
    this.setPalanca(this.cambiosFrenar(this.getPalanca()));
    console.log(
      "Se hace el cambio de palanca en " +
      palancaActual +
      " a: " +
      this.getPalanca()
    );

    for (let i = 0; i < nivelPresion.length; i++) {
      this.setAcelerador(nivelPresion[i]);
      this.setClutch(nivelPresion[nivelPresion.length - 1 - i]);
      console.log(
        "Acelerador: " + this.getAcelerador() + "  Clutch: " + this.getClutch()
      );
    }
  }

  cabrilla() { }

  giroIzqAuto() {
    this.setDireccionalIzq(true);
    console.log("Giro Izquierda");
    this.setDireccionalIzq(false);
    return "Giro izquierda";
  }
  /* Hacer una validación en el front
  giroIzqMan(){
      this.setDireccionalIzq(true);
      console.log("Giro izquierda");
      this.setDireccionalIzq(false);
  }*/

  giroDerAuto() {
    this.setDireccionalDer(true);
    console.log("Giro derecha");
    this.setDireccionalDer(false);
    return "Giro derecha";

  }

  /*giroDerMan(){
      this.setDireccionalDer(true);
      console.log("Giro Derecha");
      this.setDireccionalDer(false);
  }*/

  acelerar() {
    this.setAcelerador(nivelPresion[3]);
    let a = 0;
    let velocidadActual = 0;
    let aleatorio = 0;
    for (let i = 0; i <= VELOCIDAD_MAXIMA; i++) {
      if (
        i === velocidadesCambioPalanca[a] &&
        a < velocidadesCambioPalanca.length
      ) {
        this.cambioDeCambiosAcelerar();
        // console.log("Cambio (acelerar) cuando estaba en la velocidad de: " + velocidadesCambioPalanca[a]);
        //console.log("antes a: " + a);
        a++;
        //console.log("despues a: " + a);
      }
      aleatorio = this.generarNumAleatorio(30,1);
      if( aleatorio === 1){
        this.giroDerAuto();
      }else if(aleatorio === 2){
        this.giroIzqAuto();
      }
      velocidadActual = i;
      console.log("La velocidad es: " + velocidadActual);
    }
    return "El carro está acelerando";
  }

    generarNumAleatorio(max, min){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  frenar() {
    this.setAcelerador(nivelPresion[0]);
    this.setFrenoPedal(true);
    console.log("Comienza a frenar");
    let a = velocidadesCambioPalanca.length - 1;
    for (let i = VELOCIDAD_MAXIMA; i >= 10; i--) {
      //console.log("esto es a: " + a);
      if (i === velocidadesCambioPalanca[a]) {
        this.cambioDeCambiosFrenar();
        console.log(
          "Cambio (frenar) cuando estaba en la velocidad de: " +
          velocidadesCambioPalanca[a]
        );
        a--;
      }
      console.log("La velocidad es: " + i);
    }
    return "El carro está frenando";
  }

  paradas(numParadas) {
    console.log("Entro paradas" + numParadas);
    for (let i = 0; i <= numParadas; i++) {
      this.acelerar();
      this.frenar();
      this.cambiarAestadoReposo();
    }
  }

  estacionarias(flag) {
    this.getDireccionalDer(flag);
    this.getDireccionalIzq(flag);
    return "Se encienden las estacionarias";
  }

  cambiarAestadoReposo() {
    this.estacionarias(true);
    this.setClutch(nivelPresion[3]);
    this.setPalanca(estadosPalanca[1]);
    this.setFrenoPedal(true);
    return "Se queda en estado de reposo"
  }

  validarEstadoReposo() {
    return this.getPalanca() === estadosPalanca[1] && (this.getFrenoPedal() || this.getFrenoMano);
  }

  reversar() {
    if (this.validarEstadoReposo) {
      this.estacionarias(true);
      this.setClutch(nivelPresion[3]);
      this.setPalanca(estadosPalanca[0]);
      for (let i = 0; i < nivelPresion.length; i++) {
        this.setAcelerador(nivelPresion[i]);
        this.setClutch(nivelPresion[nivelPresion.length - 1 - i]);
        //console.log("Acelerador: " + this.getAcelerador() + "  Clutch: " + this.getClutch());
      }
      for (let i = 0; i < nivelPresion.length; i++) {
        this.setClutch(nivelPresion[i]);
        this.setAcelerador(nivelPresion[nivelPresion.length - 1 - i]);
        console.log(
          "Acelerador: " + this.getAcelerador() + "  Clutch: " + this.getClutch()
        );
      }
      return "Ya parqueo";
    } else {
      return "No se puede reversar en este momento, se requiere que el carro esté en neutro y en estado de reposo";
    }
  }
  apagar() { }
  velocidadAprox() { }
  velocidadMax() { }
}