
//Gerencia a inserção de fotos no documento e retorna o html
function gerenciarInsercaoFotos(fotos, modelo, anexo){

    let quadros;

    switch(modelo){

        case 1: quadros = inserirImagens(fotos, modelo,'ficha_fotos-foto1', anexo); break;
        case 2: quadros = inserirImagens(fotos, modelo,'ficha_fotos-foto2', anexo); break;
        case 3: quadros = inserirImagens(fotos, modelo,'ficha_fotos-foto3', anexo); break;
        case 4: quadros = inserirImagens(fotos, modelo,'ficha_fotos-foto4', anexo); break;
    }

    return quadros;
}

//função que define como serao os modelos e queantidades de fotos
function inserirImagens(pic, model, classe, anexo){

    let linhas;
    let corpo = document.createElement('tbody');
    corpo.setAttribute('class', 'fichas_fotos-corpo');

    switch (model){

        case 1: linhas = criarLinhaFotos(pic, model, classe, 1, anexo); break;
        case 2: linhas = criarLinhaFotos(pic, model, classe, 2, anexo); break;
        case 3: linhas = criarLinhaFotos(pic, 2, classe, 2, anexo); break;
        case 4: linhas = criarLinhaFotos(pic, model, classe, 2, anexo); break;
    }

    linhas.forEach(linha => { corpo.appendChild(linha)});
    return corpo;
}

//função que constroi as linhas de fotos e retorna o html das mesmas
function criarLinhaFotos(pic, model, classe, quantidade, anexo){

    let linhas = new Array, linha;
    let posicoes = definirFotos(pic, model, anexo);
    let posicao = posicoes[0], fim = posicoes[1];

    for(i=0; i<quantidade; i++){
        
        linha = linhasFotos(pic, classe, posicao, fim, model)
        linhas.push(linha);

        if(model != 4){ posicao += 1}else{posicao += 2}
    }

    return linhas;
}

//gerencia a criação de linhas de fotos e retorna o html
function linhasFotos(pic, classe, posicao, fim, modelo){

    //console.log(pic, classe, posicao, fim, modelo);

    let linha = document.createElement('tr');
    linha.setAttribute('class', 'fichas_fotos-linha');
    
    if(modelo != 4){fim = posicao+1;}else{ fim = posicao+2;}

    while(posicao<fim){

        let foto = criarQuadro(pic[posicao], classe);
        linha.appendChild(foto); posicao++;
    }

    return linha;
}

//função que configura a seleção de fotos
function definirFotos(fotos, modelo, anexo){

    let inicio, fim;
    let posicoes = new Array;
    let qtde = Object.keys(fotos).length;

    switch(qtde){

        case 1: inicio = 0; fim = 1; break;
        case 2: if(anexo == false){inicio = 0; fim = 1;}else{inicio = 1; fim = 2};break;
        case 3: if(anexo == false){inicio = 0; fim = 1;}else{inicio = 1; fim = 3};break;
        case 4: inicio = 0; fim = 4;break;
        case 5: if(anexo == false){inicio = 0; fim = 1;}else{inicio = 1; fim = 5};break;
        case 6: if(anexo == false){inicio = 0; fim = 2;}else{inicio = 2; fim = 6};break;
    }

    posicoes.push(inicio); posicoes.push(fim);

    return posicoes;
}

//função que cria os quadros de fotos e retorna os htmls
function criarQuadro(pic, classe){

    let celula = document.createElement('td');
    celula.setAttribute('class', 'fichas_fotos-celula');

    let foto = document.createElement('img');
    foto.setAttribute('src', pic);
    foto.setAttribute('class', classe);

    celula.appendChild(foto);
    return celula;
}