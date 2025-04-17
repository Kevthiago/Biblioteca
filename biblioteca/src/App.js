import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import { BookProvider } from "./contexts/BookContext";

function App() {
  return (
    // Envolva todo o Router dentro do BookProvider
    <BookProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </BookProvider>
  );
}

export default App;
