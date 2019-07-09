import React from "react";

import { Scrollbars } from "react-custom-scrollbars";

import BlogPost from "../Components/BlogPost";

const News = ({ posts }) => {
  return (
    <div>
      <h2 className="sub-heading">Blog</h2>
      <p className="news-blog-text">
        Thank you everyone who has contributed to our blog! Please note these
        articles represent the views of the author and not necessarily those of
        Advocates for Animals. They are not intended as advice for particular
        situations. We would be happy to advise if you think we may be able to
        help. If you are interested in writing a blog please email{" "}
        <a
          className="news-blog-link"
          href="mailto:info@advocates-for-animals.com"
        >
          info@advocates-for-animals.com
        </a>
      </p>
      <div className="news-blog-container">
        <Scrollbars style={{ height: 600 }}>
          {posts.map((post, index) => {
            return <BlogPost key={index} post={post} />;
          })}
        </Scrollbars>
      </div>
    </div>
  );
};

export default News;
