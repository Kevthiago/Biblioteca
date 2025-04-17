import { StrictMode } from "react"; // Importa o StrictMode do React para ajudar na identificação de problemas
import { createRoot } from "react-dom/client"; // Importa a função createRoot para criar um root no React 18
import App from "./App"; // Importa o componente principal da aplicação

// Obtém o elemento HTML com o ID "root", onde a aplicação será renderizada
const rootElement = document.getElementById("root");

// Cria um root React a partir do elemento HTML
const root = createRoot(rootElement);

// Renderiza a aplicação dentro do StrictMode
root.render(
  <StrictMode>
    <App /> {/* Renderiza o componente App */}
  </StrictMode>
);
