import React from "react";
import "../Stylesheets/Home.scss";
import { LINUX_LINK, MACOS_LINK, WINDOWS_LINK } from "../Constants";

const WindowIcon = (
  <img
    src={
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Windows_logo_-_2021_%28White%29.svg/800px-Windows_logo_-_2021_%28White%29.svg.png"
    }
    alt={""}
    style={{ width: 25, verticalAlign: "middle" }}
  />
);

const MacOSIcon = (
  <img
    src={
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/505px-Apple_logo_white.svg.png?20220821122232"
    }
    alt={""}
    style={{ width: 25, verticalAlign: "middle" }}
  />
);

const LinuxIcon = (
  <img
    src={"https://cdn.onlinewebfonts.com/svg/img_237140.png"}
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
    Windows: WINDOWS_LINK,
    Linux: LINUX_LINK,
    MacOS: MACOS_LINK,
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
            <h1>
              Asgar<span className={"asgard-dns-name"}>DNS</span>: Your shield
              against online threats
            </h1>
            <p>Protect your computer from threats for only 3€ per months !</p>
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
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
