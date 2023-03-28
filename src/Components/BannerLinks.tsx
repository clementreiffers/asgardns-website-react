import { Link } from "react-router-dom";
import React from "react";
import { ROUTES } from "../Constants";

const BannerLinks = () => (
  <>
    <Link to={ROUTES.homepage} className={"link-banner"}>
      Home
    </Link>
    <Link to={ROUTES.aboutus} className={"link-banner"}>
      About Us
    </Link>
  </>
);

export default BannerLinks;
