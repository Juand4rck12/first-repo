let div = document.getElementById('mostrarTexto');
let boton = document.getElementById('boton');

boton.addEventListener('click',mostrarMensaje);

function mostrarMensaje (){
    div.innerHTML = 'HOLA! Este mensaje se imprimio mediante JavaScript!.';
    div.style.margin = '12px';
    div.style.padding = '12px';
    div.style.backgroundColor = '#13F277';
    div.style.color = '#134BF2';
    div.style.fontFamily = 'arial';
}