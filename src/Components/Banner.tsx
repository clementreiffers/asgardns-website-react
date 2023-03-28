import React from "react";

import "../Stylesheets/Banner.scss";
import logo from "../Images/logo-only.png";
import { Link } from "react-router-dom";
import BannerLinks from "./BannerLinks";
import { ROUTES } from "../Constants";

const Banner = () => (
  <nav className={"banner"}>
    <div>
      <Link
        to={ROUTES.homepage}
        className={"left"}
        style={{ textDecoration: "none", color: "white" }}
      >
        <img src={logo} alt={"logo"} />
        <h1>
          Asgar<span className={"asgard-dns-name"}>DNS</span>
        </h1>
      </Link>
    </div>
    <div className={"right"}>
      <BannerLinks />
    </div>
  </nav>
);

export default Banner;
