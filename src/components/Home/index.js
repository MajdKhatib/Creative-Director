import React from "react";

import {
  HomeSection,
  HomeInfo,
  HomeTitle,
  HomeContent,
  HomeDesc,
  HomeBtn,
} from "./style.js";

const Home = () => {
  return (
    <HomeSection>
      <div className="container">
        <HomeContent>
          <HomeTitle>Home Title</HomeTitle>
          <HomeInfo>Creative Director</HomeInfo>
          <HomeDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            fuga beatae explicabo odit? Sint quas dolor nulla numquam, hic odio.
            Suscipit animi quisquam esse at.
          </HomeDesc>
          <HomeBtn>Let's Begin</HomeBtn>
        </HomeContent>
      </div>
    </HomeSection>
  );
};

export default Home;
