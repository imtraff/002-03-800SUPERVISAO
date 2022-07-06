
//Generate and append on page the html tables
function generateTables(data){

    let dataTables = organizeData(data);
    let tables = createTables(dataTables);
}

//Section to oraganize data for the tables by disciplina

//Config dataBase to a array of array by disciplina
function organizeData(data){

    let arrayDisciplinas = getDisciplinas(data);
    let agroupDisciplines = mapData(arrayDisciplinas, data);
    return agroupDisciplines;
}

//generates an array of discipline types
function getDisciplinas(data){ let i = 0; j = 0; let size = Object.keys(data).length; let arrayDisciplinas = new Array;

    arrayDisciplinas[0] = data[0].disciplina;

    for(i=0; i<size; i++){ let add = true; let text = data[i].disciplina;

        arrayDisciplinas.forEach(discipline => { if(text == discipline){ add = false;}});
        if(add == true){arrayDisciplinas[j] = text; j++;} 
    } 
    return arrayDisciplinas;
}

//filter the resgister by discipline type
function mapData(list, data){ let newDataBase = new Array; let size = Object.keys(data).length;

    list.forEach(discipline=>{ let i = 0; let item = new Array;

        for(i=0; i<size; i++){if(data[i].disciplina == discipline){ item.push(data[i])};}

        newDataBase.push(item);
    }); return newDataBase;
}


//Section to create new Tables

//create an array of all html tables
function createTables(array){ let place = document.getElementById("tables");

    array.forEach( dataArray =>{ 
        
        let table = newTable(); let body = document.createElement("tbody");

        dataArray.forEach(data => { let line = newLine([false, data]); body.appendChild(line);});

        table.firstChild.appendChild(body); place.appendChild(table);
    })
}

//generate a new table with a basic header
function newTable(){

    let html = document.createElement("div"); html.setAttribute("class", "table_box");
    let table = document.createElement("table"); table.setAttribute("class", "table_structure");
    let thead = createHeader();

    table.appendChild(thead); html.appendChild(table); return html;
}

function createHeader(){

    let header = document.createElement("thead");
    let data = ["ITEM" , "CÓDIGO", "DATA HORA", "SENTIDO", "KM", "LOCAL","ELEMENTO", "OCORRÊNCIAS", "ITEM PER", "PROVIDÊNCIAS"];

    data.forEach( column =>{

        let cell = document.createElement("th"); cell.setAttribute("class", "table_header");
        cell.innerText = column; header.appendChild(cell);
    });
    return header;
}

//generate the lines of header and body
function newLine(content){ const header = content[0]; let data = new Array;
    
    let line = document.createElement("tr"); line.setAttribute("class", "table_line");

    if(header){ ;

    }else{ let object = content[1];
        data = ["none", object.codigo, object.data+" "+object.hora, object.sentido, object.km, object.local, object.disciplina, object.ocorrencia, object.per, "a definir"];
    }

    data.forEach(value => { let cell = newCell(value); line.appendChild(cell)});

    return line;
}

//generate a new cell with value
function newCell(data){

    let html = document.createElement("td"); html.setAttribute("class", "table_column"); html.innerText = data; return html;
}