// Função para obter o conteúdo de um arquivo HTML
async function obterConteudoHTML() {
try {
    // Faz uma solicitação para obter o conteúdo do arquivo HTML
    const response = await fetch('/view/components/footer.html');

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
    const slider = document.querySelector('header');
    // Insere o conteúdo HTML após header
    // document.body.insertAdjacentHTML('beforeend', conteudoHTML);
    slider.insertAdjacentHTML('afterend', conteudoHTML);
}

// Chama a função principal
main();