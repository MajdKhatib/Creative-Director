import styled from "styled-components";

export const Socialmedia = styled.div`
  height: auto;
  overflow: hidden;
  text-align: center;
`;

export const Social = styled.div`
  width: 33.3%;
  float: left;
  box-sizing: border-box;
  padding: 100px 0;

  background: ${(props) => (props.item === 1 ? "#46a" : "")};
  background: ${(props) => (props.item === 2 ? "#59c" : "")};
  background: ${(props) => (props.item === 3 ? "#d23" : "")};
`;

export const Icon = styled.i`
  width: 50px;
  height: 50px;
  background: #fff;
  line-height: 50px;
  color: #888;
  float: left;
  margin: 0 10px 0 50px;
`;

export const SocialDesc = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: white;
  float: left;
`;

export const Span = styled.span`
  display: block;
  margin-bottom: 8px;
`;

export const SpanInfo = styled.span`
  font-weight: normal;
  color: #ddd;
`;

//     width: 33.3%;
//     float: left;
//     box-sizing: border-box;
//     padding: 100px 0;
//   }
