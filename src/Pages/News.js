import React from "react";

import { Scrollbars } from "react-custom-scrollbars";

import BlogPost from "../Components/BlogPost";

const News = ({ posts }) => {
  return (
    <div>
      <h2 className="sub-heading">Blog</h2>
      <div className="news-blog-container">
        <Scrollbars style={{ height: 600 }}>
          {posts.map((post, index) => {
            return <BlogPost key={index} post={post} />;
          })}
        </Scrollbars>
      </div>
      <p className="news-blog-text">
        Thank you everyone who has contributed to our blog! Please note they do
        not necessarily reflect the views of Advocates for Animals. If you are
        interested in writing a blog please email{" "}
        <a
          className="news-blog-link"
          href="mailto:info@advocates-for-animals.com"
        >
          info@advocates-for-animals.com
        </a>
      </p>
    </div>
  );
};

export default News;
