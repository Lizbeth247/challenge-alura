const areaDeTexto=document.querySelector(".area-de-texto");
const mensaje=document.querySelector(".mensaje")

function botonEncriptar(){
    const textoEncriptado = encriptar(areaDeTexto.value)
    mensaje.value=textoEncriptado;
    areaDeTexto.value = "";
}


function encriptar(stringEncriptada){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
   
    stringEncriptada=stringEncriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(areaDeTexto.value)
    mensaje.value = textoEncriptado;
    areaDeTexto.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}
function botonCopiar(){
    const mensajeCopiado = copiarMensaje(clipText)

    
}

function copiarMensaje(){
    navigator.clipboard
    .readText()
    .then(
      (clipText) => (document.querySelector(".mensaje").innerText += clipText)
    );
  
}


 
