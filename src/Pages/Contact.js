import React from "react";
import ContactForm from "../Components/ContactForm";
import email from "../Images/Contact/mail.svg";

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="sub-heading">Contact Us</h2>
      <a className="contact__link" href="mailto:info@advocates-for-animals.com">
        <div className="contact__block">
          <img src={email} className="contact__block--img" alt="email" />
          <p className="contact__link--text">info@advocates-for-animals.com</p>
        </div>
      </a>
      <ContactForm />
    </div>
  );
};

export default Contact;
