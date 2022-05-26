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

// (() => {
//     // Almacena los proceso ingresados por el usuario
//     let procesos = [];
//     let quantum = 0;
//     let cola = [];
//     // Clase para crear los procesos
//     class Proceso {
//       //A , B ....
//       // Tiempo total que tomo el proceso para ejecutarse (tiempo espera y trabajo util)
//       // Tiempo que necesita el proceso para ejecutarse [ticks]
//       // Instante del tiempo en el que llega el proceso [ticks]
//       //
//       // tiempo que espera el proeso
//       // Cunado inicia a ejecutarse el proceso
//       // Cuando finaliza de ejecutarse el proceso
  
//       constructor(
//         nombre = "Sin nombre",
//         tiempoTotal = 0,
//         duracion = 0,
//         llegada = 0,
//         penalizacion = 0,
//         tiempoEspera = 0,
//         inicio = 0,
//         fin = 0,
//         tiempo_duracion = 0
//       ) {
//         this.nombre = nombre;
//         this.T = tiempoTotal;
//         this.duracion = duracion;
//         this.llegada = llegada;
//         this.P = penalizacion;
//         this.E = tiempoEspera;
//         this.inicio = inicio;
//         this.fin = fin;
//         this.tiempo_duracion = tiempo_duracion;
//         this.isInicio = false;
//       }
  
//       mostrarProceso() {
//         console.log(
//           `Soy un proceso con datos: ${this.nombre}, ${this.duracion}, ${this.llegada}`
//         );
//       }
//     }
  
//     // Calcular valores
//     const calcularValores = () => {
//       procesos.forEach((proceso) => {
//         proceso.T = proceso.fin - proceso.llegada;
//         proceso.E = proceso.T - proceso.tiempo_duracion;
//         proceso.P = proceso.T / proceso.tiempo_duracion;
//       });
//     };
  
//     // inicia el algoritmo que simula FIFO
//     function ejecutarAlgoritmo() {
  
//       let contador = -1;
//       let ticks = quantum;
  
//       do {
//         if (cola.length != 0) {
//           ticks = ticks - 1;
//           procesos[cola[0]].duracion -= 1;
  
//           if (procesos[cola[0]].duracion == 0) {
//             procesos[cola[0]].fin = contador;
//             ticks = quantum;
//             cola.shift();
//           } else {
//             if (ticks == 0) {
//               cola.push(cola[0]);
//               ticks = quantum;
//               cola.shift();
//             }
//           }
//           try {
//             if (!procesos[cola[0]].isInicio) {
//               procesos[cola[0]].isInicio = true;
//               procesos[cola[0]].inicio = contador;
//             }
//           } catch (error) {}
//         }
  
//         for (let i = 0; i < procesos.length; i++) {
//           const proceso = procesos[i];
//           if (proceso.llegada == contador ) {
//             cola.pu
//           }
//         }
  
//         contador++;
//       } while (
//         cola.length != 0 ||
//         contador <= procesos[procesos.length - 1].llegada
//       );
//       calcularValores();
//     }
  
//     //Codigo para añadir procesos
  
//     // almacena los resultados
//     const resultados = {
//       nombre: "",
//       llegada: "",
//       duracion: "",
//       Q: "",
//     };
  
//     //objeto que almacena y dice si los campos son correctos
//     const campos = {
//       nombre: false,
//       llegada: false,
//       duracion: false,
//       Q: false,
//     };
  
//     // Variables donde se guardan los nodos del dom
//     const Q = document.querySelector("#quantum");
//     const nombre = document.querySelector("#nombre");
//     const llegada = document.querySelector("#llegada");
//     const duracion = document.querySelector("#duracion");
//     const formulario = document.querySelector("#formAdd");
//     const botonAnadir = document.querySelector("#buttonAdd");
//     const botonMostrar = document.querySelector("#buttonShow");
//     const tabla1 = document.querySelector("#tabla1");
//     const tablaProcesos = document.querySelector("#tablaProcesos");
//     const botonQ = document.querySelector("#buttonAddQ");
  
//     //funciones que añaden el evento a cada campo
//     nombre.addEventListener("input", (e) => {
//       resultados.nombre = e.target.value;
//     });
  
//     llegada.addEventListener("input", (e) => {
//       resultados.llegada = e.target.value;
//     });
  
//     duracion.addEventListener("input", (e) => {
//       resultados.duracion = e.target.value;
//     });
//     Q.addEventListener("input", (e) => {
//       resultados.Q = e.target.value;
//     });
  
//     //funcion que valida el formulario, los campos para los procesos son correctos
//     function validarCampos() {
//       const expresiones = {
//         nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
//         llegada: /^[0-9]*(\.?)[0-9]+$/,
//         duracion: /^[0-9]*(\.?)[0-9]+$/,
//       };
  
//       if (expresiones.nombre.test(resultados.nombre)) {
//         campos.nombre = true;
//       } else {
//         alert("El nombre no es valido");
//         campos.nombre = false;
//       }
  
//       if (expresiones.llegada.test(resultados.llegada)) {
//         campos.llegada = true;
//       } else {
//         alert("El campo de llegada no es valido");
//         campos.llegada = false;
//       }
  
//       if (expresiones.duracion.test(resultados.duracion)) {
//         campos.duracion = true;
//       } else {
//         alert("El campo de duracion no es valido");
//         campos.duracion = false;
//       }
//       if (!campos.Q) {
//         alert("Debe ingresar un Quantum ");
//       }
//     }
  
//     const validarQ = () => {
//       const expresion = /^[0-9]*(\.?)[0-9]+$/;
//       if (expresion.test(resultados.Q)) {
//         campos.Q = true;
//       } else {
//         alert("El campo del quantum no es valido");
//         campos.Q = false;
//       }
//     };
  
//     //  funcion para añadir un proceso Añade un proceso
//     botonAnadir.addEventListener("click", (e) => {
//       validarCampos();
//       if (campos.nombre && campos.llegada && campos.duracion ) {
//         procesos.push(
//           new Proceso(
//             resultados.nombre,
//             0,
//             parseInt(resultados.duracion),
//             parseInt(resultados.llegada),
//             0,
//             0,
//             0,
//             0,
//             parseInt(resultados.duracion)
//           )
//         );
//         formulario.reset();
//       }
//     });
  
//     function pintarProcesos() {
//       let fila = "";
//       procesos.forEach((proceso) => {
//         fila = `<tr>
//               <td>${proceso.nombre}</td>
//               <td>${proceso.inicio}</td>
//               <td>${proceso.fin}</td>
//               <td>${proceso.T}</td>
//               <td>${proceso.E}</td>
//               <td>${proceso.P}</td>
//           </tr>`;
//         tabla1.innerHTML += fila;
//       });
//       tablaProcesos.style.display = "flex";
//     }
  
//     botonMostrar.addEventListener("click", () => {
//       ejecutarAlgoritmo();
//       pintarProcesos();
//     });
  
//     // Funcion que añade la funcionalidad del quantum
//     botonQ.addEventListener("click", (e) => {
//       validarQ();
//       if (campos.Q == true) {
//         quantum = parseInt(resultados.Q);
//         document.querySelector("#formQ").style.display = "none";
//       }
//     });
//   })();
  