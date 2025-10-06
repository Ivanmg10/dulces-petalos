import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Product } from "../../types/types";
import { getProductById } from "../../services/productService";
import arrowRight from "../../assets/arrow-right.png";

export default function DetailsPage() {
  const { id } = useParams();
  const [data, setData] = useState<Product | null>(null);

  useEffect(() => {
    getProductById(id)
      .then((product) => setData(product))
      .catch((err) => console.error(err));
  }, [id]);

  console.log(data);

  if (!data) return null;
  return (
    <main className="details container">
      <nav className="breadcrumb">
        <Link to="/">Inicio</Link>
        <img src={arrowRight} alt="arrow" />
        <span>{data.name}</span>
      </nav>

      <section className="details__content">
        <div className="details__image">
          <img src={data.imgUrl} alt={data.name} />
          <span className="badge badge--new">NUEVO</span>
        </div>

        <div className="details__info">
          <div>
            <h1>{data.name}</h1>
            <p className="binomial-name">{data.binomialName}</p>
          </div>
          <p className="price">€{data.price.toFixed(2)}</p>
          <ul>
            <li>Regar 1 vez por semana</li>
            <li>Fertilizar con phosphorus</li>
          </ul>
          <button className="btn-primary">Añadir al carrito</button>
        </div>
      </section>
    </main>
  );
}
