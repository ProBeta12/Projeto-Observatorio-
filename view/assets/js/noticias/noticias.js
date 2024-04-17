

// Função para obter o conteúdo de um arquivo HTML
async function obterConteudoHTML() {
    try {
        // Faz uma solicitação para obter o conteúdo do arquivo HTML
        const response = await fetch('/view/components/noticias/noticias.html');
    
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
        const noticias = document.querySelector('footer');
        // Insere o conteúdo HTML após carrosel
        // document.body.insertAdjacentHTML('beforeend', conteudoHTML);
        noticias.insertAdjacentHTML('beforebegin', conteudoHTML);
        // paginaçao francisco
           // Dados para exemplificar
const dados = Array.from({ length: 100 }, (_, i) => i + 1);

// Função para exibir os dados de uma determinada página
function exibirDados(pagina, tamanhoPagina) {
    const inicio = (pagina - 1) * tamanhoPagina;
    const fim = inicio + tamanhoPagina;
    const dadosPagina = dados.slice(inicio, fim);

    const containerDados = document.getElementById('dados');
    containerDados.innerHTML = ''; // Limpa os dados anteriores

    dadosPagina.forEach(dado => {
        const divDado = document.createElement('div');
        divDado.textContent = `Dado ${dado}`;
        containerDados.appendChild(divDado);
    });
}

// Função para criar os botões de navegação
function criarBotoesPaginacao(totalPaginas) {
    const containerPaginacao = document.getElementById('paginacao');
    containerPaginacao.innerHTML = ''; // Limpa os botões de navegação anteriores

    for (let i = 1; i <= totalPaginas; i++) {
        const botao = document.createElement('button');
        botao.textContent = i;
        botao.addEventListener('click', () => {
            exibirDados(i, 10); // Exibe os dados da página clicada
        });
        containerPaginacao.appendChild(botao);
    }
}

// Exibe a primeira página por padrão
exibirDados(1, 10); // Exibe os dados da primeira página com 10 itens por página

// Cria os botões de navegação com base no número total de páginas
const totalPaginas = Math.ceil(dados.length / 10); // Calcula o número total de páginas
criarBotoesPaginacao(totalPaginas); // Cria os botões de navegação
 


    }
    
    // Chama a função principal
    main();