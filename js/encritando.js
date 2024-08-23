const vocales = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
const textArea = document.querySelector(".encritador");
const textDesEncritar = document.querySelector(".desencritador");
const btnEncritar = document.querySelector(".btn__1");
const btnDesencritar = document.querySelector(".btn__2");
const muneco = document.querySelector(".imagenMu");
const texto2 = document.querySelector(".texto2");
const texto1 = document.querySelector(".texto1");
const btnCopiar = document.querySelector(".btn__copiar");




function encritando(mensajeencr){
    mensajeencr = mensajeencr.toLowerCase()
    for( i = 0; i < vocales.length; i++){
        if(mensajeencr.includes(vocales[i][0])){
            mensajeencr = mensajeencr.replaceAll(vocales[i][0], vocales[i][1])
        }
       
    }
    return mensajeencr
}


function desencritando(mensajedes){
    mensajedes = mensajedes.toLowerCase()
    for( i = 0; i < vocales.length; i++){
        if(mensajedes.includes(vocales[i][0])){
            mensajedes = mensajedes.replaceAll(vocales[i][1], vocales[i][0])
        }
       
    }
    return mensajedes
}

textArea.addEventListener("input", (e) =>{
    muneco.style.display = "none";
    texto2.textContent = "";
    texto1.textContent = "Capturando mensaje...";
})

btnEncritar.addEventListener("click", (e) =>{
    let mensaje = textArea.value;
    let mensajeEncritado = encritando(mensaje);
    textDesEncritar.textContent = mensajeEncritado;
    texto1.textContent = "Mensaje Encritado!";
    btnCopiar.style.visibility = "visible";
})

btnDesencritar.addEventListener("click", (e) =>{
    let mensaje = textArea.value;
    let mensajeEncritado = desencritando(mensaje);
    textDesEncritar.textContent = mensajeEncritado;
    texto1.textContent = "Mensaje Desencritado!";
    btnCopiar.style.visibility = "visible";
})

btnCopiar.addEventListener("click", (e) =>{
    let copiar = textDesEncritar.textContent;
    navigator.clipboard.writeText(copiar).then(()=>{
        
        texto1.textContent = "Texto copiado!";
        btnCopiar.style.visibility = "hidden";
    })
})