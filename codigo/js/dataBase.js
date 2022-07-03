//Import list from database to compare
const basePer = importarListaPer();

async function importarListaPer() {
      
    let arquivo = await fetch('http://127.0.0.1:5500/codigo/per.csv');
    const dados = await arquivo.text();

    const conteudo = dados.split('\n').slice(1);

    const listaBruta = criarArray(conteudo);
    
    const listaProcessada = processarValores(listaBruta);

    const dataBase = configData(listaProcessada);

    return dataBase;
}


function configData(data){

    let readyData = new Array;

    data.forEach(element => {
        
        let object = prepareObject(element);
        readyData.push(object);
    });

    return readyData;
}

function prepareObject(values){

    let object = {

        disciplina: values[0],
        ocorrencia: splitText(values[1]),
        parameter: splitText(values[2]),
        code: values[3],
        standart: values[4]
    }

    return object;
}

function splitText(string){ 

    if(string == undefined || string == null || string == "-" || string =="" || string ==" "){ return "-";}
    else{ let newText = string.split("|"); return newText;}
}