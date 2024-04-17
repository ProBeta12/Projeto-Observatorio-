async function obterConteudoHTML() {
    try {
        // Faz uma solicitação para obter o conteúdo do arquivo HTML
        const response = await fetch('/view/components/home/carrossel.html');
  
        // Verifica se a resposta é bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo.');
        }
  
        // Extrai o texto da resposta
        const html = await response.text();
  
        // Retorna o conteúdo HTML
        return html;
    } catch (error) {
        console.error('Erro:', error);
        return null;
    }
  }
  
  
  async function main() {
    const conteudoHTML = await obterConteudoHTML();
    const carrossel = document.querySelector('footer');
    // Insere o conteúdo HTML após o cabeçalho
    carrossel.insertAdjacentHTML('beforebegin', conteudoHTML);
    let cont = 1;
    document.getElementById("radio1").checked = true;

    setInterval(function(){
        nextImg();
    }, 4000);

    function nextImg(){
        cont++;
        if(cont > 3){
            cont = 1;
        }
        document.getElementById("radio" + cont).checked = true;
    }
  }
  
  // Chama a função principal
  main();