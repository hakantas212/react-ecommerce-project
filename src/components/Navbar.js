import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import cart from "../cart.svg";
import styled from "styled-components";

function Navbar() {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="logo" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav mx-auto align-items-center text-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item ml-5">
          <Link to="/#products" className="nav-link">
            Products
          </Link>
        </li>
        <li className="nav-item ml-5">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="nav-item ml-5">
        <span className="mr-2">
          <img src={cart} alt="logo" className="navbar-brand" />
        </span>
      </Link>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.1);
  .nav-link {
    color: var(--mainDark) !important;
    font-size: 1.3rem;
    font-weight: 300;
  }
  .navbar-brand {
    width: 50px;
    height: 50px;
  }
`;

export default Navbar;
