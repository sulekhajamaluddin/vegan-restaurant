//Node Modules
import { useNavigate } from "react-router-dom";
//Project Files
import beeticon from "../assets/beet.png";

export default function CategoryCard({ cssClass, category }) {
  const navigate = useNavigate();
  const { categoryName, description, thumbNailURL, thumbDescription } =
    category;

  const handleViewMenu = () => {
    navigate("/category", { state: { categoryName: categoryName } });
  };

  return (
    <div className={`category-card ${cssClass}`}>
      <img src={`../assets/${thumbNailURL}`} alt={thumbDescription} />
      <div className="details">
        <h3>{categoryName}</h3>
        <p>{description}</p>
        <button onClick={() => handleViewMenu()}>
          <img className="icon" src={beeticon} alt="Beetroot Icon" />
          Go to the menu
        </button>
      </div>
    </div>
  );
}
