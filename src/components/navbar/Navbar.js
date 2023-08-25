/** @format */

import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/">home</NavLink>
      <NavLink to="/cart">cart</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default Navbar;
