import React from "react";

const Donate = () => {
  return (
    <div className="donate">
      <h2 className="sub-heading">Donate</h2>
      <p className="donate--text">
        Advocates for Animals is dedicated to the work it does for its clients;
        however, there is a great deal more legal work to be done beyond this.
        All donations will be put towards Advocates for Animals taking this on.
      </p>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="TZ5L9XERNK9QU" />
        <input
          className="donate--button"
          type="image"
          src="https://cyclingwithoutage.sg/wp-content/uploads/2018/11/Donate-Button-600x222.png"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
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
