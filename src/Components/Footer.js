import React from "react";

import SocialMediaIcon from "../Components/SocialMediaIcon";

import twitter from "../Images/SocialMediaIcons/twitter.svg";
import instagram from "../Images/SocialMediaIcons/instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
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
      <p className="footer__legal">
        Commodo velit constias. Qui nulla arbitror ea iudicem praetermissum ea
        laboris nam se vidisse coniunctione se est ex nisi dolore minim, aliqua
        ab in fugiat expetendis, aliquip in laborum, laboris velit quis an
        velit, veniam si nam tamen nostrud. Incididunt irure expetendis. Commodo
        voluptatibus sed fabulas aut commodo est singulis ita hic eu elit tamen
        quis ne mandaremus do expetendis, aute eu excepteur id quem, quem ne nam
        eram occaecat.
      </p>
    </div>
  );
};

export default Footer;
