import { Link } from "react-router-dom";
import "./Header.css";
import logo from "/assets/img/circle-black-text-1024.webp";

const Header = () => {
  return (
    <header className="row valign-wrapper">
      <Link to={`/`} className="col s6">
        <img src={logo} alt="Logo" className="logoImg"></img>
      </Link>
      <Link to={`/`} className="col s6">
        <h1 className="center-align">Anfisbena</h1>
        <h2 className="center-align">Galería de Arte Contemporáneo</h2>
      </Link>
    </header>
  );
};

export default Header;
