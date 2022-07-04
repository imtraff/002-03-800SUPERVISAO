//PDF register dowload code
//Gera os arquivos pdfs das fichas e baixa os mesmos
function baixarFichasPdf(dados){

    let janela = window.open('', '','width=794, height=1123');
    janela.document.write('<!DOCTYPE html>');

    let pagina = document.createElement('html');
    pagina.setAttribute('lang', 'pt-br');
    pagina.setAttribute('id', 'impressao');

    let head = pdfCabecalhoHtml('fichas de obras');
    pagina.appendChild(head);
        
    dados.forEach( linha => {

        linha.posicao = false;
        let fichas = criarFichasPDF(linha);

        pagina.appendChild(fichas);
    });
    
    janela.document.write(pagina.innerHTML);
}

//cria cabecalho html da página usada para criar o pdf
function pdfCabecalhoHtml(nome){

    let cabecalho = document.createElement('head');
    let titulo = document.createElement('title');
    titulo.innerText = nome;

    let pt1 = '<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0">';
    let pt2 = '<meta http-equiv="X-UA-Compatible" content="ie=edge"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';
    let pt3 = '<!--ESTILOS GERAIS--><link rel="stylesheet" href="codigo/css/reset.css"><link rel="stylesheet" href="codigo/css/base.css">';
    let pt4 = '<!--CABECALHO--><link rel="stylesheet" href="codigo/css/cabecalho.css"><!--FICHAS--><link rel="stylesheet" href="codigo/css/ficha.css">';
    let pt5 = '<link rel="stylesheet" href="codigo/css/tabela.css"><link rel="stylesheet" href="codigo/css/fotos.css"><!--RODAPE--><link rel="stylesheet" href="codigo/css/corpo.css">';

    cabecalho.innerHTML = pt1+pt2+pt3+pt4+pt5;
    cabecalho.appendChild(titulo);

    return cabecalho;
}

//Coordena a criação e inserção dos htmls de acordo com a qtde de fotos para os pdfs
function criarFichasPDF(registro){

    let local = document.createElement('body'); let conteudoFicha, conteudoAnexo, anexo = false;

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

    return local;
}

//Excel dowload code

//Generate and dowload a xlsx table from html table
function tableDowload(){

    let tables = document.getElementsByClassName("table_structure"); let size = Object.keys(tables).length; let i=0;

    let table = tables[0];

    let workbook = XLSX.utils.table_to_book( table, {sheet: "shit"});

    XLSX.writeFile(workbook, "agrvai.xlsx")
}