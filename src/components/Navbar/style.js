import styled from "styled-components";

export const NavbarSection = styled.div`
  padding: 10px 0;
  overflow: hidden;
  background: #fff;
  position: relative;
`;
/* border-bottom: 1px solid #000; */
// .navbar {
//   padding: 10px 0;
//   overflow: hidden;
//   background: #fff;
//   position: relative;
//   /* border-bottom: 1px solid #000; */
// }

export const Logo = styled.div`
  width: 50%;
  float: left;
`;

// .logo {
//   width: 50%;
//   float: left;
// }

export const LogoText = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-align: left;
`;
// .navbar .logo .logo-text {
//   font-size: 30px;
//   font-weight: bold;
//   text-align: left;
// }

// .navbar input,
// .navbar label {
//   position: absolute;
//   top: 5px;
//   right: 25px;
// }

// .navbar input {
//   display: none;
// }

// .navbar label {
//   display: block;
//   width: 15px;
//   height: 15px;
//   background: url("../src/components/images/Navbar/open.png") no-repeat;
//   background-size: cover;
//   padding: 15px;
//   cursor: pointer;
// }

// .navbar input:checked ~ .ul-list {
//   display: block;
// }

// .navbar input:checked ~ label {
//   background: url("../src/components/images/Navbar/close.png") no-repeat;
//   background-size: cover;
// }

export const UlList = styled.ul`
  width: 50%;
  float: left;
  padding: 0;
`;
// .navbar .ul-list {
//   width: 50%;
//   float: left;
// }

export const ListItem = styled.li`
  display: inline-block;
`;
// .navbar .ul-list .list-item {
//   display: inline-block;
// }

export const Anchor = styled.a`
  display: block;
  color: #222;
  padding: 10px 15px;
  font-weight: bold;

  &:hover {
    color: #e52;
  }
`;

// export const Link = styled(Anchor)`

// `;

// .navbar .ul-list .list-item a {
//   display: block;
//   color: #222;
//   padding: 10px 15px;
//   font-weight: bold;
// }

// .navbar .ul-list .list-item a:hover {
//   color: #e52;
//   /* background: #222; */
// }
