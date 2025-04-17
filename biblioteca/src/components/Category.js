import React from "react";
import "./Category.css";
import fundo from "../img/pexels-bopopics-14747971.jpg";

function Category({ onCategoryClick }) {
  const categories = ["Estou Lendo", "Quero Ler", "Já Li"];

  /*Constante para colocar o background no container, por algum motivo não estava dando certo
  com uso de BACKGROUND-IMAGE URL pelo arquivo css */
  const categoryContainerStyle = {
    backgroundImage: `url(${fundo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="categories" style={categoryContainerStyle}>
      <div className="categories-text">
        <h3>Filtre as estantes clicando nos botões correspondentes.</h3>
        <h4>Tire o filtro clicando no mesmo botão.</h4>
      </div>
      <div className="categories-buttons">
        {categories.map((category) => (
          <button key={category} onClick={() => onCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Category;
