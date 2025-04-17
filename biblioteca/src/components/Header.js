import React from "react";
import "./Header.css";
import logo from "../img/livro.png";

// O componente recebe 'nomePagina' e 'onClick' como props
const Header = ({ nomePagina, onClick }) => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="header-title">
        <h1>Biblioteca de Alexandria</h1>
      </div>
      <div className="acesso">
        {/* Botão dinâmico usando as props */}
        <button onClick={onClick}>{nomePagina}</button>
      </div>
    </header>
  );
};

export default Header;
