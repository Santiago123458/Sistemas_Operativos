let procesos=[]
class process{
    _proceso //el nombre del roceso
    _duracion //la duracion del proceso
    _llegada //la legada de el proceso
    _TComienzo //e tiempo en el que comenzo el proceso
    _fin // el timpo en el que finalizo el proceso
    _retorno // el tiempo de retorno del proceso
    _espera // el tiempo de espera del proceso

    //SE CREA EL CONSTUCTOR

    constructor (nombre= "sin nombre" , duracion= 0, llegada= 0, TComienzo= 0, fin= 0, retorno=0, espera=0 ){
        this._proceso= nombre;
        this._duracion= duracion;
        this._llegada= llegada;
        this._TComienzo= TComienzo;
        this._fin= fin;
        this._retorno= retorno;
        this._espera= espera;
    }
    //creamos los objetos
    set nombre_proceso (nombre){
        this._proceso = nombre.toUpperCase()
    } 
    set duracion (duracion){
        this._duracion = duracion
    }
    set llegada (llegada){
        this._llegada = llegada
    }
    set comienzo (TComienzo){
        this._TComienzo= TComienzo
    }
    set finalizar (fin){
        this._fin=fin
    }
    set retorno (retorno){
        this._retorno= retorno
    }
    set espera (espera){
        this._espera= espera
    }
    get nombre_proceso (){
        return this._proceso
    }
    get duracion (){
        return this._duracion
    }
    get llegada(){
        return this._llegada
    }
    get comienzo (){
        return this._TComienzo
    }
    get finalizar(){
        return this._fin
    }
    get retorno(){
        return this._retorno
    }
    get espera(){
        return this._espera
    }
    mostrarProceso(){
        console.log(`Soy un proceso con datos: ${this.nombre_proceso}, ${this.duracion}, ${this.llegada}`)
    }
}
