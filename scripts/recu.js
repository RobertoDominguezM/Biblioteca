window.addEventListener("load", () => {
    document.getElementById("literatura").addEventListener("change",escogerInfantil)
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

function nuevoLibro(){

}

function avisos(){

}
