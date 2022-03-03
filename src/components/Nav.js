import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <center>
      <nav>
        <h3>Wellcome</h3>

        <div style={{ display: "flex" }}>
          <div className="myLink">
            {" "}
            <Link to="/" style={navStyle}>
              <div>Home</div>
            </Link>
          </div>
          <div className="myLink">
            {" "}
            <Link to="/art" style={navStyle}>
              <div>Art</div>
            </Link>
          </div>
          <div className="myLink">
            {" "}
            <Link to="/about" style={navStyle}>
              <div>About</div>
            </Link>
          </div>
        </div>
      </nav>
    </center>
  );
}

export default Nav;
