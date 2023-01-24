//Project Files
import { Hero, CategoriesSummary } from "../sections";

/// all the content of the homepage can fit in 50 lines of code, no need to make it 2 sub components
export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <CategoriesSummary />
    </div>
  );
}
