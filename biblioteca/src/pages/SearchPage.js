import React, { useEffect, useState, useContext } from "react";
import { getBooks } from "../services/bookService";
import Book from "../components/Book";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { BookContext } from "../contexts/BookContext"; // Importa o contexto
import "./pagesCSS/search.css";

function SearchPage() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Acessa o contexto
  const { bookCategories, updateCategory } = useContext(BookContext);

  useEffect(() => {
    async function fetchBooks() {
      const booksData = await getBooks();
      setBooks(booksData);
    }
    fetchBooks();
  }, []);

  // Função para lidar com a mudança de categoria do livro usando o contexto
  const mudancaCategoria = (id, novaCategoria) => {
    updateCategory(id, novaCategoria); // Atualiza a categoria no contexto
    setBooks((livros) =>
      livros.map((livro) =>
        livro.id === id ? { ...livro, shelf: novaCategoria } : livro
      )
    );
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (book.authors &&
        book.authors.some((author) =>
          author.toLowerCase().includes(searchQuery.toLowerCase())
        ))
  );

  return (
    <div>
      <Header
        nomePagina="Estante de Livros"
        onClick={() => (window.location.href = "/")}
      />

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="main">
        <ul>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <li key={book.id}>
                <Book
                  book={{ ...book, shelf: bookCategories[book.id] || "" }}
                  mudancaCategoria={mudancaCategoria}
                />
              </li>
            ))
          ) : (
            <p>Nenhum livro encontrado.</p>
          )}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
