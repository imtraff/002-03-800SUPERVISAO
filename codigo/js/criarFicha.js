//gerencia a criação de fichas no app

//Cria e insere o html de todas as fichas a página principal
function criarHTMLpagina(banco){

    banco.forEach(registro => {definirModeloFicha(registro);});
}

//Coordena a criação e inserção dos htmls de acordo com a qtde de fotos
function definirModeloFicha(registro){

    let local = document.getElementById('corpo'); let conteudoFicha, conteudoAnexo, anexo = false;
    let qtdeFotos = Object.keys(registro.fotos).length;

    switch(qtdeFotos){

        case 1: conteudoFicha = criarFicha(registro, 1); anexo = false; break;
        case 2: conteudoFicha = criarFicha(registro, 1); conteudoAnexo = criarAnexo(registro, 1); anexo = true; break;
        case 3: conteudoFicha = criarFicha(registro, 1); conteudoAnexo = criarAnexo(registro, 2); anexo = true; break;
        case 4: conteudoFicha = criarFicha(registro, 4); anexo = false; break;
        case 5: conteudoFicha = criarFicha(registro, 1); conteudoAnexo = criarAnexo(registro,4); anexo = true; break;
        case 6: conteudoFicha = criarFicha(registro, 2); conteudoAnexo = criarAnexo(registro, 4); anexo = true; break;
    }

    if(anexo == true){ 

        local.appendChild(conteudoFicha);
        local.appendChild(conteudoAnexo);
    }else{

        local.appendChild(conteudoFicha);
    }
}

//cria o html de cada ficha
function criarFicha(reg, modelo){

    let folha = criarDiv('class', 'espaco');
    let ficha = criarDiv('class', 'ficha');
    let corpo = criarDiv('class',  'ficha_espaco');

    let cabecalho = criarDiv('class', 'ficha_cabecalho');
    let topo = criarCabecalho();
    let titulo = CriarTitulo(reg);

    let tabela = criarTabela(reg);
    let fotos = inserirFotosFichas(reg.fotos, modelo, false);

    let registro = inserirNumero(reg.posicao);

    cabecalho.appendChild(topo);
    cabecalho.appendChild(titulo);

    corpo.appendChild(cabecalho);
    corpo.appendChild(tabela);
    corpo.appendChild(fotos);
    corpo.appendChild(registro);

    ficha.appendChild(corpo);
    folha.appendChild(ficha);
    
    return folha;
}

//cria html de cada anexo
function criarAnexo(reg, modelo){

    let folha = criarDiv('class', 'espaco');
    let ficha = criarDiv('class', 'ficha');
    let corpo = criarDiv('class',  'ficha_espaco');

    let cabecalho = criarDiv('class', 'ficha_cabecalho');
    let topo = criarCabecalho();
    let titulo = CriarTitulo(reg);
    let fotos = inserirFotosAnexo(reg.fotos, modelo, true);
    let registro = inserirNumero(reg.posicao);

    cabecalho.appendChild(topo);
    cabecalho.appendChild(titulo);
    corpo.appendChild(cabecalho);
    corpo.appendChild(fotos);
    corpo.appendChild(registro);
    ficha.appendChild(corpo);
    folha.appendChild(ficha);
    
    return folha;
}

//cria e retorna o html do cabecalho das fichas
function criarCabecalho(){

    let cabecalho = criarDiv('class', 'ficha_cabecalho-logos');
    cabecalho = conteudoCabecalho(cabecalho);
    return cabecalho;
}

//cria e retorno o html da tabela de dados
function criarTabela(dados){
    
    let espaco = criarDiv('class', 'ficha_tabela');

    let tabela = document.createElement('table');
    tabela.setAttribute('class', 'ficha_tabela-estrutura');

    let corpo = document.createElement('tbody');
    corpo.setAttribute('class', 'ficha_tabela-corpo');

    for(i=0; i<6;i++){ let linha = criarLinha(dados, i); corpo.appendChild(linha);}

    tabela.appendChild(corpo);
    espaco.appendChild(tabela);

    return espaco;
}

//cria a tabela de fotos de acordo com o modelo e retorna o html
function inserirFotosFichas(fotos, modelo){

    let conteudo, anexo = false;
    let tabela = estruturaFotos();

    switch(modelo){

        case 1: conteudo = gerenciarInsercaoFotos(fotos, 1, anexo); break;
        case 2: conteudo = gerenciarInsercaoFotos(fotos, 3, anexo); break;// 2 fotos na ficha são diferentes de 2 em anexo 
        case 4: conteudo = gerenciarInsercaoFotos(fotos, 4, anexo); break;
    }

    tabela.appendChild(conteudo);
    return tabela;
}

function inserirFotosAnexo(fotos, modelo){

    let conteudo, anexo = true;
    let tabela = estruturaFotos();
    
    switch(modelo){

        case 1: conteudo = gerenciarInsercaoFotos(fotos, 1, anexo); break;
        case 2: conteudo = gerenciarInsercaoFotos(fotos, 2, anexo); break;
        case 4: conteudo = gerenciarInsercaoFotos(fotos, 4, anexo); break;
    }

    tabela.appendChild(conteudo);
    return tabela;
}