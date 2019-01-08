import React from "react";

const Profile = ({ profile }) => {
  return (
    <div className="profile">
      <img className="profile__image" src={profile.image} alt={profile.name} />
      <div className="profile__container">
        <h3 className="profile__heading">{profile.name}</h3>
        <p className="profile__text">{profile.text}</p>
      </div>
    </div>
  );
};

export default Profile;
