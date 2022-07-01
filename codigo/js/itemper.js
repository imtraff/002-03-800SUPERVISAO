function findItemPer(disciplina,ocorrencia) {

    let listaItemPer = importarListaPer();

}

async function importarListaPer() {
      
        let arquivo = await fetch('per.csv');
        const dados = await arquivo.text();
    
        const conteudo = dados.split('\n').slice(1);
    
        const listaBruta = criarArray(conteudo);
        
        const listaProcessada = processarValores(listaBruta);
    
        console.log(listaProcessada);
        //return dadosProcessados;
}