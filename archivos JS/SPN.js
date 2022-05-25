(() => {
    let procesos = []
    class Proceso{
        _nombre
        _llegada
        _duracion
        _ciclo_inicial
        _ciclo_final
        constructor(nombre_proceso="sin nombre",ciclo_llegada=0, Tiempo_ejecucion=0 ,ciclo_inicial=0, ciclo_final=0){
            this._llegada = ciclo_llegada
            this._duracion = Tiempo_ejecucion
            this._nombre = nombre_proceso
            this._ciclo_inicial = ciclo_inicial
            this._ciclo_final = ciclo_final
        }
        set nombre(nombre_proceso){
            this._nombre = nombre_proceso
        }
        set llegada(ciclo_llegada){
            this._llegada = ciclo_llegada
        }
        set duracion(Tiempo_ejecucion){
            this._duracion = Tiempo_ejecucion
        }
        set ciclo_inicial(ciclo_inicial){
            this._ciclo_inicial = ciclo_inicial
        }
        set ciclo_final(ciclo_final){
            this._ciclo_final = ciclo_final
        }
        get nombre (){
            return this._nombre
        }
        get llegada(){
            return this._llegada
        }
        get duracion (){
            return this._duracion
        }
        get ciclo_inicial(){
            return this._ciclo_inicial
        }
        get ciclo_final(){
            return this._ciclo_final
        }
    }
    // ORGANIZACION DE PROCESOS
    const organizarProcesos = () => {
        procesos = procesos.sort(function(a, b){
            return a._llegada - b._llegada
        })
    }
    
})