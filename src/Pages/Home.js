import React from "react";

import BlogPost from "../Components/BlogPost";

import bgMp4 from "../Videos/bg-video.mp4";
import bgWebm from "../Videos/bg-video.webm";

const Home = ({ posts, renderPost }) => {
  return (
    <div className="home-container">
      <h2 className="sub-heading">News</h2>
      <div className="blog-container">
        {posts.map((post, index) => {
          return <BlogPost key={index} post={post} renderPost={renderPost} />;
        })}
        <video className="home-bg-video" autoPlay muted loop>
          <source src={bgMp4} type="video/mp4" />
          <source src={bgWebm} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
    </div>
  );
};

export default Home;
