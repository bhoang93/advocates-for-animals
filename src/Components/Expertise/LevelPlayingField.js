import React from "react";
import { NavLink } from "react-router-dom";
import playingfield from "../../Images/Animals/playingfield.jpg";

const LevelPlayingField = () => {
  return (
    <div className="expertise expertise--sub">
      <h2 className="sub-heading">Achieving a Level Playing Field</h2>

      <p className="expertise__text">
        Organisations campaigning for better protection for animals need to get
        their messages out there. Only thus can the public be informed about how
        animals area treated and the pressure for change created.
      </p>
      <p className="expertise__text">
        Unfortunately, the playing field is rarely level. It can be very
        difficult to get the traditional media interested and, even when it is,
        facts may be distorted and prominence given to the views of industry and
        governments. All this reflects where power lies in society: monied
        interests dominate and the voice of exploited animals reduced to barely
        a whimper. It is all too common for suffering to be played down and
        organisations campaigning for greater protection to be misrepresented,
        even ridiculed.
      </p>

      <img
        src={playingfield}
        alt="Lion"
        className="expertise__img expertise__img--2"
      />

      <p className="expertise__text">
        Judicious use of the law can, however, make a real difference. Because
        of the potential cost, libel proceedings should be considered as a last
        resort only but sometimes they may have to be contemplated, where an
        organisation’s reputation has been seriously traduced and loss can be
        shown. Often, the threat of proceedings can be used to extract a
        correction, which is usually all an organisation wants.
      </p>
      <p className="expertise__text">
        It is extremely important to avoid being on the wrong end of libel
        proceedings. Sadly, there are those who see animal protection
        organisations as a threat and would like to put them out of business.
        Accuracy and fact-checking are key. Clearly, too much caution will
        stifle messaging but there are various techniques which can be used to
        ensure impact while ensuring that risk is kept to a minimum. It is
        important to differentiate fact from opinion and, where the latter is
        based on facts, to make sure that they are accurate.
      </p>
      <p className="expertise__text">
        Complaints can where appropriate be made to ombudsmen (UK and European),
        press regulators, the Advertising Standards Authority, the Market
        Research Society (with misleading opinion polls) and various other
        bodies. These carry no risk of a legal costs order. It may be necessary
        to defend a complaint made to the ASA.
      </p>
      <p className="expertise__text">
        Social media has spawned its own mass of law. Bypassing traditional
        media can have real benefits but there are pitfalls too.
      </p>
      <p className="expertise__text">
        Advocates for Animals lawyers are hugely experienced in advising in all
        these areas. We are happy to review copy prior to publication.
      </p>

      <NavLink className="expertise__back" exact to="/expertise">
        ◀Go Back
      </NavLink>
    </div>
  );
};

export default LevelPlayingField;
