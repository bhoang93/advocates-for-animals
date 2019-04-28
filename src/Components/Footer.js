import React from "react";
import { NavLink } from "react-router-dom";

import SocialMediaIcon from "../Components/SocialMediaIcon";

import twitter from "../Images/SocialMediaIcons/twitter.svg";
import instagram from "../Images/SocialMediaIcons/instagram.svg";
import facebook from "../Images/SocialMediaIcons/facebook2.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__sra">
        <iframe
          title="SRA"
          frameBorder="0"
          scrolling="no"
          src="https://cdn.yoshki.com/iframe/55845r.html"
          style={{ height: "100%", width: "100%" }}
        />
      </div>
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
        <SocialMediaIcon
          link="https://www.facebook.com/animallawyersuk/"
          src={facebook}
          alt="Facebook"
        />
      </div>
      <div className="footer__name">Advocates for Animals Ltd</div>
    </footer>
  );
};

export default Footer;
