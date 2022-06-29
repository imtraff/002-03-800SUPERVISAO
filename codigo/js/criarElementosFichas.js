//Contém os processos de construção dos elementos da página

//Cria e retorna o html do conteudo do cabecalho
function conteudoCabecalho(cabecalho){

    let antt = document.createElement("img");
    antt.setAttribute("src", "codigo/imgs/antt.png");
    antt.setAttribute('id', "botoes_img-antt");

    let titulo = document.createElement('p');
    titulo.setAttribute('class', "ficha_cabecalho-principal");
    titulo.innerText = "Acompanhamento diário na obra do Contorno de Florianópolis";

    let logo = document.createElement('img');
    logo.setAttribute('src', "codigo/imgs/logo.JPG");
    logo.setAttribute('id', "botoes_img-imtraff");

    cabecalho.appendChild(antt);
    cabecalho.appendChild(titulo);
    cabecalho.appendChild(logo);
    
    return cabecalho;
}

//Cria e retorna o html do conteudo Titulo
function CriarTitulo(reg){

    let div = criarDiv('class', 'ficha_cabecalho-titulo');

    let lista = document.createElement('ul');
    lista.setAttribute('class', 'ficha_cabecalho-lista');

    let linha1 = document.createElement('li');
    linha1.setAttribute('class', 'ficha_cabecalho-linha');
    linha1.innerText = 'Concessionária: Arteris Autopista Litoral Sul';

    let linha2 = document.createElement('ul');
    linha2.setAttribute('class', 'ficha_cabecalho-linha');
    linha2.innerHTML = "Rodovia: BR-101/SC&nbsp; &nbsp; "+reg.obra+" - ETAPA: "+reg.etapa;

    lista.appendChild(linha1);
    lista.appendChild(linha2);
    div.appendChild(lista);

    return div;
}

//cria uma div com atributos definidos de id ou classe, e retorna o html
function criarDiv(tipo, classe){

    let div = document.createElement('div');
    div.setAttribute(tipo, classe);
    return div;
}

//cria a tabela e suas respectivas linhas
function criarConteudoTabela(dados){

    let corpo = document.createElement('tbody');
    corpo.setAttribute('class', 'ficha_tabela-corpo');

    for(i=0; i<6; i++){ let linha = criaLinha(dados,i); corpo.appendChild(linha);}
}

//Cria cada Linha considerando os quais dados inserir a partir do número da linha
function criarLinha( dados, num){

    let escrever = new Array; let mesclar = false;
    let linha = document.createElement('tr');
    linha.setAttribute('class', 'ficha_tabela-linha');

    switch(num){

        case 0: escrever = ['COD: ',dados.codigo,'','KM: ',dados.km]; break;
        case 1: escrever = ["LATITUDE: ", dados.lat, '', 'LONGITUDE: ', dados.long ]; break;
        case 2: escrever = ['DATA: ', dados.data, '', 'HORA: ', dados.hora]; break;
        case 3: escrever = ['SERVIÇO: ', dados.servico, '', 'SITUAÇÃO: ', dados.situObra]; break;
        case 4: escrever = ['NORMAS: ', dados.naNorma, '', 'PROJETO: ', dados.projeto]; break;
        case 5: escrever = ['OBS: ', dados.obs]; mesclar = true; break;
    }

    if(mesclar == false){ escrever.forEach( texto => { 

        let celula = criarCelula(texto, mesclar); linha.appendChild(celula);
    })}
    else{ 

        let desc = criarCelula(escrever[0], false); 
        let obs  = criarCelula(escrever[1], mesclar);

        linha.appendChild(desc); linha.appendChild(obs);
    }

    return linha;
}

//Cria cada Célula e retorna o html
function criarCelula(text, mesclar){

    let celula = document.createElement('td');
    celula.innerText = text;
    if(text == ''){celula.setAttribute('class', 'ficha_tabela-celulaVazia')}
    else{celula.setAttribute('class', 'ficha_tabela-celula')}
    if(mesclar == true){ celula.setAttribute('colspan', '5')}

    return celula;
}

//cria o espaço e cabecalho para a tabela de fotos
function estruturaFotos(){

    let tabela = document.createElement('table');
    tabela.setAttribute('class', 'ficha_fotos-tabela');

    let cabecalho = document.createElement('thead');
    cabecalho.setAttribute('class', 'ficha_fotos-cabecalho');

    let linha = document.createElement('tr');
    linha.setAttribute('class', 'ficha_fotos-linha');

    let texto = document.createElement('td');
    texto.setAttribute('class', 'fichas_fotos-texto');
    texto.innerText = 'IMAGENS DE CAMPO';

    linha.appendChild(texto);
    cabecalho.appendChild(linha);
    tabela.appendChild(cabecalho);

    return tabela;
}

//Insere um referencial númerico em relação as linhas do csv
function inserirNumero(num){

    if(num == false){ num = ""}

    let div = criarDiv('class', 'numeracao');

    let p = document.createElement('p');
    p.setAttribute('class', 'numeracao_valor');
    p.innerText = num;

    div.appendChild(p); return div;
}