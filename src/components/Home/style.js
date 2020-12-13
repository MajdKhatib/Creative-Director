import styled from "styled-components";

export const HomeSection = styled.div`
  height: 550px;
  background: url("images/Home/home-bg.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  text-align: center;
`;

//   height: 550px;
//   background: url("../src/components/images/Home/home-bg.jpg");
//   background-size: cover;
//   background-position: center;
//   position: relative;
// }

export const HomeContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 30px;
`;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// }

export const HomeTitle = styled.h2`
  font-size: 60px;
  font-weight: bold;
  color: #666;
`;
//   font-size: 60px;
//   font-weight: bold;
//   color: #666;
//   /* margin-bottom: 20px; */
// }

export const HomeInfo = styled.h4`
  font-size: 35px;
  color: #e52;
  margin: 20px 0;
`;
//   font-size: 35px;
//   color: #e52;
//   margin: 20px 0;
// }

export const HomeDesc = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #888;
`;
//   font-size: 20px;
//   line-height: 1.5;
//   color: #888;
// }

export const HomeBtn = styled.button`
  background: #e52;
  color: White;
  font-size: 18px;
  width: 150px;
  border: 0;
  margin: 20px 0;
  padding: 15px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: white;
    color: #e52;
  }
`;
//   background: #e52;
//   color: White;
//   font-size: 18px;
//   width: 150px;
//   border: 0;
//   margin: 20px 0;
//   padding: 15px;
//   cursor: pointer;
//   font-weight: bold;
// }

// .home-btn:hover {
//   background: white;
//   color: #e52;
// }
