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
          David is a solicitor and part-time judge. He has acted for nearly all
          the major animal protection organisations in the UK (and beyond) and
          is highly experienced in EU and international animal law, including
          trade law. He has also acted extensively in human rights cases (which
          can be relevant to animal protection law), much of it again
          international, and public law more generally.
        </span>
        <span className="profile__text--block">
          He is a fellow of the Oxford Centre for Animal Ethics, a former chair
          of the RSPCA (currently a trustee) and a former director of Cruelty
          Free International and Compassion in World Farming. He has written
          extensively about animal protection law and ethics and taken part in
          numerous presentations, debates and media appearances. He gave oral
          evidence to the Burns Inquiry on hunting and has given oral testimony
          to several parliamentary committees and a Royal Commission as well as
          holding countless meetings with ministers and officials. He has been a
          member of European Commission and UK government panels and is an
          experienced teacher of law.
        </span>

        <h3 className="third-heading">
          How did you get into animal protection?
        </h3>
        <span className="profile__text--block">
          I have had an interest since a young age. I ran RSPCA Cardiff Dog's
          Home as an 18 year old volunteer before going to uni. I have always
          believed that one assesses injustice by its effect on the victim, not
          on the victim's identity, Sadly humankind's inhumanity to humankind,
          terrible though it is, is dwarfed by humanity's inhumanity to other
          animals. Society should fight injustice wherever it finds it and I
          have also done a lot of human rights legal work.
        </span>
        <h3 className="third-heading"> Why do you care about animal law?</h3>
        <span className="profile__text--block">
          I believe that the law - working in close harmony with science,
          investigative skills, ethical argument, campaigning and lobbying - can
          make a huge difference to the welfare of animals, through creative
          deployment at each stage of the campaigning process. Ultimately,
          though education has a vital role, the best protection is through
          well-drawn, philosophically consistent, properly interpreted and
          rigorously enforced legislation.
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
          Edie is a solicitor now specialising in animal protection law. Like
          David, she is a legal consultant to Cruelty Free International and she
          advises several other animal protection organisations on a range of
          issues, including the new animal establishment licensing regulations,
          an investigation into pig farming and greyhound racing. As trustee of
          A-LAW, she manages the vibrant student group and often speaks on
          animal protection issues.
        </span>
        <span className="profile__text--block">
          Prior to advising on animal protection law, Edie was an intellectual
          property lawyer in private practice.
        </span>
        <h3 className="third-heading">
          How did you get into animal protection?
        </h3>
        <span className="profile__text--block">
          For as long I can remember I have felt empathy towards animals and
          recognised their vulnerability at the hands of human interest, whether
          commercial or simply sadistic. This awareness has led to me carving a
          career aimed at ensuring animals are given the protections they are
          entitled to under the law.
        </span>
        <h3 className="third-heading"> Why do you care about animal law?</h3>
        <span className="profile__text--block">
          Despite all the incredible attributes animals possess and their
          sentience, they are extremely vulnerable in our society, it is
          therefore essential that a framework is in place to prevent certain
          treatment. You do not have to be an animal lover or an activist in
          this area to recognise that animals deserve protection under the law
          and that those laws need to be enforced.
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
          team as an Operational Support Officer.
        </span>
        <h3 className="third-heading">
          How did you get into animal protection?
        </h3>
        <span className="profile__text--block">
          My mission in life is to seek justice for animals and reduce as much
          suffering as possible. My passion for this cause has led me to
          volunteer for a number of animal charities and establish an
          organisation that supports the animal protection industry. As a
          dedicated vegan, I also try to be an ambassador for animal protection
          wherever I can. When I learned of Advocates for Animals’ mission:
          ‘making full use of the law to protect animals’ I was eager to get
          involved.
        </span>
        <h3 className="third-heading"> Why do you care about animal law?</h3>
        <span className="profile__text--block">
          Without a voice to speak up and protest their treatment, animals are
          among the most abused beings on the planet. If we ensure existing laws
          and regulations are strictly enforced, we can significantly improve
          animal protection.
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
            <div className="aboutus__mission-statement">
              <h3 className="aboutus__mission-statement--heading">Mission</h3>

              <p className="aboutus__mission-statement--body">
                To help clients hold to account not only people who break the
                law but also governments and other bodies charged with enforcing
                it
              </p>

              <h3 className="aboutus__mission-statement--heading">Vision</h3>

              <p className="aboutus__mission-statement--body">
                To live in a world where animals are protected by
                philosophically consistent laws which are regulated and enforced
                effectively
              </p>

              <h3 className="aboutus__mission-statement--heading">Values</h3>
              <ul className="aboutus__mission-statement--list">
                <li>
                  Animal <span>protection</span>
                </li>

                <li>
                  <span>Creative</span> use of the law
                </li>

                <li>
                  {" "}
                  Providing legal <span>education</span> and awareness through
                  events and media platforms
                </li>

                <li>
                  <span>Passion</span> for animal justice
                </li>

                <li>
                  <span>Compassion</span> and <span>understanding</span> towards
                  everyone{" "}
                </li>
              </ul>
            </div>
            <div className="aboutus__content">
              <img
                className="aboutus__content--image"
                src={aboutusimg}
                alt="bear"
              />
              <span className="aboutus__content--block">
                <strong>Advocates for Animals</strong> is the first UK law firm
                dedicated to animal protection. It is a not for profit set up by{" "}
                <strong>David Thomas</strong> and <strong>Edie Bowles</strong>,
                two solicitors with vast combined experience in animal
                protection law, the firm is supported by and works closely with
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
