import React from "react";
import "../Stylesheets/Home.scss";
import { LINUX, MACOS, WIN } from "../Constants";

const WindowIcon = (
  <img src={WIN.img} alt={""} style={{ width: 25, verticalAlign: "middle" }} />
);

const MacOSIcon = (
  <img
    src={MACOS.img}
    alt={""}
    style={{ width: 25, verticalAlign: "middle" }}
  />
);

const LinuxIcon = (
  <img
    src={LINUX.img}
    alt={""}
    style={{ filter: "invert(1)", width: 25, verticalAlign: "middle" }}
  />
);

const GitHubIcon = () => (
  <img
    src={
      "https://th.bing.com/th/id/R.9230943f4e960d4311f3c8b9c28d92ab?rik=SCK0sB8EXFwNkA&pid=ImgRaw&r=0"
    }
    alt={""}
    style={{
      filter: "invert(1)",
      width: 25,
      verticalAlign: "middle",
    }}
  />
);
const DownloadContent = (props: { os: string }) => {
  const link: { [key: string]: string } = {
    Windows: WIN.link,
    Linux: LINUX.link,
    MacOS: MACOS.link,
  };
  const icon: { [key: string]: any } = {
    Windows: WindowIcon,
    MacOS: MacOSIcon,
    Linux: LinuxIcon,
  };

  return (
    <div className={"download-content"}>
      <a className={"download-btn"} href={link[props.os]}>
        {icon[props.os]}
        Download for {props.os}
      </a>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <div className={"content"}>
        <div className={"left"}>
          <div className={"content-left"}>
            <h1 className={"main-title"}>
              Asgar<span className={"asgard-dns-name"}>DNS</span>: Your shield
              against online threats
            </h1>
            <p>Protect your computer from threats for only 3€ per month !</p>
            <div className={"downloads"}>
              <DownloadContent os={"Windows"} />
              <DownloadContent os={"MacOS"} />
              <DownloadContent os={"Linux"} />
              <a
                className={"github-btn"}
                href={"https://github.com/clementreiffers/dns-server"}
              >
                <GitHubIcon />
                See our GitHub
              </a>
            </div>
            <div>
              <h2 className={"important-title"}>
                Protect Yourself from internet Threat
              </h2>
              <h2 className={"important-title"}>Boosted by AI</h2>
              <h2 className={"important-title"}>Respect RGPD</h2>
              <h2 className={"important-title"}>Computed by cloud</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
