import React from "react";

import "../Stylesheets/Banner.scss";
import logo from "../Images/logo-only.png";
import { Link } from "react-router-dom";

const Banner = () => (
  <nav className={"banner"}>
    <div className={"left"}>
      <img src={logo} alt={"logo"} />
      <h1>
        Asgar<span className={"asgard-dns-name"}>DNS</span>
      </h1>
    </div>
    <div className={"right"}>
      <Link to={"/"} className={"link-banner"}>
        Home
      </Link>
      <Link to={"/download"} className={"link-banner"}>
        Download
      </Link>
      <Link to={"/about-us"} className={"link-banner"}>
        About Us
      </Link>
      <Link to={"/princing"} className={"link-banner"}>
        Pricing
      </Link>
    </div>
  </nav>
);

export default Banner;
