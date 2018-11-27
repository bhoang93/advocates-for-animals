import React from "react";

const Profile = ({ name, text, image, classN }) => {
  return (
    <div className="profile">
      <img className="profile__image" src={image} alt={name} />
      <div className="profile__container">
        <h3 className="profile__heading">{name}</h3>
        <p className="profile__text">{text}</p>
      </div>
    </div>
  );
};

export default Profile;
