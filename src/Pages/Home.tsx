import React from "react";
import logo from "../Images/logo.png";
import Banner from "../Components/Banner";
import "../Stylesheets/Home.css";

const Home = () => (
  <div>
    <Banner />
    <div className={"content"}>
      <div className={"left"}>
        <div className={"content-left"}>
          <p>Protect your computer from threats for only 3€ per months !</p>
          <span>Download the DNS server!</span>
        </div>
      </div>
      <div className={"right"}>
        <img src={logo} alt={"logo"} />
      </div>
    </div>
  </div>
);

export default Home;
