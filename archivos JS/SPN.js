(() => {
    let procesos = []
    class proceso{
        _nombre
        _llegada
        _duracion
        _ciclo_inicial
        _ciclo_final
        constructor(nombre_proceso="sin nombre",ciclollegada=0, Tiempo_ejecucion=0 ,ciclo_inicial=0, ciclo_final=0){
            this._llegada = ciclollegada
            this._duracion = Tiempo_ejecucion
            this._nombre = nombre_proceso
            this._ciclo_inicial = ciclo_inicial
            this._ciclo_final = ciclo_final
        }
        set nombre(nombre_proceso){
            this._nombre = nombre_proceso
        }
        set llegada(ciclollegada){
            this._llegada = ciclollegada
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
    // Calcular valores
    const calcularValores = () => {
       procesos.forEach((proceso) => {
           proceso._ciclo_inicial = proceso.llegada + proceso.Tiempo_ejecucion
           proceso._ciclo_final = proceso.ciclo_inicial + proceso.Tiempo_ejecucion
       })
   }
    
   

   
    
    // inicia el algoritmo que simula SPN
    function ejecutarAlgoritmo(){    
        organizarProcesos()    
        let inicio = procesos[0].llegada // variable para indicar el inicio del proceso en ejecucion 
        procesos.forEach((proceso) => {
            proceso.ciclo_inicial = proceso.llegada
            proceso.ciclo_final = proceso.llegada + proceso.Tiempo_ejecucion   
            inicio= proceso.llegada
        })

        calcularValores()

    }
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
const tabla1 = document.querySelector('#tabla1');
const tablaProcesos = document.querySelector('#tablaProcesos')

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
        procesos.push(new proceso(resultados.nombre, 0, parseInt(resultados.duracion), parseInt(resultados.llegada), 0, 0, 0))
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
            <td>${proceso.duracion}</td>
            <td>${proceso.ciclo_inicial}</td>
            <td>${proceso.ciclo_final}</td>
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