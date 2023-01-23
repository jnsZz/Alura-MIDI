function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else{
        console.log('Elemento não Identificado ou Seletor invalido');
    }
}
const listaDeTeclas = document.querySelectorAll('.tecla');
for(let contador = 0; contador < listaDeTeclas.length; contador++){
     const teclas = listaDeTeclas[contador];
     const instrumento = teclas.classList[1];
     //template String
     const idAudio = `#som_${instrumento}`;
    listaDeTeclas[contador].onclick = function () {
        tocaSom(idAudio);
    }
    teclas.onkeydown = function(evento){
        console.log(evento.code)
        if(evento.code ==='Space' || evento.code ==='Enter'){
            teclas.classList.add('ativa');
        } 
    }
    teclas.onkeyup = function(){
        teclas.classList.remove('ativa');
    }
}