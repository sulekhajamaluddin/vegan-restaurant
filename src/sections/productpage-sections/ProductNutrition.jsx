//Project Files
import NutritionTableBody from "./NutritionTableBody";
import NutritionTableHeader from "./NutritionTableHeader";

export default function ProductNutrition2({ nutritionDetails }) {
  const [servingSize, calories, nutrition] = nutritionDetails;

  return (
    <section className="product-nutrition">
      <header>
        <h3>NUTRITION FACTS</h3>
        <p>Serving Size: {servingSize}</p>
      </header>
      <table className="table">
        <NutritionTableHeader calories={calories} />
        <NutritionTableBody nutrition={nutrition} />
      </table>
    </section>
  );
}
