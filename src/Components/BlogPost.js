import React from "react";
import he from "he";

import { NavLink } from "react-router-dom";

const BlogPost = ({ post }) => {
  const date = new Date(post.date)
    .toString()
    .split(" ")
    .filter((char, index) => index < 4)
    .join(" ");

  return (
    <div className="blog-post">
      <h3 className="blog-post__heading">{he.decode(post.title)}</h3>
      <p className="blog-post__author">{`Posted on ${date}`}</p>
      <div
        className="blog-post__excerpt"
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      />
      <NavLink className="blog-post__read-more" to={`/blog/${post.ID}`}>
        Read More
      </NavLink>
    </div>
  );
};

export default BlogPost;
