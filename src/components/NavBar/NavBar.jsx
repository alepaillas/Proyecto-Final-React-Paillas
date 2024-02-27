import CartWidget from "../CartWidget/CartWidget";
import NavLinks from "./NavLinks";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="nav-wrapper">
        <a href="#" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>

        <div className="row">
          <ul className="hide-on-med-and-down col s6 centerNavLinks">
            <NavLinks />
          </ul>
          <CartWidget />
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <NavLinks />
      </ul>
    </>
  );
};

export default NavBar;
