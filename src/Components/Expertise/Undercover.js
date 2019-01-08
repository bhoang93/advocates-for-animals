import React from "react";
import { NavLink } from "react-router-dom";
import undercover from "../../Images/Animals/undercover.jpg";

const Undercover = () => {
  return (
    <div className="expertise expertise--sub">
      <h2 className="sub-heading">Undercover investigations</h2>
      <img
        src={undercover}
        alt="Monkey"
        className="expertise__img expertise__img--1"
      />
      <p className="expertise__text">
        It is a truism that nearly all cruelty to animals happens behind closed
        doors.{" "}
        <NavLink
          className="expertise__back"
          exact
          to="/expertise/freedom-of-information"
        >
          Freedom of information
        </NavLink>{" "}
        laws and other techniques can help lift the lid but unquestionably the
        most effective way is via undercover investigations. Undertaken
        properly, they can be hugely beneficial in advancing animal protection.
        An image is worth a thousand words and video footage hard to dispute.
      </p>
      <p className="expertise__text">
        Undercover investigations come in many shapes and forms, ranging from
        placing an employee with a hidden camera for an extended time, leaving a
        camera on site for a short period, gathering evidence on a permitted
        visit and trailing vehicles.
      </p>
      <p className="expertise__text">
        Each involves a range of complex legal issues, including
        confidentiality, libel, trespass, copyright and data protection. A
        targeted company may allege that a criminal offence has been committed.
        Inevitably, undercover investigations carry risks, but they can be
        minimised. For example, it is vital to identify prior to launch the
        public interest in information being available, because that can
        represent a defence to a breach of confidentiality action. Factual
        assertions should only be made where they are demonstrably true.
      </p>
      <p className="expertise__text">
        We have advised on numerous investigations, here and abroad, including
        animal experiments, the fur trade, live transport and intensive farming
        and would be happy to assist.
      </p>

      <NavLink className="expertise__back" exact to="/expertise">
        ◀Go Back
      </NavLink>
    </div>
  );
};

export default Undercover;
