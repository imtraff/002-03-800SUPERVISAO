
async function findItemPer(discipline,ocorr) {

    let somar = false;

    let base = await basePer;
    
    let findX = false; let findY= false; 
    let sizeX = base.length; let i = 0;

    while(findX == false && i<sizeX){

        if(base[i].disciplina == discipline){ findX = true;

            let list = base[i].ocorrencia; let element = "nothing";

            if(ocorr[0] != false){ element = ocorr[0];
            }else{

                if(ocorr[1] != false){element = ocorr[1];
                }else{ element = "Inexistente!";}
            }

            console.log(element);
        }

        i++;
    }
}


