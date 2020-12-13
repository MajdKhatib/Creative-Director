import styled from "styled-components";

export const WorkSection = styled.div`
  height: auto;
  padding: 100px 0;
  overflow: hidden;
  text-align: center;
`;

//   height: auto;
//   padding: 100px 0;
//   overflow: hidden;
// }

export const WorkTitle = styled.h2`
  font-size: 60px;
  // /* float: left; */
  // /* display: inline; */
  // text-align: left;
`;
//   font-size: 60px;
//   /* float: left; */
//   /* display: inline; */
//   text-align: left;
// }

export const Span = styled.span`
  font-weight: normal;
`;
//   font-weight: normal;
// }

export const WorkPart = styled.div`
  margin-top: 20px;
  width: 30%;
  float: left;
  height: auto;
  padding: 100px 0;
  border: 1px solid #888;
  box-sizing: border-box;
  margin-left: 5%;
  margin-left: ${(props) => (props.first === 1 ? "0" : "5%")};
`;
//   margin-top: 20px;
//   width: 30%;
//   float: left;
//   height: auto;
//   padding: 100px 25px;
//   border: 1px solid #888;
//   box-sizing: border-box;
// }

export const Icon = styled.i`
  color: #888;
  margin-bottom: 20px;
`;
//   color: #888;
//   margin-bottom: 20px;
// }

export const ParkTitle = styled.h4`
  font-size: 25px;
  color: #e52;
  margin-bottom: 20px;
`;
//   font-size: 25px;
//   color: #e52;
//   margin-bottom: 20px;
// }

export const Line = styled.hr`
  width: 60%;
  margin: auto;
  margin-bottom: 20px;
`;
//   width: 60%;
//   margin: auto;
//   margin-bottom: 20px;
// }
