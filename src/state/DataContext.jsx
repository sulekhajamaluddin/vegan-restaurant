//Node modules
import { createContext, useContext, useState } from "react";

//Project files
import data from "../data.json";

//Create the context
const Context = createContext(null);

//Create the provider for the parent(App.jsx)
export function DataProvider({ children }) {
  //State
  const [categories, setCategories] = useState(data.categories);
  const [products, setProducts] = useState(data.products);

  //Properties
  const values = { categories, setCategories, products, setProducts };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}

//Create the custom hook for the children

export function useData() {
  const context = useContext(Context);
  //Safeguard
  if (!context)
    throw new Error("useData must be used within a <CategoriesProvider>");

  return context;
}
