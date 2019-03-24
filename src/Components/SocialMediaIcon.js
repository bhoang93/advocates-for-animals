import React from "react";

const SocialMediaIcon = ({ link, src, alt }) => {
  return (
    <a href={link} target="_blank" rel="noopener">
      <img className="footer__social--icon" src={src} alt={alt} />
    </a>
  );
};

export default SocialMediaIcon;
