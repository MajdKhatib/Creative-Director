import styled from "styled-components";

export const PortfolioSection = styled.div`
  background: #f8f8f8;
  padding-top: 20px;
  text-align: center;
`;
//   background: #f8f8f8;
//   padding-top: 20px;
//   text-align: center;
// }

export const PortfolioTitle = styled.h2`
  font-size: 35px;
`;
//   font-size: 35px;
// }

export const Span = styled.span`
  font-weight: normal;
`;
//   font-weight: normal;
// }

export const PortfolioList = styled.ul`
  margin: 20px 0;
`;
//   margin: 20px 0;
// }

export const PortfolioItem = styled.li`
  display: inline-block;
  width: 100px;
  padding: 10px;
  background: ${(props) => (props.active ? "#e52" : "")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
`;
//   display: inline-block;
//   width: 100px;
//   padding: 10px;
// }

// .portfolio-item.active {
//   background: #e52;
//   color: white;
// }

// .portfolio .box {
//   font-size: 0;
//   /* display: ; */
// }

export const ImageBox = styled.div`
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  width: 25%;
  float: left;
  font-size: 0;
  position: relative;

  &:hover > div {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

// .img-box {
//   width: 25%;
//   height: 200px;
//   display: inline-block;
//   background-image: url("../images/Portfolio/portfolio-img1.png");
//   background-size: cover;
//   /* font-size: 0; */
// }

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(235, 84, 36, 0.4);
  font-size: 15px;
  opacity: 0;
  margin: 0;
`;

export const OverlaySpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  display: block;
  padding: 10px 20px;
  cursor: pointer;
  border: 2px solid #e52;
`;
