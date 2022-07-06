
//inicia o código sem localhost ou liveserver, e insere os botoes para a sequencia
function iniciar(){ 
    let botao = document.getElementById('inserir'); importarListaPer();
    botao.addEventListener( "click", () =>{criarStart();}
    )}

async function main(){
    
    //import data from CSV and generate a object array database
    const bancoDeDados = await obterDados()

    //console.log(bancoDeDados)
    //generate all html tables
    generateTables(bancoDeDados);

    //cria os htmls das fichas
    // criarHTMLpagina(bancoDeDados);

    //dowload files
    baixar.addEventListener('click', () =>{ 
        
        /*if(fichasVerificadas == true){ 
            baixarFichasPdf(bancoDeDados)
        ;}else(alert('Opa! Você não verificou todas as fichas! Antes de baixar olhe todas, por favor!'))*/

        tableDowload();
    });
}