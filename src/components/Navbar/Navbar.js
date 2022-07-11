import { Link } from "react-router-dom";

import { BsFillCartPlusFill } from "react-icons/bs";
import logo from "../assets/logo.svg";

import ButtonContainer from "../UI/ButtonContainer";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav
      className={`navbar navbar-expand-sm navbar-dark px-sm-5 ${classes.nav}`}
    >
      <Link to="/">
        <img src={logo} alt="store" className="navbar-brand" />
      </Link>
      <ul className={`navbar-nav ${classes["navbar-nav"]} align-items-center`}>
        <li className="nav-item ms-5">
          <Link to="/" className={classes["nav-link"]}>
            products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ms-auto">
        <ButtonContainer>
          <span className="me-2">
            <BsFillCartPlusFill className="me-2" />
            my cart
          </span>
        </ButtonContainer>
      </Link>
    </nav>
  );
};

export default Navbar;
