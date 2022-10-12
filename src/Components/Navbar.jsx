import { NavLink } from "react-router-dom";
export const Navbar = () => {
  // const navLinkStyles = ({ isActive }) => {
  //   return {
  //     fontWeigth: isActive ? "bold" : "normal",
  //     TextDecoder: isActive ? "none" : "underline",
  //   };
  // };
  return (
    <nav>
      <NavLink  to="/">
        Home
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
      <NavLink to="/products">
        Products
      </NavLink>

    </nav>
  );
};
