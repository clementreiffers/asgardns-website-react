import React from "react";
import "../Stylesheets/Footer.scss";

const Footer = () => (
  <div className={"footer"}>
    <div className={"inline-footer"}>
      <div className={"footer-left"}>
        Our team:
        <ul>
          <li>
            <a href={"https://github.com/clementreiffers"}>Clément Reiffers </a>
          </li>
          <li>
            <a href={"https://github.com/clementreiffers"}>Maelle Marcelin </a>
          </li>
          <li>
            <a href={"https://github.com/clementreiffers"}>
              Camille Bayon De Noyer{" "}
            </a>
          </li>
          <li>
            <a href={"https://github.com/clementreiffers"}>Sonia Moghraoui </a>
          </li>
        </ul>
      </div>
      <div className={"footer-right"}>
        GitHub links relatives to project:
        <ul>
          <li>
            <a href={"https://github.com/clementreiffers/AI-network-analysis"}>
              The AI
            </a>
          </li>
          <li>
            <a
              href={"https://github.com/maaelle/architecture_network_analysis"}
            >
              The cloud architecture
            </a>
          </li>
          <li>
            <a href={"https://github.com/clementreiffers/dns-server"}>
              The CLI app
            </a>
          </li>
          <li>
            <a
              href={"https://github.com/clementreiffers/asgardns-website-react"}
            >
              The website
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className={"footer-name"}>AsagarDNS | 2023</div>
  </div>
);

export default Footer;
