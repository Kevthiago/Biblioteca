import React from "react";
import "./SearchBar.css";
import fundo from "../img/pexels-bopopics-14747971.jpg";
import lupa from "../img/lupa.png";

// Componente SearchBar que recebe as props
function SearchBar({ searchQuery, setSearchQuery }) {
  // Função para atualizar a consulta de pesquisa
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value); // Atualiza o estado de searchQuery com a entrada do usuário
  };

  /*Constante para colocar o background no container, por algum motivo não estava dando certo
  com uso de BACKGROUND-IMAGE URL pelo arquivo css */
  const searchContainerStyle = {
    backgroundImage: `url(${fundo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="search-container" style={searchContainerStyle}>
      <div className="search-title">
        <h2>Pesquisar Livro</h2>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquise por título ou autor"
          value={searchQuery} // O valor do input é controlado pelo estado
          onChange={handleInputChange} // Atualiza o estado sempre que o valor do input mudar
        />
        <img src={lupa} alt="Lupa de pesquisa" />
      </div>
    </div>
  );
}

export default SearchBar;
