import React from "react";

import Quote from "../Components/Quote";

const clientQuotes = [
  {
    quote:
      "An incredibly experienced, enthusiastic and dedicated team with advanced knowledge of range of animal issues and the relevant law. Able to advise on many aspects of animal law and see projects through to successful completion.",
    attr: "- Cruelty Free International"
  },
  {
    quote:
      "Edie Bowles and David Thomas have given advice to our charity at short notice to a high standard. Their knowledge has helped us campaign effectively and ensured that we use the law to help animals in need wherever possible. We highly recommend Advocates for Animals.",
    attr: "- Freedom for Animals"
  },
  {
    quote:
      "It’s been my privilege to have worked closely with David and Edie for many years, so I know first-hand the quality of their work.  Their knowledge in the field is unparalleled and their passion and commitment unwavering. Advocates for Animals has my full support in their important work of using the law to make a real and long-lasting difference for animals.",
    attr: "- Animal Free Research"
  },
  {
    quote:
      "Thorough, clear, considered and professional in your approach to us as your clients, you advised us fully together with counsel, as to the merits and non merits of each option available to us on complex areas of law, this enabled us to undertake an informed campaign strategy both in the long and short term. As a group reliant on self generated funding we found your costs both reasonable and achievable. Our sincere thanks and we would have no hesitation in recommending you or your practice to others who share a sincere interest in pursuing lawful means by which to challenge the plight of those who cannot challenge for themselves. We look forward to working with you again in the future as we felt you understood the value of respect both to your clients and to those they seek to protect in our case, the thousands of greyhounds used within the racing industry here in the UK.",
    attr: "- Greyt Exploitations",
    scrollbars: true
  },
  {
    quote:
      "The IVRA has recently worked with Edie on a variety of matters and has found her work to be extremely useful. The network is very much in need of Edie’s dedicated service which is invaluable to support and further the aims and objectives of the organisation.",
    attr: "- The International Vegans Rights Alliance"
  },
  {
    quote:
      "I have known David for over 20 years and would have no hesitation in instructing his firm to act for us. David is a deeply committed, highly capable legal professional with a dogged determination to do the very best for animals and the people and organisations who advocate for them.",
    attr: "- Compassion in World Farming"
  },
  {
    quote:
      "David has provided excellent quality legal advice to Animal Aid. It is so reassuring to work with someone who has such brilliant legal expertise, but also understands the specific issues relating to animal protection, and shares our dedication to making the world a better place for animals. As well as being extremely helpful, David’s advice has always been presented to us in a clear, non-technical way, which makes the process of dealing with legal issues so much easier. I would have full confidence in recommending David to any animal protection organisation who was looking for legal advice.",
    attr: "- Animal Aid"
  }
];

const Clients = () => {
  return (
    <div>
      <h2 className="sub-heading">What Clients Say</h2>
      <div className="quotes-container">
        {clientQuotes.map((quote, index) => {
          return (
            <Quote
              text={quote.quote}
              attr={quote.attr}
              scrollbars={quote.scrollbars}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
