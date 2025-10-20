import React from "react";
import { NavLink } from "react-router";

const NavLinks = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  return <>{links}</>;
};

export default NavLinks;
