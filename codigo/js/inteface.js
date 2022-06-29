
// Cria e gerencia a interface de interação para edição de dados no app
function interfaceEngine(memoria){

    let conjuntosDados = configurarElementosHTML(); 
    conjuntosDados.forEach(conjunto =>{ conjunto.forEach(dado => {gatilhoFicha(dado, memoria)})});
}

//Cria e retorna um banco de dados dos HTMLs da pagina
function configurarElementosHTML(){
    let i = 0;
    let celulas = Array(document.getElementsByClassName('ficha_tabela-celula'));
    celulas = celulas[0];

    let tabelas = new Array;

    while(i<celulas.length-1){

        let texto = celulas[i].innerText;

        if(texto == 'COD:'){ 
            
            let tabela = criarListasHtml(i, celulas);
            tabelas.push(tabela); i+=22;
        }
        else{ i++;}
    }

    return tabelas;
}

//Cria uma lista com os htmls do conjunto de dados
function criarListasHtml(i, celulas){

    let lista = new Array;

    for(j=i+1; j<i+22;j+=2){ lista.push(celulas[j])}

    return lista;
}

//Adciona os gatilhos para clique e gerencia a inserção de dados manuais
function gatilhoFicha(dado, memoria){

    dado.addEventListener('click', elemento => {
        
        let codigo = elemento.path[0];
        codigo.innerHTML = "";
        
        let campo = document.createElement('input');
        campo.classList.add('ficha_tabela-input');
        codigo.appendChild(campo);

        let posicaoMemoria = localizarDado();
        inserirDados(codigo, campo, posicaoMemoria, memoria);
    })
}

//Encontra o objeto e dado correspondente e retorna os valores numéricos para 
//localizar e alterar o valor na memória
function localizarDado(){
    let i = j = 0;
    let achei = false;
    let posicao = new Array;
    let tabelas = Array(document.getElementsByClassName('ficha_tabela-corpo')); tabelas = tabelas[0];

    while(i<tabelas.length && achei == false){

        let celulas = tabelas[i].getElementsByClassName('ficha_tabela-celula');
        
        while(j<celulas.length && achei == false){

            let valor = celulas[j].querySelector('.ficha_tabela-input');
            if(valor != null){ posicao = [ i , (j-1)/2]; achei = true;}
            j++;
        }j = 0; i++;
    }

    return posicao;
}

//Coleta os dados inseridos manualmente e os insere nas fichas e banco de dados
function inserirDados(codigo, campo, posicao, memoria){

    codigo.addEventListener('keypress', function(e){if(e.key ==='Enter'){

        let n = posicao[0];
        valor = campo.value; campo.remove();

        if(valor == "X" || valor == 'x'){ 

            valor = memoria[n].erroNorma+memoria[n].tipoInt+memoria[n].tipoIrregularidade;
            console.log(memoria[n].erroNorma,memoria[n].tipoInt,memoria[n].tipoIrregularidade)
        }
        
        codigo.innerText = valor;

        alterarMemoria(valor, posicao, memoria);
    }})
}

//Altera o valor editado diretamente na memoria do sistema
function alterarMemoria(valor, posicao, memoria){

    let numObjeto = posicao[0], numElemento = posicao[1];

    switch(numElemento){

        case 0: memoria[numObjeto].codigo = valor; break;
        case 1: memoria[numObjeto].km = valor; break;
        case 2: memoria[numObjeto].lat = valor; break;
        case 3: memoria[numObjeto].long = valor; break;
        case 4: memoria[numObjeto].data = valor; break;
        case 5: memoria[numObjeto].hora = valor; break;
        case 6: memoria[numObjeto].servico = valor; break;
        case 7: memoria[numObjeto].situObra = valor; break;
        case 8: memoria[numObjeto].naNorma = valor; break;
        case 9: memoria[numObjeto].nProjeto = valor; break;
        case 10: memoria[numObjeto].obs = valor; break;
    }
}