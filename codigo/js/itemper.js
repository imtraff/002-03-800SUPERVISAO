
//find item Per and standart acording the importerd database

//find item per and return as string
async function findItemPer(discipline,ocorr) {

    let per = false; let base = await basePer; 
    let found = false; let i =0; let size = base.length;

    while(found == false && i<size){

        if(base[i].disciplina == discipline){

            let elements = new Array;

            if(Array.isArray(ocorr[0])){ elements = ocorr[0]; found = true;
            }else{

                if(ocorr[1] != false){elements.push(ocorr[1]); found = true;
                }else{ elements.push(false);}
            }

            per = findOcorrencia(base[i], elements, "per");
        }
        i++;
        
        //if(found == true){contador++; console.log(contador, discipline, ocorr);}
    }

    //console.log(per);
    if(per!=false){return per}else{ return "NE"}
}

//find item per and return as string
async function findStandart(discipline,ocorr) {

    let standart = false;let base = await basePer; 
    let found = false; let i =0; let size = base.length;

    while(found == false && i<size){

        if(base[i].disciplina == discipline){

            let elements = new Array;

            if(Array.isArray(ocorr[0])){ elements = ocorr[0]; found = true;
            }else{

                if(ocorr[1] != false){elements.push(ocorr[1]); found = true;
                }else{ elements.push(false);}
            }

            standart = findOcorrencia(base[i], elements, "standart");
        }
        i++;
        
        //if(found == true){contador++; console.log(contador, discipline, ocorr);}
    }

    //console.log(per);
    if(standart!=false){return standart}else{ return "NE"}
}

//find elements by ocorrencia
function findOcorrencia(object, elements, search){


    if(elements[0] == false || elements[0]=="Sem dados"){ return "NE";}
    else{
        
        let found = false; let i = 0; let j = 0; let result = false;
        let listElement = elements;let listObject = Array.from(object.ocorrencia);
        let sizei = listElement.length - 1; let sizej = listObject.length - 1;

        while( found == false && i<sizei){while(found == false && j<sizej)
            { if(listElement[i] == listObject[j]){ 
                if(search == "per"){result = [true, object.code]; found = true;}else{result = [true, object.standart]; found = true;}
            } j++;}i++;
        }
        if(found == true){ 
            if(search == "per"){result = "|"+object.code+"|"; return result;}else{result = object.standart; return result;}
        }else{ return result}
    }
}
