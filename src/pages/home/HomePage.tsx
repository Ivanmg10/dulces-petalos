import "../../styles/pages/_home.scss";
import { useEffect, useState } from "react";
import type { Product } from "../../types/types";
import { getProducts } from "../../services/productService";
import MainCard from "../../components/main-cards/MainCard";

import MainSearchBar from "../../components/main-search-bar/MainSearchBar";

export default function HomePage() {
  const [data, setData] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getProducts()
      .then((products) => {
        setData(products);
        setFilteredProducts(products);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = (value: string) => {
    setSearch(value);
    if (!value) {
      setFilteredProducts(data);
    } else {
      setFilteredProducts(
        data.filter((p) => p.name.toLowerCase().includes(value.toLowerCase()))
      );
    }
  };

  return (
    <main className="home">
      <section id="search" className="search">
        <MainSearchBar handleSearch={handleSearch} searchValue={search} />
      </section>

      <section id="cards" className="cards">
        {filteredProducts.map((card, index) => (
          <MainCard
            key={card.id}
            product={card}
            isNew={index === 0} // Ejemplo: marca solo el primero como "Nuevo"
          />
        ))}
      </section>
    </main>
  );
}
