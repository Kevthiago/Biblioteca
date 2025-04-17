import React, { useState } from "react";
import "./Book.css";

function Book({ book, mudancaCategoria }) {
  const [mostrarDescricao, setMostrarDescricao] = useState(false);

  const lidarMudanca = (event) => {
    // Atualiza a categoria no estado global usando mudancaCategoria
    mudancaCategoria(book.id, event.target.value);
  };

  const toggleDescricao = () => {
    setMostrarDescricao((prev) => !prev);
  };

  return (
    <div
      className={`book-container ${
        mostrarDescricao ? "mostrar-descricao" : ""
      }`}
    >
      <div className="book-header">
        <h3>{book.title}</h3>
        <h4>Autores: {book.authors.join(", ")}</h4>

        {book.imageLinks && book.imageLinks.thumbnail && (
          <img
            src={book.imageLinks.thumbnail}
            alt={`Capa do livro: ${book.title}`}
          />
        )}
      </div>

      <p>
        <strong>Páginas:</strong> {book.pageCount}
      </p>

      <p>
        <strong>Gênero:</strong>{" "}
        {book.categories ? book.categories.join(", ") : "Sem gênero disponível"}
      </p>

      <button onClick={toggleDescricao} className="toggle-descricao-btn">
        {mostrarDescricao ? "OCULTAR DESCRIÇÃO" : "VER DESCRIÇÃO"}
      </button>

      <p className="descricao">
        <strong>Descrição:</strong> {book.description}
      </p>

      <select value={book.shelf || ""} onChange={lidarMudanca}>
        <option value="" disabled>
          Escolha uma Categoria
        </option>
        <option value="estouLendo">Estou Lendo</option>
        <option value="queroLer">Quero Ler</option>
        <option value="lido">Já Li</option>
      </select>
    </div>
  );
}

export default Book;
