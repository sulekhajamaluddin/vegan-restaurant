//Project Files
import { CategoryCard } from "../../components";
import { useData } from "../../state/DataContext";

export default function CategoriesSummary() {
  //Global State
  const { categories } = useData();

  // I will not remove points, but notice how clean is to do the same using pure CSS as I shown today?
  // and even if you dont use pure CSS, you can make it cleaner with JS as well, look below ⬇️
  // and because this is shorter, there is no need to break the home into multiple sub components
  const categoryItems = categories.map((category) => {
    const { id } = category;
    const cssEvenOdd = id % 2 ? "even" : "odd";

    return <CategoryCard key={id} className={cssEvenOdd} category={category} />;
  });

  return <section className="categories-summary">{categoryItems}</section>;
}
