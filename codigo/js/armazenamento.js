//Configura o armazenamento no localStorage do navegador
function setarArmazenamento(dados, fonte){

    localStorage.setItem("armazenamento", "");
    criarBotoesArmazenamento();
    if(fonte){salvarDados(dados);}
}

//Cria o botão de importar a partir do navegador
function botaoImportar(){

    let local = document.getElementsByClassName('cabecalho_botoes');
    local = local[0];

    let importar = document.createElement('button');
    importar.setAttribute('id', 'importar');
    importar.innerText="IMPORTAR";
    local.appendChild(importar);
    importar.addEventListener("click", importarDoArmazenamento())
}

//Cria e configura os botões de limpar armazenamento e salvar no LocalStorage
function criarBotoesArmazenamento(){

    let local = document.getElementsByClassName('baixar');
    local = local[0];

    let salvar = document.createElement('button');
    salvar.setAttribute('id', 'salvar');
    salvar.innerText="SALVAR";
    local.appendChild(salvar);
    salvar.addEventListener('click', () => {salvarDados(bancoDeDados)})
    
    let limpar = document.createElement('button');
    limpar.setAttribute('id', 'limpar');
    limpar.innerText="LIMPAR";
    local.appendChild(limpar);
    limpar.addEventListener('click', () => {limparArmazenamento()});
}

//Essas funções são responsáveis pelas ações de manipulação do Armazenamento no LocalStorage
function salvarDados(dados){ limparArmazenamento(); localStorage.setItem("armazenamento", JSON.stringify(dados)); alert("Dados Salvos Temporariamente")}

function importarDoArmazenamento(){ bancoDeDados = JSON.parse(localStorage.getItem('armazenamento')); alert("Dados importados")}

function limparArmazenamento(){ localStorage.removeItem('armazenamento'); alert("Dados Removidos do Armazenamento")}
