import React from "react";
import he from "he";
import { fetch } from "whatwg-fetch";
import "promise-polyfill/src/polyfill";

import { NavLink } from "react-router-dom";

class FullBlogPost extends React.Component {
  constructor() {
    super();
    this.state = { post: { title: "" } };
  }
  componentDidMount() {
    fetch(
      `https://public-api.wordpress.com/rest/v1.1/sites/advocates-for-animals.com/posts/${
        this.props.match.params.id
      }`
    )
      .then(resp => resp.json())
      .then(data => this.setState({ post: data }));
  }

  render() {
    const { post } = this.state;
    return (
      <div className="full-blog-post">
        <h3 className="full-blog-post__heading">{he.decode(post.title)}</h3>
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
        <NavLink className="full-blog-post__go-back" to={"/blog"}>
          Go Back
        </NavLink>
      </div>
    );
  }
}

export default FullBlogPost;
