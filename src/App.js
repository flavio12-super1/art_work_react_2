import React from "react";
import "./styles/App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Art from "./components/Art";
import Home from "./components/Home";
import logo from "./images/desmos_polarr/image11.png";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  // let pain = false;
  // let navigate = useNavigate();

  return (
    <div className="App">
      <img src={logo} id="logo" alt="frontImage" />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<Art />} />
        <Route path="/about" element={<About />} />
        {/* {pain ? <Route path="/about" element={<About />} /> : navigate("/")} */}
        {/* all around me are familiar faces */}
      </Routes>
    </div>
  );
}

export default App;
