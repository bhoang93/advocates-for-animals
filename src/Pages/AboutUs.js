import React from "react";
import Profile from "../Components/Profile";

import davidthomas from "../Images/AboutUs/David_Thomas.jpg";
import ediebowles from "../Images/AboutUs/Edie_Bowles.JPG";
import vanessa from "../Images/AboutUs/Vanessa_Johansson.jpeg";
import aboutusimg from "../Images/Animals/animal1.jpg";

const aboutUsProfile = [
  {
    name: "David Thomas",
    text: (
      <>
        <span className="profile__text--block">
          David Thomas is a solicitor and part-time judge. He has acted for
          nearly all the major animal protection organisations in the UK (and
          beyond) and is highly experienced in EU and international animal law,
          including trade law. He has also acted extensively in human rights
          cases (which can be relevant to animal protection law), much of it
          again international, and public law more generally.
        </span>
        <span className="profile__text--block">
          He is a former chair of the RSPCA (currently a trustee) and a former
          director of Cruelty Free International and Compassion in World
          Farming. He has written extensively about animal protection law and
          ethics and taken part in numerous presentations, debates and media
          appearances. He gave oral evidence to the Burns Inquiry on hunting and
          has given oral testimony to several parliamentary committees and a
          Royal Commission as well as holding countless meetings with ministers
          and officials. He has been a member of European Commission and UK
          government panels and is an experienced teacher of law.
        </span>
      </>
    ),
    image: davidthomas
  },
  {
    name: "Edie Bowles",
    text: (
      <>
        <span className="profile__text--block">
          Edie Bowles is a solicitor now specialising in animal protection law.
          Like David, she is a legal consultant to Cruelty Free International
          and she advises several other animal protection organisations on a
          range of issues, including the new animal establishment licensing
          regulations, an investigation into pig farming and greyhound racing.
          As trustee of A-LAW, she manages the vibrant student group and often
          speaks on animal protection issues.
        </span>
        <span className="profile__text--block">
          Prior to advising on animal protection law, Edie was an intellectual
          property lawyer in private practice.
        </span>
      </>
    ),
    image: ediebowles
  },
  {
    name: "Vanessa Johansson",
    text: (
      <>
        <span className="profile__text--block">
          Vanessa has dedicated her career to the non-profit and education
          sectors. From management to hands-on help, Vanessa loves guiding
          people and organisations towards success. In 2018, she co-founded the
          Solberga Foundation, a philanthropic organisation focused on animal
          and environmental justice. Enthusiastic and personable, she is a
          tireless advocate for a more compassionate world. Vanessa joins the
          team as the administrative manager.
        </span>
      </>
    ),
    image: vanessa
  }
];

class AboutUs extends React.Component {
  constructor() {
    super();
    this.state = {
      currentProfile: null
    };
  }

  toggleProfile = profile => {
    this.setState({ currentProfile: profile });
  };

  goBackToAboutUs = () => {
    this.setState({ currentProfile: null });
  };

  render() {
    return (
      <div className="aboutus">
        <h2 className="sub-heading">About Us</h2>
        {this.state.currentProfile === null && (
          <>
            <div className="aboutus__content">
              <img
                className="aboutus__content--image"
                src={aboutusimg}
                alt="bear"
              />
              <span className="aboutus__content--block">
                <strong>Advocates for Animals</strong> is the first UK law firm
                dedicated to animal protection. Set up by{" "}
                <strong>David Thomas</strong> and <strong>Edie Bowles</strong>,
                two solicitors with vast combined experience in animal
                protection law, the firm is supported by and works closely with{" "}
                <strong>the UK Centre of Animal Law (A-LAW):</strong> Edie is a
                trustee and David a former trustee.
              </span>
              <span className="aboutus__content--block">
                Before 1822 in this country – as in many countries around the
                world still – there was no law to protect animals. A man could
                beat his horse to death simply because it was his.
              </span>
              <span className="aboutus__content--block">
                The supervening two centuries have seen a large swathe of animal
                protection legislation, some of it very good. But there is
                indisputably <strong>far more cruelty</strong> caused to animals
                by human beings today than two hundred years ago.
              </span>
              <span className="aboutus__content--block">
                Attitudes are generally more enlightened, and there is less
                domestic cruelty, but technological developments mean that we
                can do things to animals today that we could not hitherto – in
                factory farms (where literally billions languish), in
                laboratories and so forth, far from public gaze. Millions of
                animals are transported as cargo across the world for various
                purposes.
              </span>
              <span className="aboutus__content--block">
                It is therefore essential that animal protection NGOs make
                maximum use of the tools at their disposal, as environmental
                groups and many social justice organisations already do very
                effectively. <strong>Advocates for Animals</strong> is committed
                to the creative use of the law – alongside investigations,
                science, lobbying, social and traditional media – to make a huge
                difference to the lives of animals.
              </span>
            </div>
            <h2 className="sub-heading">Who Are We?</h2>
            <div className="aboutus__redirect-container">
              {aboutUsProfile.map((profile, index) => {
                return (
                  <figure
                    className="aboutus__redirect"
                    onClick={() => this.toggleProfile(index)}
                  >
                    <img
                      className="aboutus__redirect--img"
                      alt={profile.name}
                      src={profile.image}
                    />
                    <figcaption className="aboutus__redirect--name">
                      {profile.name}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </>
        )}
        {this.state.currentProfile !== null && (
          <>
            <Profile profile={aboutUsProfile[this.state.currentProfile]} />
            <div className="aboutus__goBack" onClick={this.goBackToAboutUs}>
              ◀Go Back
            </div>
          </>
        )}
      </div>
    );
  }
}

export default AboutUs;
