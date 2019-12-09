import React from "react";

import HomeNav from "../Components/HomeNav";
import BlogPost from "../Components/BlogPost";

import bgMp4 from "../Videos/bg-video.mp4";
import bgWebm from "../Videos/bg-video.webm";

const Home = ({ posts }) => {
  return (
    <div className="home-container">
      <div className="blog-container">
        <h3 className="latest-news-heading">Latest News</h3>
        {posts.map((post, index) => {
          if (index < 3) {
            return <BlogPost key={index} post={post} />;
          }
        })}

        <video className="home-bg-video" autoPlay muted loop>
          <source src={bgMp4} type="video/mp4" />
          <source src={bgWebm} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>
      <HomeNav />
    </div>
  );
};

export default Home;
