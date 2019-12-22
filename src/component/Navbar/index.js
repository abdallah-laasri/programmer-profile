import React from "react";
import "./style.css";

class Navbar extends React.Component {
  componentDidMount() {
    const navbar = document.getElementsByClassName("navbar")[0];
    const anchorList = document.getElementsByClassName("navbar-list")[0]
      .children;
    const logo = document.getElementsByClassName("logo")[0];

    window.addEventListener("scroll", function() {
      var pos = document.scrollingElement.scrollTop;
      if (pos === 0) {
        navbar.classList.remove("navbareffect");
        navbar.classList.add("navbareffectUp");
        for (let i = 0; i < anchorList.length; i++) {
          anchorList[i].style.color = "#fff";
        }
        logo.style.color = "#FFF";
      } else {
        navbar.classList.add("navbareffect");
        navbar.classList.remove("navbareffectUp");
        for (let i = 0; i < anchorList.length; i++) {
          anchorList[i].style.color = "#000";
        }
        logo.style.color = "#000";
      }
    });
  }

  showNavbar = () =>
    (document.getElementsByClassName("hidden-list")[0].style.display = "block");

  render() {
    return (
      <section className="navbar">
        <div className="container">
          <div className="navbar-container">
            <div className="logo">
              <p>logo</p>
            </div>
            <div className="navbar-list">
              <a href="#home">home</a>
              <a href="#profile">profile</a>
              <a href="#service">service</a>
              <a href="#portfolio">portfolio</a>
              <a href="#contact">contact</a>
            </div>
            <span
              onClick={this.showNavbar}
              className="three-bars fa fa-bars"
            ></span>
          </div>
        </div>
      </section>
    );
  }
}

export default Navbar;
