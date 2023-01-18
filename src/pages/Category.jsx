//Node Modules
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//Project Files
import { ProductListItem } from "../components";
import { useData } from "../state/DataContext";

export default function Category() {
  //Global State
  const { categories, products } = useData();

  const location = useLocation();
  const selectedCategoryName = location.state?.categoryName;
  const requiredCategoryDetails = categories.find(
    (category) => category.categoryName === selectedCategoryName
  );

  const { categoryName, description } = requiredCategoryDetails;
  const productsInCategory = products.filter(
    (product) => product.category === categoryName
  );

  const productList = productsInCategory.map((product) => (
    <ProductListItem key={product.id} product={product} />
  ));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="category">
      <section className={`thumbnail ${selectedCategoryName}`}>
        <h2>{categoryName}</h2>
      </section>
      <section className="description">
        <p>{description}</p>
      </section>
      <section className="product-list">{productList}</section>
    </div>
  );
}
