import React from "react";
import he from "he";
import { fetch } from "whatwg-fetch";
import "promise-polyfill/src/polyfill";

import fb from "../Images/SocialMediaIcons/facebook2.svg";
import twitter from "../Images/SocialMediaIcons/twitter.svg";
import linkedIn from "../Images/SocialMediaIcons/linkedin.svg";

import { NavLink } from "react-router-dom";

class FullBlogPost extends React.Component {
  constructor() {
    super();
    this.state = { post: { title: "" } };
  }
  componentDidMount() {
    fetch(
      `https://public-api.wordpress.com/rest/v1.1/sites/advocates-for-animals.com/posts/${this.props.match.params.id}`
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
        <p className="full-blog-post__disclaimer">
          We are grateful to everyone who contributes to the Advocates for
          Animals blog. Blogs should not be taken as legal advice nor do they
          necessarily reflect the views of the firm
        </p>

        <div className="full-blog-post__share">
          <h3>Share this post</h3>
          <a
            target="_blank"
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
          >
            <img src={fb} alt="facebook" />
          </a>
          <a
            target="_blank"
            href={`https://twitter.com/home?status=${window.location.href}`}
          >
            <img src={twitter} alt="twitter" />
          </a>
          <a
            target="_blank"
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
          >
            <img src={linkedIn} alt="twitter" />
          </a>
        </div>

        <NavLink className="full-blog-post__go-back" to={"/blog"}>
          Go Back
        </NavLink>
      </div>
    );
  }
}

export default FullBlogPost;
