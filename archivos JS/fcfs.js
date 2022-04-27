(() => {
    class Proceso{

        _nombre = ''
        _activo = ''
        _duracion = ''
        _llegada = ''
    
        constructor(nombre = 'Sin nombre', activo = true, duracion = -1, llegada = -1 ){
            this._nombre = nombre
            this._activo = activo
            this._duracion = duracion
            this._llegada = llegada
        }

        set nombre (nombre){
            this._nombre = nombre.toLowerCase()
        } 

        get nombre(){
            return this._nombre
        }

        mostrarProceso(){
            console.log(`Soy un proceso con datos: ${this.nombre}, ${this.activo}, ${this.duracion}, ${this.llegada}`)
        }
    
    }
    
    const proceso1 = new Proceso()
    proceso1.mostrarProceso()
    proceso1.nombre = 'Oscar'
    console.log(proceso1.nombre)
})();