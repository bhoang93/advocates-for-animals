import React from "react";

import { NavLink } from "react-router-dom";

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post">
      <h3 className="blog-post__heading">{post.title}</h3>
      <p className="blog-post__author">{`Posted by ${post.author.name} at ${
        post.date
      }`}</p>
      <div
        className="blog-post__excerpt"
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      />
      <NavLink className="blog-post__read-more" to={`/news/${post.ID}`}>
        Read More
      </NavLink>
    </div>
  );
};

export default BlogPost;
