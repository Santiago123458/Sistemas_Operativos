(() => {
    // Almacena los proceso ingresados por el usuario
    let procesos = [] 

    // Clase para crear los procesos 
    class Proceso{

        _nombre = '' //A , B ....
        _tiempoTotal = 0 // Tiempo total que tomo el proceso para ejecutarse (tiempo espera y trabajo util)
        _duracionProceso = 0 // Tiempo que necesita el proceso para ejecutarse [ticks]
        _llegada = 0 // Instante del tiempo en el que llega el proceso [ticks]
        _penalizacion = 0 //
        _tiempoEspera = 0 // tiempo que espera el proeso
        _inicio = 0 // Cunado inicia a ejecutarse el proceso
        _fin = 0 // Cuando finaliza de ejecutarse el proceso 

        constructor(nombre = 'Sin nombre', tiempoTotal = 0,  duracionProceso = 0, llegada = 0, penalizacion = 0, tiempoEspera = 0, inicio = 0, fin = 0 ){
            this._nombre = nombre
            this._tiempoTotal = tiempoTotal
            this._duracionProceso = duracionProceso
            this._llegada = llegada
            this._penalizacion = penalizacion
            this.tiempoEspera = tiempoEspera
            this._inicio = inicio
            this._fin = fin
        }

        set nombre (nombre){
            this._nombre = nombre.toUpperCase()
        } 

        set tiempoTotal(tiempoTotal){
            this._tiempoTotal = tiempoTotal
        }
        
        set duracionProceso (duracionProceso){
            this._duracionProceso = duracionProceso
        }

        set llegada(llegada){
            this._llegada = llegada
        }

        set penalizacion(penalizacion){
            this._penalizacion = penalizacion
        }

        set tiempoEspera(tiempoEspera){
            this._tiempoEspera = tiempoEspera
        }

        set inicio(inicio){
            this._inicio = inicio
        }

        set fin(fin){
            this._fin = fin
        }

        get nombre(){
            return this._nombre
        }

        mostrarProceso(){
            console.log(`Soy un proceso con datos: ${this.nombre}, ${this.activo}, ${this.duracion}, ${this.llegada}`)
        }
    
    }
    
    // Organiza los procasos por orden de llegada
    const organizarProcesos = () => {
        procesos = procesos.sort(function(a, b){
            return a - b
        })
    }

    // inicia el algoritmo que simula FIFO 
    function ejecutarAlgoritmo(){

    }

    const proceso1 = new Proceso()
    proceso1.mostrarProceso()
    proceso1.nombre = 'Oscar'
    console.log(proceso1.nombre)
})();