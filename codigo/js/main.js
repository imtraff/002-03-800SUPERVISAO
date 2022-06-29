//inicia o código sem localhost ou liveserver, e insere os botoes para a sequencia
function iniciar(){
    
    let botao = document.getElementById('inserir');
    botao.addEventListener( "click", () =>{criarStart(true);})

    let baixar = document.getElementById('importar');
    baixar.addEventListener("click", () => {criarStart(false)})
}

let bancoDeDados = new Array;

async function main(fonte){

    //importa os dados do CSV e retorna um banco de dados de objetos
    if(fonte){ bancoDeDados = await obterDados();
    
    //importa os dados do armazenamento do navegador
    }else{ importarDoArmazenamento();}

    //cria os htmls das fichas
    criarHTMLpagina(bancoDeDados);

    //Gerencia o armazenamento de dados no navegador
    setarArmazenamento(bancoDeDados, fonte);

    //engine da inteface gráfica do app
    interfaceEngine(bancoDeDados);

    //exporta as fichas em formato pdf
    baixar.addEventListener('click', () =>{ 
        
        if(fichasVerificadas == true){ 
            baixarFichasPdf(bancoDeDados);
        }else(alert('Opa! Você não verificou todas as fichas! Antes de baixar olhe todas, por favor!'))
    
    });  
}