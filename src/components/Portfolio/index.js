import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  PortfolioSection,
  PortfolioTitle,
  PortfolioList,
  PortfolioItem,
  Span,
  Overlay,
  OverlaySpan,
  Image,
  ImageWrapper,
  ImageBox,
} from "./style.js";

const Portfolio = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setImages(res.data.portfolio);
    });
  }, []);

  const PortfolioImages = images.map((imagesItem) => {
    return (
      <ImageWrapper key={imagesItem.id}>
        <Image src={imagesItem.image} />
        <Overlay>
          <OverlaySpan>Show Image</OverlaySpan>
        </Overlay>
      </ImageWrapper>
    );
  });

  return (
    <PortfolioSection>
      <PortfolioTitle>
        <Span>My</Span> Portfolio
      </PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>

      <ImageBox>{PortfolioImages}</ImageBox>
    </PortfolioSection>
  );
};

export default Portfolio;
