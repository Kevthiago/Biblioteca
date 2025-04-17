import React, { useContext, useEffect, useState } from "react";
import { getBooks } from "../services/bookService";
import "./pagesCSS/main.css";
import Estante from "../components/Estante";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Category from "../components/Category";
import { BookContext } from "../contexts/BookContext";

// Componente principal da página
function MainPage() {
  // Obtém dados do contexto global para acessar categorias dos livros e atualizá-las
  const { bookCategories, updateCategory } = useContext(BookContext);

  // Estado local para armazenar a lista de livros carregados
  const [books, setBooks] = useState([]);
  // Estado local para armazenar a categoria selecionada no momento (filtragem)
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Hook para carregar os livros ao montar o componente ou quando 'bookCategories' mudar
  useEffect(() => {
    async function fetchBooks() {
      const booksData = await getBooks(); // Busca os livros da API
      const updatedBooksData = booksData.map((book) => ({
        ...book, // Mantém os dados originais do livro
        shelf: bookCategories[book.id] || "", // Associa o livro a uma estante, se houver
      }));
      setBooks(updatedBooksData); // Atualiza o estado com os livros processados
    }
    fetchBooks(); // Executa a função de busca
  }, [bookCategories]); // Reexecuta caso 'bookCategories' mude

  // Filtra os livros para cada estante com base na propriedade 'shelf'
  const estouLendo = books.filter((book) => book.shelf === "estouLendo");
  const queroLer = books.filter((book) => book.shelf === "queroLer");
  const lido = books.filter((book) => book.shelf === "lido");

  // Monta as estantes para exibição
  const filtrarEstantes = [
    { categoria: "estouLendo", books: estouLendo }, // Estante "Estou Lendo"
    { categoria: "queroLer", books: queroLer }, // Estante "Quero Ler"
    { categoria: "lido", books: lido }, // Estante "Já Li"
  ]
    .map((shelf) => {
      // Se uma categoria foi selecionada, filtra a estante correspondente
      if (selectedCategory) {
        return shelf.categoria ===
          (selectedCategory === "Estou Lendo"
            ? "estouLendo"
            : selectedCategory === "Quero Ler"
            ? "queroLer"
            : selectedCategory === "Já Li"
            ? "lido"
            : "")
          ? shelf
          : null; // Retorna null se a categoria não corresponder
      }
      return shelf; // Se nenhuma categoria foi selecionada, mantém todas as estantes
    })
    .filter((shelf) => shelf !== null); // Remove entradas nulas (caso filtradas)

  // Manipula cliques nas categorias
  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // Se a categoria já estiver selecionada, desativa o filtro
    } else {
      setSelectedCategory(category); // Seleciona uma nova categoria para filtrar
    }
  };

  return (
    <div>
      {/* Cabeçalho da página com título e link */}
      <Header
        nomePagina="Ir para Pesquisa"
        onClick={() => (window.location.href = "/search")}
      />

      {/* Componente para exibir e manipular categorias */}
      <Category onCategoryClick={handleCategoryClick} />

      {/* Container principal das estantes */}
      <div className="main">
        {filtrarEstantes.map((shelf) => (
          <Estante
            key={shelf.categoria} // Chave única para cada estante
            categoria={shelf.categoria} // Nome da categoria (estante)
            books={shelf.books} // Livros pertencentes à estante
            mudancaCategoria={updateCategory} // Função para alterar a categoria de um livro
          />
        ))}
      </div>

      {/* Rodapé fixo da página */}
      <Footer />
    </div>
  );
}

export default MainPage;
