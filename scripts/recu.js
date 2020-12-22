window.addEventListener("load", () => {
    document.getElementById("literatura").addEventListener("change",escogerInfantil);
    document.getElementById("seccionLibros").addEventListener("imprimir", imprimirFormulario, false);
    avisos();
    imprimirFormulario();
}, false);

/**
 * Si se trata de literatura infantil, aparecerán además los siguientes campos(cuyos datos se
almacenarán solo en este caso). (Edad recomendada y observaciones)
 */
function escogerInfantil(){
    console.log("entrq");
    let literatura = document.getElementById("literatura");
    let divInfantil= document.getElementById("infantil");
    console.log(literatura.value);
    if(literatura.value == "juvenil"){
        console.log("eantra if")
        divInfantil.setAttribute("hidden","");
        divInfantil.setAttribute("disabled","");
    }
    else if(literatura.value == "adulta"){
        divInfantil.setAttribute("hidden","");
        divInfantil.setAttribute("disabled","");
    }
    else{
        divInfantil.removeAttribute("hidden");
        divInfantil.removeAttribute("disabled");
    }
}
/**
 * A la derecha del formulario habrá otra sección que permitirá ver el nombre de todos los libros
de un determinado tipo ordenados por año de publicación
 */
/**
 * Creo Array para guardar libros
 */
var ArrayParaLibros = [];
function imprimirFormulario(){

    let select = document.getElementById("literatura"); 
    let informacion = document.getElementById("seccionLibros");

    informacion.innerHTML = "";
    informacion.innerHTML = "Los libros de tipo "+select.value;


   for (let index = 0; index < ArrayParaLibros.length; index++) {
       if (select.value == ArrayParaLibros[index].Literatura) {
        informacion.innerHTML = ArrayParaLibros[index].Nombre+ArrayParaLibros[index].NumeroCopias;
        
       }
       if (select.value == "vacio") {
        informacion.innerHTML = ArrayParaLibros[index].Nombre;           
       }
   }   
}

function nuevoLibro(){

}
/**
 * En esta sección se incluirá un aviso en rojo, centrado y un tamaño de letras superior a los
demás textos de la página. El aviso dependerá del día y hora actual y ha de comprobarse
con la fecha real
 */
function avisos(){
    let divAvisos = document.getElementById("seccionAviso");
    let dia = new Date().getDay();
    let hora = new Date().getHours();
    let minuto = new Date().getMinutes();
    let boton = document.getElementById("enviar");

    /**
     * Si es sábado o domingo 
     */
    if(dia == 6 || dia == 0){
        divAvisos.innerHTML = "En días festivos no es posible dar de alta nuevos libros";
        boton.disabled = true;
    }
    /**
     * Si es un día de lunes a viernes y la hora está entre las 9:00 y las 19:00
     */
    else if((dia >= 1 && dia <= 5) && (hora >= 9 && hora <= 19) && (minuto >= 0)){
        divAvisos.innerHTML = "Está fuera del horario. Solo es posible dar de alta libros de lunes a viernes de 9:00 a 19:00"
    }
    /**
     * Si es un día de lunes a viernes pero fuera del horario anterior
     */
    else{
        divAvisos.innerHTML = "En días festivos no es posible dar de alta nuevos libros";
        boton.disabled = true;
    }
}
