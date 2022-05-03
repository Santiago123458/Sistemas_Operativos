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
    contrasena: "",
    contrasena2: "",
    correo: "",
    celular:""
}

//objeto que almacena y dice si los campos son correctos
const campos ={
    nombre: false,
    contrasena: false,
    contrasena2: false,
    correo: false,
    celular: false
}
//array que va a guardar los usuarios registrados
let usuariosRegistrados = [];

// Variables donde se guardan los nodos del dom 
const nombre = document.querySelector('#nombre');
const llegada = document.querySelector('#llegada');
const duracion = document.querySelector('#duracion');

//funciones que añaden el evento a cada campo
    nombre.addEventListener('input', e => {
        resultados.nombre = e.target.value;
    });

    llegada.addEventListener('input', e => {
        resultados.correo = e.target.value;
    });

    duracion.addEventListener('input', e => {
        resultados.celular = e.target.value;
    });

   

// funcion para añadir nuevos usuarios
function registrar(obj){
    let arrayDeUsuarios = "";

    if(localStorage.getItem('usersOsc') == null){  
        usuariosRegistrados.push(resultados);
        arrayDeUsuarios = JSON.stringify(usuariosRegistrados);
        localStorage.setItem('usersOsc',arrayDeUsuarios);
    }else{
        arrayDeUsuarios = localStorage.getItem('usersOsc');
        usuariosRegistrados = JSON.parse(arrayDeUsuarios);
        usuariosRegistrados.push(obj);
        arrayDeUsuarios = JSON.stringify(usuariosRegistrados);
        localStorage.setItem('usersOsc', arrayDeUsuarios);
    }

}

//funcion que valida el formulario
function validarCampos(){
    const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    contrasena: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    contrasena2: "",
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    celular:/^\d{10}$/
    };

    if(expresiones.nombre.test(resultados.nombre)){
        document.querySelector("#nombreError").style.display ="none";
        campos.nombre = true;
    }else{
        document.querySelector("#nombreError").style.display ="block";
        campos.nombre = false;
    } 

    if(expresiones.celular.test(resultados.celular)){
        document.querySelector("#celularError").style.display ="none";
        campos.celular = true;
    }else{
        document.querySelector("#celularError").style.display ="block";
        campos.celular = false;
    } 

    if(expresiones.correo.test(resultados.correo)){
        document.querySelector("#correoError").style.display ="none";
        campos.correo = true;
    }else{
        document.querySelector("#correoError").style.display ="block";
        campos.correo = false;
    } 

    if(expresiones.contrasena.test(resultados.contrasena)){
        document.querySelector("#contrasenaError").style.display ="none";
        campos.contrasena = true;
        validarContrasena();
    }else{
        document.querySelector("#contrasenaError").style.display ="block";
        campos.contrasena = false;
    } 
    
} 

function validarContrasena(){
    if(resultados.contrasena !== resultados.contrasena2){
        document.querySelector("#contrasena2Error").style.display ="block";
        campos.contrasena2 = false;
    }else{
        document.querySelector("#contrasena2Error").style.display ="none";
        campos.contrasena2 = true;
    }

}


formulario.addEventListener('submit', e => {
        e.preventDefault();
        validarCampos();
        if(campos.nombre && campos.celular && campos.contrasena && campos.contrasena2 && campos.correo){
           registrar(resultados);
           alert("Alumno Registrado");
           formulario.reset();
        }
})

})();