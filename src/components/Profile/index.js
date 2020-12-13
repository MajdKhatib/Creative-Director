import React from "react";
import "./style.css";

const Profile = () => {
  return (
    <div className="profile-skilles">
      <div className="container">
        <div className="profile">
          <h2>
            <span>My</span> Profile
          </h2>

          <ul className="profile=list">
            <li className="profile-item">
              <span>Name</span>
              Majd Alkhatib
            </li>

            <li className="profile-item">
              <span>Birthday</span>
              28/1/1994
            </li>
            <li className="profile-item">
              <span>Address</span>
              ALhamdania
            </li>
            <li className="profile-item">
              <span>Phone</span>
              0954226343
            </li>
            <li className="profile-item">
              <span>Email</span>
              majd.khat92@gmail.com
            </li>
            <li className="profile-item">
              <span>Website</span>
              <a href="https:github.com/MajdKhatib">My GitHub</a>
            </li>
          </ul>
        </div>

        <div className="skilles">
          <h2>
            Some <span>Skilles</span>
          </h2>
          <p className="skilles-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            sit quae sint impedit, earum veritatis ea veniam repudiandae illum
            maiores hic dolor alias facere commodi,
          </p>

          <div className="bar bar1">
            <span className="title">Bootstrap</span>
            <span className="perc">100%</span>
            <div className="percent">
              <span></span>
            </div>
          </div>

          <div className="bar bar2">
            <span className="title">CSS3</span>
            <span className="perc">90%</span>
            <div className="percent">
              <span></span>
            </div>
          </div>

          <div className="bar bar3">
            <span className="title">Photoshop</span>
            <span className="perc">80%</span>
            <div className="percent">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
