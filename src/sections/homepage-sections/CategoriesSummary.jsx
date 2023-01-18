//Project Files
import { CategoryCard } from "../../components";
import { useData } from "../../state/DataContext";

export default function CategoriesSummary() {
  //Global State
  const { categories } = useData();

  const categoryItems = categories.map((category) => {
    const { id } = category;
    const isEven = id % 2 === 0;
    return !isEven ? (
      <CategoryCard key={id} category={category} />
    ) : (
      <CategoryCard key={category.id} cssClass="reverse" category={category} />
    );
  });

  return <section className="categories-summary">{categoryItems}</section>;
}
