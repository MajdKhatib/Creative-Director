import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Index from "./components/Index";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Index} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       {/* Navbar Section */}
//       <div className="navbar">
//         <div className="container">
//           <div className="logo">
//             <h2 className="logo-text">Ultra Profile</h2>
//           </div>

//           <input type="checkbox" id="nav" />
//           <label for="nav"></label>

//           <ul className="ul-list">
//             <li className="list-item">
//               <a href="#">Home</a>
//             </li>
//             <li className="list-item">
//               <a href="#">Work</a>
//             </li>
//             <li className="list-item">
//               <a href="#">Portfolio</a>
//             </li>
//             <li className="list-item">
//               <a href="#">Resume</a>
//             </li>
//             <li className="list-item">
//               <a href="#">About</a>
//             </li>
//             <li className="list-item">
//               <a href="#">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       {/* Home Section */}
//       <div className="home">
//         <div className="container">
//           <div className="home-content">
//             <h2 className="home-title">Majd Alkhatib</h2>
//             <h4 className="home-info">Creative Director</h4>
//             <p className="home-desc">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
//               fuga beatae explicabo odit? Sint quas dolor nulla numquam, hic
//               odio. Suscipit animi quisquam esse at.
//             </p>
//             <button className="home-btn">Let's Begin</button>
//           </div>
//         </div>
//       </div>
//       {/* Work Section */}
//       <div className="work">
//         <div className="container">
//           <h2>
//             <span>My</span> Work
//           </h2>
//           <div className="part">
//             <i className="icon fa fa-chain fa-3x"></i>
//             <h4>Mobile UX</h4>
//             <hr></hr>
//             <p className="part-desc">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
//               sit quae sint impedit, nulla.
//             </p>
//           </div>

//           <div className="part mc">
//             <i className="icon fa fa-bolt fa-3x"></i>
//             <h4>Mobile UX</h4>
//             <hr></hr>
//             <p className="part-desc">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
//               sit quae sint impedit, nulla.
//             </p>
//           </div>

//           <div className="part">
//             <i className="icon fa fa-chain fa-3x"></i>
//             <h4>Mobile UX</h4>
//             <hr></hr>
//             <p className="part-desc">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
//               sit quae sint impedit, nulla.
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* Portfolio Section */}
//       <div className="portfolio">
//         <h2>
//           <span>My</span> Portfolio
//         </h2>
//         <ul className="portfolio-list">
//           <li className="portfolio-item active">All</li>
//           <li className="portfolio-item">HTML</li>
//           <li className="portfolio-item">Photoshop</li>
//           <li className="portfolio-item">Wordpress</li>
//           <li className="portfolio-item">Mobile</li>
//         </ul>

//         <div className="box">
//           <div className="img-box"></div>
//           <div className="img-box"></div>
//           <div className="img-box"></div>
//           <div className="img-box"></div>
//           <div className="img-box"></div>
//           <div className="img-box"></div>
//           <div className="img-box"></div>
//           <div className="img-box"></div>
//         </div>
//       </div>
//       {/* Profile-Skilles Section */}
//       <div className="profile-skilles">
//         <div className="container">
//           <div className="profile">
//             <h2>
//               <span>My</span> Profile
//             </h2>

//             <ul className="profile=list">
//               <li className="profile-item">
//                 <span>Name</span>
//                 Majd Alkhatib
//               </li>

//               <li className="profile-item">
//                 <span>Birthday</span>
//                 28/1/1994
//               </li>
//               <li className="profile-item">
//                 <span>Address</span>
//                 ALhamdania
//               </li>
//               <li className="profile-item">
//                 <span>Phone</span>
//                 0954226343
//               </li>
//               <li className="profile-item">
//                 <span>Email</span>
//                 majd.khat92@gmail.com
//               </li>
//               <li className="profile-item">
//                 <span>Website</span>
//                 <a href="https://github.com/MajdKhatib">My GitHub</a>
//               </li>
//             </ul>
//           </div>

//           <div className="skilles">
//             <h2>
//               Some <span>Skilles</span>
//             </h2>
//             <p className="skilles-desc">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
//               sit quae sint impedit, earum veritatis ea veniam repudiandae illum
//               maiores hic dolor alias facere commodi,
//             </p>

//             <div className="bar">
//               <span className="title">Bootstrap</span>
//               <span className="perc">100%</span>
//               <div className="percent">
//                 <span></span>
//               </div>
//             </div>

//             <div className="bar">
//               <span className="title">CSS3</span>
//               <span className="perc">90%</span>
//               <div className="percent">
//                 <span></span>
//               </div>
//             </div>

//             <div className="bar">
//               <span className="title">Photoshop</span>
//               <span className="perc">80%</span>
//               <div className="percent">
//                 <span></span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Creative-Director Section */}
//       <div className="creative">
//         <div className="container">
//           <div className="creative-info">
//             <h2>
//               <span>This is </span>Me
//             </h2>
//             <h4>
//               <span>Creative</span> Director
//             </h4>
//             <p className="creative-desc">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
//               sit quae sint impedit, earum veritatis ea veniam repudiandae illum
//               maiores hic dolor alias facere commodi, quidem sunt praesentium.
//             </p>
//             <p className="creative-desc">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
//               sit quae sint impedit, earum veritatis ea veniam repudiandae illum
//               maiores hic dolor alias facere commodi, quidem sunt praesentium.
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* Social Section */}
//       <div className="social-media">
//         <div className="face">
//           <i className="icon fa fa-facebook fa-lg"></i>
//           <p>
//             <span className="info1">Follow Me on</span>
//             <span className="info2">Social Facebook</span>
//           </p>
//         </div>

//         <div className="twit">
//           <i className="icon fa fa-facebook fa-lg"></i>
//           <p>
//             <span className="info1">Follow Me on</span>
//             <span className="info2">Social Twitter</span>
//           </p>
//         </div>

//         <div className="pin">
//           <i className="icon fa fa-facebook fa-lg"></i>
//           <p>
//             <span className="info1">Follow Me on</span>
//             <span className="info2">Social Pinterest</span>
//           </p>
//         </div>
//       </div>
//       {/* Drop Section */}
//       <div className="drop">
//         <div className="container">
//           <h2>
//             <span>Drop</span> Me A Line
//           </h2>

//           <form>
//             <div className="form-input">
//               <input type="text" placeholder="Your Name..."></input>
//               <input type="email" placeholder="Your Email..."></input>
//             </div>
//             <input
//               type="text"
//               className="sub"
//               placeholder="Your Subject..."
//             ></input>
//             <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
//             <input type="submit" value="Send Message"></input>
//           </form>
//         </div>
//       </div>
//       {/* Footer Section */}
//       <div className="footer">
//         <p>copyright &copy; 2020 ultra profile</p>
//       </div>
//     </div>
//   );
// }

export default App;
