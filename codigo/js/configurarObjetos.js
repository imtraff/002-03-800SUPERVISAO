// Cria e retorna coleção de objetos que serão usados para análise
function criarObjetos(dados){

    let memoria = new Array;
    let ordem = 1;

        dados.forEach(valores => {
            
            const ocorrencia = objeto(valores, ordem);
            
            memoria.push(ocorrencia); ordem++;  
        });
        
        //return memoria;
}

//Classe adotada para processar os dados, retorna um objeto do registro

function objeto(info, ordem){ //console.log(info);

    let novas = new Array;
    let coordenadas = info[4].split(' ');
    let trecho = info[12].split(' - '); trecho = trecho[1];

    //quebras as coordenadas e remove os últimos digitos
    coordenadas.forEach( eixo => { 
        
        let cord = eixo.substr(0, 13);
        novas.push(cord);
        //nota, novas[0] é latitude, e novas[1] é longitude
    });

    let registro = {

        posicao: ordem,
        codigo: info[0],
        data: info[1],
        hora: info[2],
        lat: novas[0],
        long: novas[1],
        km: info[17],
        obs: info[24],
        fotos: apenasFotos(info.slice(29,41)),
        disciplina: info[11],
        concessionaria: info[13],
        trecho: info[14],
        pista: info[15],
        sentido: info[16],
        local: info[18],
        elemento: info[20],
        estadoGeral: info[41],
        ocorrencia: criaOcorrencia(info[22],info[23]),
        per: findItemPer(info[11],criaOcorrencia(info[22],info[23])),
    }
    
    //console.log(registro);
    return registro;
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

function criaOcorrencia(ocorrencia,outras){
    
    let listaOcorrencia = new Array;

    if (ocorrencia != ''){
        listaOcorrencia.push(ocorrencia);
        listaOcorrencia.push(false);
    }
    else {
        if (outras != ''){
        listaOcorrencia.push(false);
        listaOcorrencia.push(outras);
        }
        else {
            listaOcorrencia.push(false);
            listaOcorrencia.push('Sem dados');
        }
    }

    return listaOcorrencia;
}
