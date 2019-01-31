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
    </div>
  );
};

export default News;
