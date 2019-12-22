import React from "react";
import "./style.css";

class HiddenList extends React.Component {
  showNavbar = () =>
    (document.getElementsByClassName("hidden-list")[0].style.display = "none");

  render() {
    return (
      <div className="hidden-list">
        <span onClick={this.showNavbar} className="close fa fa-times"></span>
        <a href="#home">home</a>
        <a href="#profile">profile</a>
        <a href="#service">service</a>
        <a href="#portfolio">portfolio</a>
        <a href="#contact">contact</a>
      </div>
    );
  }
}
export default HiddenList;
