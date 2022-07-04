
//Generate and append on page the html tables
function generateTables(data){

    let dataTables = organizeData(data);
}

//Config dataBase to a array of array by disciplina
function organizeData(data){

    let arrayDisciplinas = getDisciplinas(data);
    let agroupDisciplines = mapData(arrayDisciplinas, data);

    //Código para criar as tabelas
}

function getDisciplinas(data){

    let i = 0; j = 0;
    let size = Object.keys(data).length;
    let arrayDisciplinas = new Array;

    arrayDisciplinas[0] = data[0].disciplina;

    for(i=0; i<size; i++){

        let add = true;
        let text = data[i].disciplina;

        arrayDisciplinas.forEach(discipline => { if(text == discipline){ add = false;}});

        if(add == true){arrayDisciplinas[j] = text; j++;} 
    }

    return arrayDisciplinas;
}

function mapData(list, data){

    let newDataBase = new Array;
    let size = Object.keys(data).length;

    list.forEach(discipline=>{

        let i = 0; let item = new Array;

        for(i=0; i<size; i++){if(data[i].disciplina == discipline){ item.push(data[i])};}

        newDataBase.push(item);
    });

    return newDataBase;
}
