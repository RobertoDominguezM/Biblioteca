window.addEventListener("load", () => {
    document.getElementById("literatura").addEventListener("change",escogerInfantil);
}, false);

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

function imprimirFormulario(){
    let select = document.getElementById("literatura");
    let div = document.getElementById("nombre");

    for(i = 0; i ;i++){
        if(select){

        }
    }
}

function nuevoLibro(){

}

function avisos(){
    if(document.getElementById("time") >= "9:00" || document.getElementById("time") <= "19:00"){
        alert("Sección de alta abierta");
    }
    else if(document.getElementById("time") <= "9:00" || document.getElementById("time") >= "19:00"){
        alert("Está fuera del horario. Solo es posible dar de alta libros de lunes a viernes de 9:00 a 19:00");
    }
    else{
        alert("En días festivos no es posible dar de alta nuevos libros");
    }
}
