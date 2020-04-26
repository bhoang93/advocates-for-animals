import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../Images/Animals/private.jpg";

const PrivateProsecutions = () => {
  return (
    <div className="expertise expertise--sub">
      <h2 className="sub-heading">Private Prosecutions</h2>
      <img src={img} alt="Koala" className="expertise__img expertise__img--1" />
      <p className="expertise__text">
        The main prosecuting authority in England and Wales is the Crown
        Prosecution Service (CPS). In Scotland, it is the Prosecutor-Fiscal and
        in Northern Ireland the Public Prosecution Service. Each of these
        organisations bring prosecutions on behalf of the state. They are
        independent of the police, who investigate crimes.
      </p>
      <p className="expertise__text">
        Other specialist agencies also prosecute: for example, the Food
        Standards Agency, the Health & Safety Executive (UK) and local Trading
        Standards (consumer issues, including misleading fur labelling). So do
        local authorities for a range of offences.
      </p>
      <p className="expertise__text">
        Private prosecutions can be a valuable campaigning tool, especially on
        issues where animal protection organisations have greater expertise than
        the state authorities or may perhaps have conducted an{" "}
        <NavLink
          className="expertise__back"
          exact
          to="/expertise/undercover-investigations"
        >
          undercover investigation
        </NavLink>{" "}
        revealing inadequate regulation.
      </p>
      <p className="expertise__text">
        A private prosecutor has to persuade a magistrate to issue a summons or
        warrant against the proposed defendant. There must be some evidence
        indicating that an offence has been committed. The Director of Public
        Prosecutions (the head of the CPS) can take over a prosecution, and can
        then discontinue it. In principle, it is possible to{" "}
        <NavLink
          className="expertise__back"
          exact
          to="/expertise/judicial-review"
        >
          judicially review
        </NavLink>{" "}
        a decision to discontinue, but in practice that would be difficult
        unless, perhaps, the decision was overtly political.
      </p>
      <p className="expertise__text">
        It is often possible for a private prosecutor to recover at least some
        legal costs, either from central funds or occasionally a convicted
        defendant.
      </p>
      <p className="expertise__text">
        It is important to ensure that private prosecutions are done properly,
        with compelling (admissible) evidence and full disclosure to the
        defendant, and other procedural requirements followed. If not conducted
        properly, there is a risk that the defendant may recover costs from the
        prosecutor. Advocates for Animals can help navigate your way through
        each step of the process.
      </p>
      <p className="expertise__text">
        For more information, please contact info@advocates-for-animals.com
      </p>

      <NavLink className="expertise__back" exact to="/expertise">
        ◀Go Back
      </NavLink>
    </div>
  );
};

export default PrivateProsecutions;
