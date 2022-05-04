(() => {
    // Almacena los proceso ingresados por el usuario
    let procesos = [] 

    // Clase para crear los procesos 
    class Proceso{

        _nombre = '' //A , B ....
        _t = 0 // Tiempo total que tomo el proceso para ejecutarse (tiempo espera y trabajo util)
        _duracion = 0 // Tiempo que necesita el proceso para ejecutarse [ticks]
        _llegada = 0 // Instante del tiempo en el que llega el proceso [ticks]
        _p = 0 //
        _e = 0 // tiempo que espera el proeso
        _inicio = 0 // Cunado inicia a ejecutarse el proceso
        _fin = 0 // Cuando finaliza de ejecutarse el proceso 

        constructor(nombre = 'Sin nombre', tiempoTotal = 0,  duracionProceso = 0, llegada = 0, penalizacion = 0, tiempoEspera = 0, inicio = 0, fin = 0 ){
            this._nombre = nombre
            this._t = tiempoTotal
            this._duracion = duracionProceso
            this._llegada = llegada
            this._p = penalizacion
            this._e = tiempoEspera
            this._inicio = inicio
            this._fin = fin
        }

        set nombre (nombre){
            this._nombre = nombre.toUpperCase()
        } 

        set T(tiempoTotal){
            this._t = tiempoTotal
        }
        
        set D(duracionProceso){
            this._d = duracionProceso
        }

        set llegada(llegada){
            this._llegada = llegada
        }

        set P(penalizacion){
            this._p = penalizacion
        }

        set E(tiempoEspera){
            this._e = tiempoEspera
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

        get T(){
            return this._t
        }

        get E(){
            return this._e
        }

        get P(){
            return this._p
        }

        get llegada(){
            return this._llegada
        }

        get duracion(){
            return this._duracion
        }

        get inicio(){
            return this._inicio
        }

        get fin(){
            return this._fin
        }

        mostrarProceso(){
            console.log(`Soy un proceso con datos: ${this.nombre}, ${this.duracion}, ${this.llegada}`)
        }
    
    }
    
    // Organiza los procesos por orden de llegada
    const organizarProcesos = () => {
        procesos = procesos.sort(function(a, b){
            return a._llegada - b._llegada
        })
    }

    // suma los tiempos de duracion de todos los proceso
    const sumarTiempoDuracion = () => {
        let tiempoDuracionTotal = 0
        procesos.forEach((proceso) => {
            tiempoDuracionTotal += proceso._duracionProceso
        })
        return tiempoDuracionTotal
    }

    // Calcular valores
    const calcularValores = (i, contador) => {
        procesos[i]._fin = contador
        procesos[i]._inicio =    pro
    }

    // inicia el algoritmo que simula FIFO 
    function ejecutarAlgoritmo(){
        let contador = 0;
        let i = 0;
        const duracion = sumarTiempoDuracion()
        organizarProcesos()

        while(0 < duracion){
            if(procesos[i]._duracionProceso == contador){
                calcularValores(i, contador)
                i += 1
                contador += 1
            }{
                contador += 1
            }
        }


    }

    const proceso1 = new Proceso()
    proceso1.mostrarProceso()
    proceso1.nombre = 'Oscar'
    console.log(proceso1.nombre)

//Codigo para añadir procesos 

// almacena 
const resultados = {
    nombre: "",
    llegada: "",
    duracion: ""
}

//objeto que almacena y dice si los campos son correctos
const campos ={
    nombre: false,
    llegada: false,
    duracion: false,
}

// Variables donde se guardan los nodos del dom 
const nombre = document.querySelector('#nombre');
const llegada = document.querySelector('#llegada');
const duracion = document.querySelector('#duracion');
const formulario = document.querySelector('#formAdd');
const botonAnadir = document.querySelector('#buttonAdd'); 
const botonMostrar = document.querySelector('#buttonShow'); 

//funciones que añaden el evento a cada campo
    nombre.addEventListener('input', e => {
        resultados.nombre = e.target.value;
    });

    llegada.addEventListener('input', e => {
        resultados.llegada = e.target.value;
    });

    duracion.addEventListener('input', e => {
        resultados.duracion = e.target.value;
    });

   

//funcion que valida el formulario, los campos para los procesos son correctos 
function validarCampos(){
    const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    llegada:  /^[0-9]*(\.?)[0-9]+$/,
    duracion:  /^[0-9]*(\.?)[0-9]+$/,
    };

    if(expresiones.nombre.test(resultados.nombre)){
        campos.nombre = true;
    }else{
        alert('El nombre no es valido')
        campos.nombre = false;
    } 

    if(expresiones.llegada.test(resultados.llegada)){
        campos.llegada = true;
    }else{
        alert('El campo de llegada no es valido')
        campos.llegada = false;
    } 

    if(expresiones.duracion.test(resultados.duracion)){
        campos.duracion = true;
    }else{
        alert('El campo de duracion no es valido')
        campos.duracion = false;
    } 
    
} 



//  funcion para añadir un proceso Añade un proceso 
botonAnadir.addEventListener('click', e => {
        validarCampos();
        if(campos.nombre && campos.llegada && campos.duracion ){
            procesos.push(new Proceso(resultados.nombre, 0, resultados.duracion, resultados.llegada, 0, 0, 0))
            formulario.reset();
        }
})

botonMostrar.addEventListener('click', () => {
    console.log(procesos)
})

})();