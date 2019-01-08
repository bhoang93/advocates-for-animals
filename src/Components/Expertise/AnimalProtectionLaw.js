import React from "react";
import { NavLink } from "react-router-dom";
import protection from "../../Images/Animals/protection.jpg";

const AnimalProtectionLaw = () => {
  return (
    <div className="expertise expertise--sub">
      <h2 className="sub-heading">Animal Protection Law</h2>

      <p className="expertise__text">
        Animal protection law is any law which affects the welfare of animals.
        It is distinct from animal health law which is really designed to
        protect human beings or other animals and the law assigning liability
        for damage caused by one’s animals, although each of these can have
        welfare implications too.
      </p>

      <img
        src={protection}
        alt="Monkey"
        className="expertise__img expertise__img--1"
      />

      <p className="expertise__text">
        A great deal of UK animal protection law comes from the European Union
        and that will continue to be the case whatever happens with Brexit. A
        huge swathe of EU legislation has an impact on animals. There are
        several other international treaties which affect animals, too, such as
        the World Trade Organisation, the Convention on the Trade in Endangered
        Species (CITES), the Convention on the Conservation of European Wildlife
        and Natural Habitats (the Bern Convention) and the World Organisation
        for Animal Health (OIE). There is burgeoning caselaw arising out of many
        of these, some of it highly technical.
      </p>

      <p className="expertise__text">
        In the UK, the law takes the form of Acts of Parliament, secondary
        legislation (such as regulations), caselaw, codes of practice and
        guidance.
      </p>
      <p className="expertise__text">
        A fundamental problem with animal protection law is that, gratuitous
        cruelty aside, it seeks to balance the interests of the animal against
        some human interest. The human interest could be cheap meat, research,
        entertainment, clothing, religious or cultural tradition. Inevitably,
        human beings get to decide when their interest trumps that of animal
        welfare and it is no surprise that welfare is often relegated in
        importance. This, allied to technological and commercial secrecy,
        explains the exponential increase in animal suffering at the hands of
        human beings, despite attitudes being generally more enlightened.
      </p>
      <p className="expertise__text">
        Advocates for Animals sees its role as to help clients achieve the
        maximum protection from existing laws and to suggest and draft new laws.
        We can also help with various parliamentary techniques such as questions
        and early day motions (or EU equivalents) and in responding to
        consultations.
      </p>
      <p className="expertise__text">
        Enforcement is a massive issue, too. All too often, public bodies fail
        to enforce properly even the inadequate protection given by legislation.
        There are various ways of ensuring that they do. Or you may need advice
        about what the law is in a particular area, here or abroad.
      </p>

      <NavLink className="expertise__back" exact to="/expertise">
        ◀Go Back
      </NavLink>
    </div>
  );
};

export default AnimalProtectionLaw;
