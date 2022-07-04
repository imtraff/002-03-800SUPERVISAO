
/* Função que extraí os dados do CSV selecionado, na forma de texto
e depois processa os mesmos iniciando a criação de uma coleção de objetos com os dados obtidos*/
async function obterDados(){

    let campo = document.getElementById('inserir');
    let arquivo = campo.files; arquivo = arquivo[0];
    
    const dados = await arquivo.text();

    const conteudo = dados.split('\n').slice(2);

    const listaBruta = criarArray(conteudo);
    
    const listaProcessada = processarValores(listaBruta);

    const dadosProcessados = await criarObjetos(listaProcessada);

    return dadosProcessados;
}

// Recebe um texto e cria uma coleção de linhas
function criarArray(texto){

    let listaLinhas = new Array;

    texto.forEach(dados=>{

        const celulas = dados.split(';');
        listaLinhas.push(celulas);
    });

    return listaLinhas;
}

/* Recebe uma coleção de linhas, separando os valores e gerando uma coleção dos mesmos
para cada linha, e retornando uma nova coleção dessas linhas
Além disso, filtra apenas as linhas que possuem valores*/

function processarValores(conteudo){

    function verificaConteudo(linha){

        if(linha[0] ==='FIM'){return linha;}
    }

    const fimLista = conteudo.findIndex(verificaConteudo);

    let lista = new Array;

    lista = conteudo;

    lista = lista.slice(0, fimLista);

    return lista;
}

