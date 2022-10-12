import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeigth: isActive ? "bold" : "normal",
      TextDecoder: isActive ? "none" : "underline"
    };
  };
  return (
    <>
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
    </>
  );
};
