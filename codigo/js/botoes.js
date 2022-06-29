//remove o botao importa do armazenamento e cria o botao de gerar fichas a partir do CSV
function criarStart(fonte){

    //html final
    //<button id='start'> GERAR FICHAS</button>

    let local = document.getElementsByClassName('cabecalho_botoes');
    local = local[0];

    let botaoArmazenamento = document.getElementById('importar');
    if(botaoArmazenamento){botaoArmazenamento.remove();}

    let botao = document.createElement('button');
    botao.setAttribute('id', 'start');
    botao.innerText="GERAR FICHAS";

    local.appendChild(botao);

    botao.addEventListener('click', ()=> { criarBaixar(); criarVerificado(); main(fonte);})
}

//cria botao de baixar
function criarBaixar(){
    //<div class="baixar"><button id="baixar">BAIXAR</button></div>

    let existente = document.getElementById('baixar');

    existente = verificarExistencia(existente);

    if(existente == true){ return }
    else{
        let local = document.getElementById('visivel');

        let espaco = document.createElement('div');
        espaco.setAttribute('class', 'baixar');

        let botao = document.createElement('button');
        botao.setAttribute('id', 'baixar');
        botao.innerText = 'BAIXAR';

        espaco.appendChild(botao);
        local.appendChild(espaco);
    }
}

//cria o botao de gerar ficha e seu gatilho
function criarVerificado(){

    //html final
    /*<div class="verificado">
        <input type="checkbox" class="verificado-nao"><label class="verificado-nao">VERIFICADO</label>
    </div>*/

    let existente = document.querySelector('.verificado');

    existente = verificarExistencia(existente);

    if(existente == true){ return }
    else{

        let local = document.getElementById('local');

        let espaco = document.createElement('div');
        espaco.setAttribute('class', 'verificado');

        let botao = document.createElement('input');
        botao.setAttribute('type', "checkbox");
        botao.setAttribute('class', "verificado-nao");

        let texto = document.createElement('label');
        texto.setAttribute('class', 'verificado-nao');
        texto.innerText = "VERIFICADO";

        espaco.appendChild(botao);
        espaco.appendChild(texto);
        local.appendChild(espaco);

        botao.addEventListener('click', ()=>{ setarVerificado(texto)})
    }

}

let fichasVerificadas = false;

function setarVerificado(botao){

    botao.setAttribute("class", "verificado-sim");
    fichasVerificadas = true;
}


function verificarExistencia(tst){

    if(tst == null){return false;}
    else{return true;}
}