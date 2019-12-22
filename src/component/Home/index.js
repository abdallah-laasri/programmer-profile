import React from "react";
import "./style.css";
import Avatar from "./../../images/home-avatar.PNG";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="black-container"></div>
        <div className="home-container">
          <div className="avatar">
            <img src={Avatar} alt="avatar" />
          </div>
          <h1>hi, i'm john doe</h1>
          <p>let's service together</p>
          <a href="#contact">
            <input className="contact-me" type="button" value="contact me" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
