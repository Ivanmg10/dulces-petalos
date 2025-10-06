import type { Product } from "../../types/types";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow.png";
import "../../styles/components/_card.scss";

interface MainCardProps {
  product: Product;
  isNew?: boolean;
}

const MainCard = ({ product, isNew = false }: MainCardProps) => {
  return (
    <article className="card">
      <div className="card-content">
        <h4>{product.name}</h4>
        <p>{product.binomialName}</p>
      </div>

      <Link to={`/details/${product.id}`} className="image-container">
        <img src={product.imgUrl} alt={product.name} />

        {isNew && <span className="badge badge--new">NUEVO</span>}

        <span className="badge badge--price">€{product.price}</span>
        <img src={arrow} alt="Ver detalles" className="badge badge--arrow" />
      </Link>
    </article>
  );
};

export default MainCard;
