import search from "../../assets/search.png";
import "../../styles/components/_search.scss";

interface MainSearchBarProps {
  handleSearch: (value: string) => void;
  searchValue: string;
}

export default function MainSearchBar({
  handleSearch,
  searchValue,
}: MainSearchBarProps) {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Buscar en nuestra tienda"
        value={searchValue}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <span>
        <img src={search} alt="logo" />
      </span>
    </div>
  );
}
