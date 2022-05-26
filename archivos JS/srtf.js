(() => {
    // Almacena los proceso ingresados por el usuario
    let procesos = [] 

    // Clase para crear los procesos 
    class Proceso{
        _name
        _llegada
        _inicio
        _rafaga
        _fin
        _Tespera_maximo
        _TesperaMedio

        constructor(nombre="sin nombre", llegada=0 , rafaga_cpu=0, esperaMax=0, esperaMedio=0 ,fine=0 , inicio=0){
            this._name=nombre
            this._llegada=llegada
            this._rafaga=rafaga_cpu
            this._Tespera_maximo=esperaMax
            this._TesperaMedio=esperaMedio
            this._fin=fine
            this._inicio=inicio
        }
        set inicio(inicio){
            this._inicio=inicio
        }
        set fine(fine){
            this._fin=fine
        }

        set nombre (nombre){
            this._name = nombre.toUpperCase()
        } 

        set llegada(llegada){
            this._llegada= llegada
        }
        
        set rafaga_cpu(rafaga_cpu){
            this._rafaga = rafaga_cpu
        }

        set Tiempomed(esperaMedio){
            this._TesperaMedio = esperaMedio
        }

        set Tiempomax(esperaMax){
            this._Tespera_maximo = esperaMax
        }
        get inicio(){
            return this._inicio
        }
        get fine(){
            return this._fine
        }

        get nombre(){
            return this._name
        }

        get llegada(){
            return this._llegada
        }

        get duracion(){
            return this._duracion
        }

        get Tiempomed(){
            return this._TesperaMedio
        }

        get Tiempomax(){
            return this._Tespera_maximo
        }
        get rafaga_cpu (){
            return this._rafaga
        }
    
    }
    
    // Organiza los procesos por orden de llegada
    const organizarProcesos = () => {
        procesos = procesos.sort(function(a, b){
            return a._llegada - b._llegada
        })
    }


    // Calcular valores
    const calcularValores = () => {
        procesos.forEach((proceso) => {
            proceso.Tiempomax = proceso.fine - proceso.llegada
            proceso.Tiempomed = proceso.llegada - proceso.fine
            proceso.fine= proceso.llegada + proceso.rafaga_cpu
        })
    }

    // inicia el algoritmo que simula SRTF 
    function ejecutarAlgoritmo(){    
        organizarProcesos()    
        let inicio = procesos[0].inicio // variable para indicar el inicio del proceso en ejecucion 
        procesos.forEach((proceso) => {
            proceso.llegada = llegada
            proceso.fin = proceso.inicio + proceso.rafaga_cpu 
            inicio = proceso.llegada         
        })

        calcularValores()

    }

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
    llegada_in: false,
    duracion: false,
}

// Variables donde se guardan los nodos del dom 
const nombre = document.querySelector('#nombre');
const llegada_in = document.querySelector('#llegada');
const duracion = document.querySelector('#duracion');
const formulario = document.querySelector('#formAdd');
const botonAnadir = document.querySelector('#buttonAdd'); 
const botonMostrar = document.querySelector('#buttonShow'); 
const tabla1 = document.querySelector('#tabla1');
const tablaProcesos = document.querySelector('#tablaProcesos')

//funciones que añaden el evento a cada campo
    nombre.addEventListener('input', e => {
        resultados.nombre = e.target.value;
    });

    llegada_in.addEventListener('input', e => {
        resultados.llegada = e.target.value;
    });

    duracion.addEventListener('input', e => {
        resultados.duracion = e.target.value;
    });

   

//funcion que valida el formulario, los campos para los procesos son correctos 
function validarCampos(){
    const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    llegada_in:  /^[0-9]*(\.?)[0-9]+$/,
    duracion:  /^[0-9]*(\.?)[0-9]+$/,
    };

    if(expresiones.nombre.test(resultados.nombre)){
        campos.nombre = true;
    }else{
        alert('El nombre no es valido')
        campos.nombre = false;
    } 

    if(expresiones.llegada_in.test(resultados.llegada)){
        campos.llegada_in = true;
    }else{
        alert('El campo de llegada no es valido')
        campos.llegada_in = false;
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
            procesos.push(new Proceso(resultados.nombre, 0, parseInt(resultados.duracion), parseInt(resultados.llegada_in), 0, 0, 0))
            formulario.reset();
        }
})

function pintarProcesos(){
    let fila = ''
    procesos.forEach((proceso) => {
        fila = 
        `<tr>
            <td>${proceso.nombre}</td>
            <td>${proceso.llegada}</td>
            <td>${proceso.rafaga_cpu}</td>
            <td>${proceso.Tiempomed}</td>
            <td>${proceso.Tiempomax}</td>
        </tr>`
        tabla1.innerHTML += fila
    })
    tablaProcesos.style.display = "flex";
}

botonMostrar.addEventListener('click', () => {
    ejecutarAlgoritmo()
    console.log(procesos)
    pintarProcesos()
})

})();