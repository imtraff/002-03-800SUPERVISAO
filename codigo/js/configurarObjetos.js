// Cria e retorna coleção de objetos que serão usados para análise
function criarObjetos(dados){

    let memoria = new Array;
    let ordem = 1;

        dados.forEach(valores => {
            
            const ocorrencia = objeto(valores, ordem);
            
            memoria.push(ocorrencia); ordem++;  
        });
        
        return memoria;
}

//Classe adotada para processar os dados, retorna um objeto do registro

function objeto(info, ordem){ //console.log(info);

    let novas = new Array;
    let coordenadas = info[5].split(' ');
    let trecho = info[12].split(' - '); trecho = trecho[1];

    //quebras as coordenadas e remove os últimos digitos
    coordenadas.forEach( eixo => { 
        
        let cord = eixo.substr(0, 13);
        novas.push(cord);
        //nota, novas[0] é latitude, e novas[1] é longitude
    });

    let ocorrencia = {

        posicao: ordem,
        codigo: info[0],
        data: info[1],
        hora: info[3],
        lat: novas[0],
        long: novas[1],
        obra: trecho,
        km: info[14],
        etapa: corrigirTexto(info[15]),
        servico: corrigirTexto(info[16]),
        percentual: info[17],
        naNorma: verificaSituacao(info[18]),
        erroNorma: info[19],
        projeto: verificaSituacao(info[20]),
        nProjeto: info[21],
        irregularidade: info[22],
        tipoIrregularidade: info[23],
        interferencia: info[24],
        tipoInt: info[25],
        situObra: info[26].toUpperCase(info[26]),
        obs: corrigirTexto(info[27]),
        fotos: apenasFotos(info.slice(28,34))
    }
    
    //console.log(ocorrencia);
    return ocorrencia;
}

function verificaSituacao(dado){

    switch(dado){

        case "SIM": dado = "EM ACORDO"; break;
        case 'NÃO': dado = "EM DESACORDO"; break;
        default: dado = "NÃO AVALIADO"; break;
    }

    return dado;
}

function apenasFotos(lista){

    let listaFotos = new Array;

    for(i=0; i<=5; i++){ 

        if(lista[i] != "" && lista[i]!= '\r'){listaFotos.push(lista[i]);}
    }

    return listaFotos;
}
