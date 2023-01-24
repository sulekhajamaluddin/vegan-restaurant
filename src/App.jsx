//Node Modules
import { Routes, Route } from "react-router-dom";

//Project Files
import "./styles/styles.css";
import { HomePage, Category, Product, Contact } from "./pages";
import { Navbar, Footer } from "./components";
import { DataProvider } from "./state/DataContext";
import { FormProvider } from "./state/FormContext";

/**
 * Side effects -1
 * This project does not need a form provider,
 * you can work on a local state inside the form.
 *
 * You only use global state when you need to share data
 * between multiple components instead of just 1
 */
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <DataProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product" element={<Product />} />
          <Route
            path="/contact"
            element={
              <FormProvider>
                <Contact />
              </FormProvider>
            }
          />
          <Route path="*" element={<div>This page does not exist!!</div>} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}
