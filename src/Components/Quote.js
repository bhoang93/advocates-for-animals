import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const Quote = ({ text, attr }) => {
  return (
    <div className="quote">
      <Scrollbars>
        <p className="quote__text">{text}</p>
      </Scrollbars>
      <p className="quote__attr">{attr}</p>
    </div>
  );
};

export default Quote;
