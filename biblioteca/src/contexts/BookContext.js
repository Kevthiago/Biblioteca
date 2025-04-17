import React, { createContext, useState, useEffect } from "react";

export const BookContext = createContext();

export function BookProvider({ children }) {
  const [bookCategories, setBookCategories] = useState(() => {
    const savedCategories = localStorage.getItem("bookCategories");
    return savedCategories ? JSON.parse(savedCategories) : {};
  });

  useEffect(() => {
    localStorage.setItem("bookCategories", JSON.stringify(bookCategories));
  }, [bookCategories]);

  const updateCategory = (bookId, category) => {
    setBookCategories((prevCategories) => ({
      ...prevCategories,
      [bookId]: category,
    }));
  };

  return (
    <BookContext.Provider value={{ bookCategories, updateCategory }}>
      {children}
    </BookContext.Provider>
  );
}
