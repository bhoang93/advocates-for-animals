import React from "react";
import Fade from "react-reveal/Fade";
import image1 from "../Images/Animals/animal3.jpg";
import image2 from "../Images/Animals/animal16.jpg";

const Expertise = () => {
  return (
    <div className="expertise">
      <h2 className="sub-heading">Areas of Expertise</h2>

      <h3 className="third-heading">Freedom of Information</h3>

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
        The other main way of getting information is via undercover
        investigations
      </p>

      <h3 className="third-heading">Judicial review</h3>

      <p className="expertise__text">
        Judicial review is a type of legal action under which decisions of
        ministers and other public officials can be challenged. It is the means
        by which the judiciary ensures that public bodies keep within the law.
        As such, it is a vital tool in a democracy and there have been many
        famous cases, including recently the successful challenge to the
        Government’s attempt to circumvent Parliament over the Brexit Article 50
        process. ‘Decision’ is interpreted broadly, such that (for example) a
        failure to make a decision can be challenged, as can secondary
        legislation falling outside the ambit of an Act of Parliament.
      </p>

      <p className="expertise__text">
        Note that judicial review can only be used where there is said to be an
        error of law. You cannot normally challenge a finding of fact or the way
        a public body has exercised a discretion or judgement entrusted to it by
        Parliament. However, you can do so if the finding of fact etc is
        unsupported by evidence or the public body has failed to take into
        account a material consideration (or taken into account an immaterial
        consideration). Procedural irregularity can also be challenged, such as
        a failure to consult properly or give adequate reasons.
      </p>

      <p className="expertise__text">
        Animal protection organisations with expertise in a relevant area will
        usually be accorded standing to bring a case and they may also be
        allowed to intervene in a case brought by someone else. In these ways,
        the animals’ voice can be heard. There are strict time limits for
        bringing a case.
      </p>
      <Fade>
        <img
          className="expertise__img expertise__img--2"
          src={image2}
          alt="Orangutan"
        />
      </Fade>

      <p className="expertise__text">
        Legal costs can be an issue. However, in a public interest case it is
        often possible to get a protective costs order, which limits exposure to
        costs if a case is ultimately unsuccessful.
      </p>

      <p className="expertise__text">
        Often with judicial review, a successful outcome can be achieved without
        needing to take a case to a full hearing. Public bodies will frequently
        concede a point of principle if a case is well-articulated, especially
        if a judge grants permission for a case to proceed (the first stage in
        the process). Indeed, they may do so after a pre-action letter. Because
        public bodies have a duty to be candid, the letter before action can be
        an useful way of obtaining documents.
      </p>

      <p className="expertise__text">
        There is a similar process available to challenge planning decisions
      </p>

      <p className="expertise__text">
        Other countries have similar mechanisms for challenging administrative
        decisions, some modelled on English judicial review.
      </p>

      <p className="expertise__text">
        We have extensive experience of bringing judicial reviews on behalf of
        animal protection organisations as well as other NGOs.
      </p>
    </div>
  );
};

export default Expertise;
