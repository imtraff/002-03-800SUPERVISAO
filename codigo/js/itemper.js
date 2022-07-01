
let confere = 0; let diferente = 0;

async function findItemPer(disciplina,ocorrencia) {

    let somar = false;

    let base = await basePer;
    
    let findX = false; let findY= false; 
    let sizeX = base.length; let i = 0;

    while(findX == false || i<sizeX){

        if(base[i].disciplina == disciplina){ findX = true; somar = true;}
    }

    if(somar == true){ confere++}else{diferente++}
}


