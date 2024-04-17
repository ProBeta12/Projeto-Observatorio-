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
    document.body.insertAdjacentHTML('beforeend', conteudoHTML);
  }
  
  // Chama a função principal
  main();




  