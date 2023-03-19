import React from "react";

import "../Stylesheets/Banner.scss";
import logo from "../Images/logo-only.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../Constants";

const Banner = () => (
  <nav className={"banner"}>
    <div className={"left"}>
      <img src={logo} alt={"logo"} />
      <h1>
        Asgar<span className={"asgard-dns-name"}>DNS</span>
      </h1>
    </div>
    <div className={"right"}>
      <Link to={ROUTES.homepage} className={"link-banner"}>
        Home
      </Link>
      <Link to={ROUTES.aboutus} className={"link-banner"}>
        About Us
      </Link>
    </div>
  </nav>
);

export default Banner;
