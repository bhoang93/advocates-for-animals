import React from "react";
import { NavLink } from "react-router-dom";
import image1 from "../../Images/Animals/animal3.jpg";

const Freedom = () => {
  return (
    <div className="expertise expertise--sub">
      <h2 className="sub-heading">Freedom of Information</h2>

      <img
        className="expertise__img expertise__img--1"
        src={image1}
        alt="Crocodile"
      />

      <p className="expertise__text">
        Information is the lifeblood of any campaigning organisation. Without
        information to influence the public and politicians, change cannot be
        effected. This is particularly important with animal cruelty, most of
        which takes place behind closed doors. And, of course, animals cannot
        articulate what is done to them.
      </p>

      <p className="expertise__text">
        Freedom of information laws are the primary way of obtaining information
        held by public bodies. In England, Wales and Northern Ireland, the
        Freedom of Information Act 2000 creates a right to information on
        request (there is similar legislation in Scotland). There are a number
        of exemptions, covering matters such as confidentiality, safety and the
        development of policy. A number of other laws also contain prohibitions
        on disclosure. Many of the exemptions are qualified, which means that,
        even if they apply, the public interest may require disclosure.
      </p>

      <p className="expertise__text">
        Public bodies may also seek to argue that a request would take too long
        to deal with or is otherwise ‘vexatious’, but there are limits to both
        of these.
      </p>

      <p className="expertise__text">
        There is now a mass of caselaw about FOIA. We have taken numerous cases
        on behalf of animal protection organisations, with a high degree of
        success. How requests are worded is extremely important and it is also
        essential to be able to assess whether a public body is justified in
        refusing to disclose information.
      </p>

      <p className="expertise__text">
        We are also very experienced in making requests for information of EU
        institutions and governments around the world.
      </p>

      <p className="expertise__text">
        The other main way of getting information is via{" "}
        <NavLink
          className="expertise__back"
          exact
          to="/expertise/undercover-investigations"
        >
          undercover investigations
        </NavLink>
      </p>

      <NavLink className="expertise__back" exact to="/expertise">
        ◀Go Back
      </NavLink>
    </div>
  );
};

export default Freedom;
