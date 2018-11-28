import React from "react";
import { NavLink } from "react-router-dom";

import bg1 from "../Images/Animals/animal12.jpg";
import bg2 from "../Images/Animals/animal4.jpg";
import bg3 from "../Images/Animals/animal5.jpg";
import bg4 from "../Images/Animals/animal13.jpg";
import bg5 from "../Images/Animals/animal7.jpg";
import bg6 from "../Images/Animals/animal14.jpg";

const pages = [
  { label: "News", link: "news", bg: bg1 },
  { label: "About Us", link: "about", bg: bg3 },
  { label: "Areas of Expertise", link: "expertise", bg: bg4 },
  { label: "What Clients Say", link: "clients", bg: bg5 },
  { label: "Contact Us", link: "contact", bg: bg6 }
];

const HomeNav = () => {
  return (
    <div>
      <nav className="home-nav">
        {pages.map((page, index) => {
          return (
            <NavLink
              key={index}
              className="home-nav__link"
              exact
              to={`/${page.link}`}
              style={{ backgroundImage: `url(${page.bg})` }}
            >
              {page.label}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default HomeNav;
