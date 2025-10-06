import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../styles/components/_header.scss";

export default function MainHeader() {
  return (
    <header className="header">
      <Link to="/" className="">
        <img src={logo} alt="logo" />
      </Link>
    </header>
  );
}
