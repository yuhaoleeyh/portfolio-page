import React from "react";
import "./css/index.scss";

import { Button } from "react-bootstrap";

const Testimonials = () => {
    return (
  <div className="resume">
    <div className="text-center words">
      <div className="white-colour resume-break">
        <h3 className="line-break">READ SOME OF MY TESTIMONIALS</h3>
      </div>
      <Button
        onClick={(e) => {
          e.preventDefault();
          window.location.href =
            "https://drive.google.com/file/d/14N-8wTbyO6nh7ZGLHPX-7xVz9n7U-psp/view?usp=sharing";
        }}
      >
        Grab A Copy
      </Button>
    </div>
  </div>
    )
};

export default Testimonials;
