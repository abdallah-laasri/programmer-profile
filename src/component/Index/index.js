import React from "react";
import Home from "./../Home";
import Navbar from "./../Navbar";
import Portfolio from "./../Portfolio";
import Contact from "./../Contact";
import Profile from "./../Profile";
import Service from "./../Services";
import Footer from "./../Footer";
import ScrollUp from "./../ScrollUp";
import HiddenList from "./../HiddenList";
import "./style.css";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <HiddenList />
        <Home />
        <Profile />
        <Service />
        <Portfolio />
        <Contact />
        <Footer />
        <ScrollUp />
      </div>
    );
  }
}

export default Index;
