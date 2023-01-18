//Node Modules
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//Project Files
import { ProductIngredients, ProductNutrition } from "../sections/";

export default function Product() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const {
    productName,
    thumbNailURL,
    thumbDescription,
    description,
    ingredients,
    servingSize,
    calories,
    nutrition,
  } = product;

  const nutritionDetails = [servingSize, calories, nutrition];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product">
      <img src={`../assets/${thumbNailURL}`} alt={thumbDescription} />
      <section className="details">
        <h3>{productName}</h3>
        <p>{description}</p>
      </section>
      <ProductIngredients ingredients={ingredients} />
      <ProductNutrition nutritionDetails={nutritionDetails} />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}
