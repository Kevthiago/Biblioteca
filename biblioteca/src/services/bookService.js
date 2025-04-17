// Define uma função assíncrona para buscar os livros
export async function getBooks() {
  try {
    // Faz uma requisição à API para buscar os livros
    const response = await fetch(
      `https://api-books-dot-api-samples-423102.uc.r.appspot.com/api/books`,
      {
        headers: {
          // Adiciona um cabeçalho de autorização com um token
          Authorization: "Bearer 12120421",
        },
      }
    );

    // Verifica se a resposta da API foi bem-sucedida
    if (!response.ok) {
      // Se a resposta não for OK, lança um erro
      throw new Error("Erro ao buscar livros");
    }

    // Converte a resposta da API em JSON
    const data = await response.json();
    // Exibe os dados dos livros no console para depuração
    console.log("Dados dos livros:", data);
    // Retorna os dados dos livros
    return data;
  } catch (error) {
    // Se ocorrer um erro durante a requisição ou o processamento, exibe o erro no console
    console.error(error);
    // Retorna um array vazio para que a aplicação não quebre
    return [];
  }
}
