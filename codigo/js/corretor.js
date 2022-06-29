
function corrigirTexto(texto){

    let textoM = texto.toUpperCase();
    textoM = textoM.split(' ');

    let tamanho = Object.keys(textoM).length - 1;
    let posicao = 0;

    textoM.forEach( palavra => {
      
        switch(palavra){

            case "TUNEL": palavra = 'TÚNEL'; break;
            case "(TUNEL": palavra = 'TÚNEL'; break;
            default: palavra = 'Mantém'; break;
        }

        console.log(palavra);
    });

    
}

    
