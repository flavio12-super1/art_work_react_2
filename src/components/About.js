import React from "react";
import "../styles/about.css";
import teaser from "../images/image1.png";

function About() {
  return (
    <div id="contentWrapper">
      <h2>Hi this is flavio herrera</h2>
      <div>welcome to my website hope you enjoy your time being</div>

      <div style={{ width: "400px", margin: "25px" }}>
        currently worting on a social media named lurker, what started as an
        idea has now turn into something more real
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <a
          href="https://socket-image-2.herokuapp.com/"
          target="_blank"
          style={{ marginBottom: "25px" }}
        >
          Lurker
        </a>
        <a href="https://socket-image-2.herokuapp.com/" target="_blank">
          <img src={teaser} alt="my teaser image" style={{ width: "900px" }} />
        </a>
      </div>
    </div>
  );
}

export default About;
