import React from "react";
import { NavLink } from "react-router-dom";

import freedom from "../Images/Animals/freedom.jpg";
import judicial from "../Images/Animals/judicial.jpg";

const Expertise = () => {
  return (
    <div className="expertise">
      <h2 className="sub-heading">Areas of Expertise</h2>
      <div className="expertise__wrapper">
        <NavLink
          className="expertise__link"
          exact
          to="/expertise/freedom-of-information"
        >
          <div className="expertise__redirect expertise__redirect--freedom">
            Freedom of information
          </div>
        </NavLink>

        <NavLink
          className="expertise__link"
          exact
          to="/expertise/judicial-review"
        >
          <div className="expertise__redirect expertise__redirect--judicial">
            Judicial Review
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Expertise;
