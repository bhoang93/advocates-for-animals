import React from "react";
import { NavLink } from "react-router-dom";

const pages = [
  { label: "Home", link: "" },
  { label: "About Us", link: "about" },
  { label: "Areas of Expertise", link: "expertise" },
  { label: "What Clients Say", link: "clients" },
  { label: "News", link: "news" },
  { label: "Contact Us", link: "contact" }
];

const linkStyle = {
  borderBottom: "2px solid #67aed9"
};

const Navigation = () => {
  return (
    <div>
      <nav className="navigation">
        {pages.map((page, index) => {
          return (
            <NavLink
              key={index}
              className="navigation__link"
              activeStyle={linkStyle}
              exact
              to={`/${page.link}`}
            >
              {page.label}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Navigation;
