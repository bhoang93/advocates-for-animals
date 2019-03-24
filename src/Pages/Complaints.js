import React from "react";

import pic1 from "../Images/Animals/animal10.jpg";

import web from "../Images/Contact/sphere.svg";
import phone from "../Images/Contact/phone.svg";
import mail from "../Images/Contact/mail4.svg";

const Complaints = () => {
  return (
    <div className="complaints">
      <div className="complaints__1st">
        <img src={pic1} alt="Cows" className="complaints__image" />
      </div>

      <div className="complaints__2nd">
        <h2 className="sub-heading">Complaints Procedure</h2>
        <p className="complaints__paragraph">
          We want to give you the best possible service. However, if at any
          point you become unhappy or concerned about the service we provided
          then you should inform us immediately, so that we can do our best to
          resolve the problem.
        </p>
        <p className="complaints__paragraph">
          In the first instance it may be helpful to contact the person who is
          working on your case to discuss your concerns and we will do our best
          to resolve any issues at this stage. Making a complaint will not
          affect how we handle your case.
        </p>
        <p className="complaints__paragraph">
          The Solicitors Regulation Authority can help you if you are concerned
          about our behaviour. This could be for things like dishonesty, taking
          or losing your money or treating you unfairly because of your age, a
          disability or other characteristic.
        </p>
        <p className="complaints__paragraph">
          You can raise your concerns with the Solicitors Regulation Authority.
        </p>
        <h3 className="third-heading">
          What do to if we cannot resolve your complaint
        </h3>
        <p className="complaints__paragraph">
          The Legal Ombudsman can help you if we are unable to resolve your
          complaint ourselves. They will look at your complaint independently
          and it will not affect how we handle your case.
        </p>
        <p className="complaints__paragraph">
          Before accepting a complaint for investigation, the Legal Ombudsman
          will check that you have tried to resolve your complaint with us
          first. If you have, then you must take your complaint to the Legal
          Ombudsman:
        </p>
        <p className="complaints__paragraph">
          Within six months of receiving a final response to your complaint and
          No more than six years from the date of act/omission; or No more than
          three years from when you should reasonably have known there was cause
          for complaint.
        </p>
        <p className="complaints__paragraph">
          If you would like more information about the Legal Ombudsman, please
          contact them.
        </p>
        <div className="complaints__contact">
          <h3 className="complaints__contact--heading">Contact details</h3>
          <div className="complaints__contact-details">
            <img className="complaints__icon" src={web} alt="website" />
            <a className="complaints__link" href="www.legalombudsman.org.uk">
              www.legalombudsman.org.uk
            </a>
          </div>

          <div className="complaints__contact-details">
            <img className="complaints__icon" src={phone} alt="phone" />
            <p>
              0300 555 0333{" "}
              <span className="complaints__small-text">
                (between 9am to 5pm)
              </span>
            </p>
          </div>

          <div className="complaints__contact-details">
            <img className="complaints__icon" src={mail} alt="E-mail" />
            <a
              className="complaints__link"
              href="mailto:enquiries@legalombudsman.org.uk"
            >
              enquiries@legalombudsman.org.uk
            </a>
          </div>

          <p>Legal Ombudsman PO Box 6806, Wolverhampton, WV1 9WJ</p>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
