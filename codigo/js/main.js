
//inicia o código sem localhost ou liveserver, e insere os botoes para a sequencia
function iniciar(){ 
    let botao = document.getElementById('inserir');
    botao.addEventListener( "click", () =>{criarStart();}
    )}

async function main(){
    
    //importa os dados do CSV e retorna um banco de dados de objetos
    const bancoDeDados = await obterDados();

    //cria os htmls das fichas
    /* criarHTMLpagina(bancoDeDados);

    //exporta as fichas em formato pdf
    baixar.addEventListener('click', () =>{ 
        
        if(fichasVerificadas == true){ 
            baixarFichasPdf(bancoDeDados)
        ;}else(alert('Opa! Você não verificou todas as fichas! Antes de baixar olhe todas, por favor!'))
    
    });  */
}