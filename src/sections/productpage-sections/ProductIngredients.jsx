export default function ProductIngredients({ ingredients }) {
  const ingredientList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <section className="product-ingredients">
      <h3>Vegan Ingredients</h3>
      <ul>{ingredientList}</ul>
    </section>
  );
}
