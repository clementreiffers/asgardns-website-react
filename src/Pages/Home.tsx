import React from "react";
import Banner from "../Components/Banner";
import "../Stylesheets/Home.css";
import logo from "../Images/logo.png";

const Home = () => (
  <div>
    <Banner />
    <div className={"content"}>
      <div className={"left"}>
        <div className={"content-left"}>
          <h1>
            Asgar<span className={"asgard-dns-name"}>DNS</span>: Your shield
            against online threats
          </h1>
          <p>Protect your computer from threats for only 3€ per months !</p>
          <span className={"download-btn"}>Download the DNS server!</span>
        </div>
      </div>
      <div className={"right"}>
        <img src={logo} alt={"logo"} />
      </div>
    </div>
  </div>
);

export default Home;
