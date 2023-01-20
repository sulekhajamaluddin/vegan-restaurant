//Node modules
import { createContext, useContext, useState } from "react";

//Project files
import data from "../data.json";

const Context = createContext(null);

export function DataProvider({ children }) {
  const [categories, setCategories] = useState(data.categories);
  const [products, setProducts] = useState(data.products);

  const values = { categories, setCategories, products, setProducts };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

export function useData() {
  const context = useContext(Context);
  if (!context)
    throw new Error("useData must be used within a <CategoriesProvider>");

  return context;
}
