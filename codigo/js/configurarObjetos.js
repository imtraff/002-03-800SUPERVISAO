// Create and return an object data from da origin csv table row
async function criarObjetos(dados){

    let memoria = new Array;
    let ordem = 1;

        dados.forEach(valores => {
            
            const ocorrencia = objeto(valores, ordem);

            memoria.push(ocorrencia); ordem++;  
        });
        
        memoria = await Promise.all(memoria);
        
        return memoria;
}

let count = 0;
//Chosen class to data object
async function objeto(info, ordem){

    let novas = new Array;
    let coordenadas = info[4].split(' ');
    let trecho = info[12].split(' - '); trecho = trecho[1];

    //breaks coordinate data to a to item array
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
        local: verifyLocal(info[18]),
        elemento: info[20],
        estadoGeral: info[41],
        ocorrencia: removeFinal(criaOcorrencia(info[22],info[23])),
        per:  await findItemPer(info[11],criaOcorrencia(info[22],info[23])),
        standart: await findStandart(info[11],criaOcorrencia(info[22],info[23]))
    }

    return registro;
}

function verifyLocal(local){if(local != ""){return local}else{ return "Não informado"}}

function apenasFotos(lista){

    let listaFotos = new Array;

    for(i=0; i<=5; i++){ 

        if(lista[i] != "" && lista[i]!= '\r'){listaFotos.push(lista[i]);}
    }

    return listaFotos;
}

//split ocorrencia column in an array of words
function criaOcorrencia(ocorrencia,outras){
    
    let ocorrencias;
    let listaOcorrencia = new Array;

    if (ocorrencia != ''){
        ocorrencias = ocorrencia.split("|");
        listaOcorrencia.push(ocorrencias);
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

//remove empity spaces from array of ocorrencias
function removeFinal(list){

    let i = 0; let newList = new Array; let size = Object.keys(list).length;
    for(i=0; i<size-1; i++){if(list[i] == false){newList.push("Sem dados");}else{newList.push(list[i]);}}
    return newList;
}