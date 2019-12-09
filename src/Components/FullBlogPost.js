import React from "react";

import { NavLink } from "react-router-dom";

class FullBlogPost extends React.Component {
  constructor() {
    super();
    this.state = { post: {} };
  }
  componentDidMount() {
    fetch(
      `https://public-api.wordpress.com/rest/v1.1/sites/advocates-for-animals.com/posts/?number=999`
    )
      .then(resp => resp.json())
      .then(data => this.setState({ post: data }));
  }

  render() {
    const { post } = this.state;
    return (
      <div className="full-blog-post">
        <h3 className="full-blog-post__heading">{post.title}</h3>
        {post.featured_image && (
          <img
            className="full-blog-post__image"
            src={post.featured_image}
            alt={post.title}
          />
        )}
        <div
          className="full-blog-post__content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <NavLink className="full-blog-post__go-back" to={"/news"}>
          Go Back
        </NavLink>
      </div>
    );
  }
}

export default FullBlogPost;
