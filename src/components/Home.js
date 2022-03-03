import React from "react";
import "../styles/nav.css";
import logo from "../images/image0.png";

function Home() {
  return (
    <div>
      <div>
        <h1>The Future of art is Digitial</h1>
        <h2>Click images to view artwork</h2>
        <center>
          <div style={{ maxWidth: "400px" }}>
            All content was made by Flavio Herrera and only for the use of
            Flavio incorporated. Distribution of illegal copies of the files can
            send you to jail. See something, say something. And most importantly
            make sure to enjoy your stay : )
          </div>
          <div
            style={{
              maxWidth: "400px",
              fontSize: "18px",
              color: "red",
              padding: "10px",
            }}
          >
            **All copy rights are reserved to Flavio inc, please view terms and
            conditions**
          </div>
        </center>
      </div>

      <img id="bannerImage" alt="imageMatrix" src={logo} />
    </div>
  );
}

export default Home;
