import React from "react";
import ContactForm from "../Components/ContactForm";
import email from "../Images/Contact/mail4.svg";
import phone from "../Images/Contact/phone.svg";

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="sub-heading">Contact Us</h2>
      <a className="contact__link" href="tel:07838926678">
        <div className="contact__block">
          <img src={phone} className="contact__block--img" alt="phone" />
          <p className="contact__link--text">07838926678</p>
        </div>
      </a>
      <a className="contact__link" href="mailto:info@advocates-for-animals.com">
        <div className="contact__block">
          <img src={email} className="contact__block--img" alt="email" />
          <p className="contact__link--text">info@advocates-for-animals.com</p>
        </div>
      </a>
    </div>
  );
};

export default Contact;
