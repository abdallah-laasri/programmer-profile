import React, { useEffect } from "react";
import "./style.css";

const ScrollUp = () => {
  useEffect(() => {
    const x = document.getElementsByClassName("scrollUp")[0];
    window.addEventListener("scroll", function() {
      let pos = document.scrollingElement.scrollTop;
      if (pos === 0) {
        x.classList.add("hideIt");
      } else {
        x.classList.remove("hideIt");
      }
    });
  }, []);

  return (
    <div>
      <a href="#home" className="scrollUp">
        <i className="fa fa-angle-up"></i>
      </a>
    </div>
  );
};
export default ScrollUp;
