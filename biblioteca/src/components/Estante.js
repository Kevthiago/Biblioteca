import React from "react";
import Book from "./Book";
import "./Estante.css";

function Estante({ categoria, books, mudancaCategoria }) {
  const titleEstante =
    categoria === "estouLendo"
      ? "Estou Lendo"
      : categoria === "queroLer"
      ? "Quero Ler"
      : categoria === "lido"
      ? "Livros Lidos"
      : "Estante";

  return (
    <div className="estante-container">
      <h2 className="estante-title">{titleEstante}</h2>
      <div className="estante-books">
        {books.length === 0 ? (
          <p className="estante-empty">Ainda não há livros nessa estante.</p>
        ) : (
          books.map((book) => (
            <Book
              key={book.id}
              book={book}
              mudancaCategoria={mudancaCategoria}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Estante;
