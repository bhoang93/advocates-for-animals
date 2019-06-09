import React from "react";
import donate from "../Images/Donate/donate.png";

const Donate = () => {
  return (
    <div className="donate">
      <h2 className="sub-heading">Donate</h2>
      <p className="donate__content">
        In addition to helping animal protection organisations through use of
        the law, Advocates for Animals would like the freedom to bring cases on
        behalf of itself that we feel are essential to help animals. The
        practice of law can be expensive. If you would like to ensure that AfA
        can bring these cases, please donate. Thank you.
      </p>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="TZ5L9XERNK9QU" />
        <input
          type="image"
          src="https://cyclingwithoutage.sg/wp-content/uploads/2018/11/Donate-Button-600x222.png"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
          className="donate__button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_GB/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>
  );
};

export default Donate;
