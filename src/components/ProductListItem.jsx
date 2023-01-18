//Node Modules
import { useNavigate } from "react-router-dom";

export default function ProductListItem({ product }) {
  const navigate = useNavigate();
  const { productName, thumbNailURL, thumbDescription, shortDescription } =
    product;

  const handleProductView = () => {
    navigate("/product", { state: { product: product } });
  };

  return (
    <button className="product-list-item" onClick={() => handleProductView()}>
      <img src={`../assets/${thumbNailURL}`} alt={thumbDescription} />
      <div className="details">
        <h3>{productName}</h3>
        <p>{shortDescription}</p>
      </div>
    </button>
  );
}
