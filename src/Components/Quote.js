import React from "react";

const Quote = ({ text, attr }) => {
  return (
    <div className="quote">
      <p className="quote__text">{text}</p>
      <p className="quote__attr">{attr}</p>
    </div>
  );
};

export default Quote;
