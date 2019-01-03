import React from "react";
import { NavLink } from "react-router-dom";

import SocialMediaIcon from "../Components/SocialMediaIcon";

import twitter from "../Images/SocialMediaIcons/twitter.svg";
import instagram from "../Images/SocialMediaIcons/instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <iframe
        className="footer__sra"
        frameborder="0"
        scrolling="no"
        allowTransparency="true"
        src="https://cdn.yoshki.com/iframe/55845r.html"
        style={{ height: "20rem" }}
      />
      <NavLink className="footer__complaints" exact to="/complaints">
        Complaints Procedure
      </NavLink>

      <div className="footer__social">
        <SocialMediaIcon
          link="https://twitter.com/Animallawyersuk"
          src={twitter}
          alt="Twitter"
        />
        <SocialMediaIcon
          link="https://www.instagram.com/animallawyersuk/"
          src={instagram}
          alt="Instagram"
        />
      </div>
    </div>
  );
};

export default Footer;
