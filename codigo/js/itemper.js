let contador = 0;

async function findItemPer(discipline,ocorr) {

    let per = false;
    let base = await basePer;
    
    let found = false; let i =0 
    let size = base.length;

    while(found == false && i<size){

        if(base[i].disciplina == discipline){

            let element = false;

            if(ocorr[0] != false){ element = ocorr[0]; found = true;
            }else{

                if(ocorr[1] != false){element = ocorr[1]; found = true;
                }else{ element = "Inexistente!";}
            }

            per = findOcorrencia(base[i], element);
        }
        i++;
        
        //if(found == true){contador++; console.log(contador, discipline, ocorr);}
    }

    //console.log(per);
    if(per!=false){return per}else{ return "NE"}
}



function findOcorrencia(object, element){

    let found = false;
    let i = 0; let j = 0;

    let result = false;
    let listElement = element.split("|");
    let listObject = Array.from(object.ocorrencia);

    let sizei = listElement.length - 1;
    let sizej = listObject.length - 1;

    while( found == false && i<sizei){

        while(found == false && j<sizej){ if(listElement[i] == listObject[j]){ result = [true, object.code]; found = true;} j++;}
        
        i++;
    }

    if(found == true){ result = object.code; return result;}else{ return result}
}
