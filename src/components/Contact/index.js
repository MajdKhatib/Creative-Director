import React from "react";
import "./style.css";
import Footer from "../Footer";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="drop">
        <div className="container">
          <h2>
            <span>Drop</span> Me A Line
          </h2>

          <form>
            <div className="form-input">
              <input type="text" placeholder="Your Name..."></input>
              <input type="email" placeholder="Your Email..."></input>
            </div>
            <input
              type="text"
              className="sub"
              placeholder="Your Subject..."
            ></input>
            <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message"></input>
          </form>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
