import React from "react";

import "../Stylesheets/Banner.css";
import logo from "../Images/logo.png";

const Banner = () => (
  <nav className={"banner"}>
    <div className={"left"}>
      <img src={logo} alt={"logo"} />
      <h1>
        Asgar<span>DNS</span>
      </h1>
    </div>
    <div className={"right"}>
      <a href={""}>Download</a>
      <a href={""}>About Us</a>
      <a href={""}>Pricing</a>
    </div>
  </nav>
);

export default Banner;

