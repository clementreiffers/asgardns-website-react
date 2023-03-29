import "../Stylesheets/AboutUs.scss";
import {
  LINKEDIN_CAMILLE,
  LINKEDIN_CLEMENT,
  LINKEDIN_MAELLE,
  LINKEDIN_SONIA,
} from "../Constants";
import { profileType } from "../types";
import logo from "../Images/new_logo.png";
import React from "react";

const ShowProfile = (props: { profile: profileType }) => (
  <figure className={"profileFigure"}>
    <a
      href={props.profile.link}
      target={"_blank"}
      rel="noreferrer"
      style={{ color: "white", textDecoration: "none" }}
    >
      <img src={props.profile.photo} alt={""} />
      <figcaption>{props.profile.name}</figcaption>
    </a>
  </figure>
);

export const AboutUs = () => (
  <div className={"home"}>
    <div className={"content"}>
      <div className={"left"}>
        <div className={"content-left"}>
          <h1 className={"main-title"}>
            <img src={logo} alt={""} className={"content-logo-home"} />
            About <span className={"asgard-dns-name"}>US</span>
          </h1>

          <h2>
            We are a team of 4 people behind AsgarDNS, you'll find our LinkedIn
            below:
          </h2>
          <div className={"team"}>
            <ShowProfile profile={LINKEDIN_CLEMENT} />
            <ShowProfile profile={LINKEDIN_MAELLE} />
            <ShowProfile profile={LINKEDIN_CAMILLE} />
            <ShowProfile profile={LINKEDIN_SONIA} />
          </div>
          <p>
            Don't hesitate to contact us! We would love to hear about your
            experiences with our service!
          </p>
        </div>
      </div>
    </div>
  </div>
);
