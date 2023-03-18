import React from "react";
import "../Stylesheets/Home.scss";

const Home = () => (
  <div>
    <div className={"content"}>
      <div className={"left"}>
        <div className={"content-left"}>
          <h1>
            Asgar<span className={"asgard-dns-name"}>DNS</span>: Your shield
            against online threats
          </h1>
          <p>Protect your computer from threats for only 3€ per months !</p>
          <span className={"download-btn"}>Download The DNS Server!</span>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
