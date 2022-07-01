
async function findItemPer(discipline,ocorr) {

    let base = await basePer;
    
    let found = false; let i =0 
    let size = base.length;

    while(found == false && i<size){

        if(base[i].disciplina == discipline){ findX = true;

            let element = false;

            if(ocorr[0] != false){ element = ocorr[0];
            }else{

                if(ocorr[1] != false){element = ocorr[1];
                }else{ element = "Inexistente!";}
            }

            let result = findOcorrencia(base[i], element)
        }
        i++;
    }
}

let contador = 0;

function findOcorrencia(object, element){

    let found = false;
    let i = 0; let j = 0;

    let result = [false, false];
    let listElement = element.split("|");
    let listObject = Array.from(object.ocorrencia);

    let sizei = listElement.length - 1;
    let sizej = listObject.length - 1;

    while( found == false && i<sizei){

        while(found == false && j<sizej){ if(listElement[i] == listObject[j]){ result = [true, object.code]; found = true;} j++;}
        if(found == false && listElement != "Sem Dados"){ console.log(listElement[i])}

        i++;
    }

}
