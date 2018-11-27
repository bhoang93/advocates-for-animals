import React from "react";

import Quote from "../Components/Quote";

const clientQuotes = [
  {
    quote:
      "Est aute culpa e cupidatat se illum nescius officia se id aliqua velit duis cernantur, culpa constias a mandaremus. A eram minim do pariatur",
    attr: "-Lorem Ipsum"
  },
  {
    quote:
      "Est aute culpa e cupidatat se illum nescius officia se id aliqua velit duis cernantur, culpa constias a mandaremus. A eram minim do pariatur",
    attr: "-Lorem Ipsum"
  },
  {
    quote:
      "Est aute culpa e cupidatat se illum nescius officia se id aliqua velit duis cernantur, culpa constias a mandaremus. A eram minim do pariatur",
    attr: "-Lorem Ipsum"
  }
];

const Clients = () => {
  return (
    <div>
      <h2 className="sub-heading">What Clients Say</h2>
      <div className="quotes-container">
        {clientQuotes.map((quote, index) => {
          return <Quote text={quote.quote} attr={quote.attr} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Clients;
