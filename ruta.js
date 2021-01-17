"use strict"

class Ruta{
    constructor(){
        // numParada, distancia, duracionParada, tiempoTotal
        this._numParada = this.generarNumAleatorio(3,1);
        this._distancia = this.generarNumAleatorio(500,10);
        this._duracionParada = this.generarNumAleatorio(5, 1);
        this._cadaCuantoParada = this.cadaCuantoParada();
        this._tiempoTotal = 0;
    }

    //getter
    getNumParada(){
        return this._numParada;
    }
    getDistancia(){
        return this._distancia;
    }
    getDuracionParada(){
        return this._duracionParada;
    }
    getCadaCuantoParada(){
        return this._cadaCuantoParada;
    }
    getTiempoTotal(){
        return this._tiempoTotal;
    }

    //setter
    setNumParada(numParada){
        this._numParada = numParada;
    }
    setDistancia(distancia){
        this._distancia = distancia;
    }
    setDuracionParada(duracionParada){
        this._duracionParada = duracionParada;
    }
    setCadaCuantoParada(cadaCuantoParada){
        this._cadaCuantoParada = cadaCuantoParada;
    }
    setTiempoTotal(tiempoTotal){
        this._tiempoTotal = tiempoTotal;
    }


    generarNumAleatorio(max, min){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    cadaCuantoParada(){
        return Math.floor(this.getDistancia()/this.getNumParada());
    }
    calcularTiempoTotal(velocidad, tiempoParqueo){
        let tiempoEnSeg = ((this.getDistancia()/velocidad)*3600) + (this.getNumParada()*this.getDuracionParada()) + (tiempoParqueo);
        let preTiempoTotal = tiempoEnSeg/3600
        preTiempoTotal = preTiempoTotal.toFixed(2);
        console.log("Tiempo en segundos: " + tiempoEnSeg);
        console.log("Pre tiempo total: " + preTiempoTotal);
        this.setTiempoTotal(preTiempoTotal);
        return this.getTiempoTotal();

    }

}