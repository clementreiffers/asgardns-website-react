import { OS_TYPE, profileType, ROUTES_TYPE } from "./types";

const WIN: OS_TYPE = {
  link: "https://github.com/clementreiffers/dns-server/releases/download/refs%2Fheads%2Fmain/AsgarDNS-Windows-v16.exe",
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Windows_logo_-_2021_%28White%29.svg/800px-Windows_logo_-_2021_%28White%29.svg.png",
};

const LINUX: OS_TYPE = {
  link: "https://github.com/clementreiffers/dns-server/releases/download/refs%2Fheads%2Fmain/AsgarDNS-Ubuntu-v16",
  img: "https://cdn.onlinewebfonts.com/svg/img_237140.png",
};

const MACOS: OS_TYPE = {
  link: "https://github.com/clementreiffers/dns-server/releases/download/refs%2Fheads%2Fmain/AsgarDNS-MacOS-v16",
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/505px-Apple_logo_white.svg.png?20220821122232",
};

const ROUTES: ROUTES_TYPE = {
  homepage: "/asgardns-website-react",
  aboutus: "/about-us",
};

const LINKEDIN_CLEMENT: profileType = {
  name: "Clément Reiffers",
  photo:
    "https://media.licdn.com/dms/image/D4E03AQF1Ss3SffnGJg/profile-displayphoto-shrink_800_800/0/1670083870541?e=2147483647&v=beta&t=qRLlE0jEUokgBgPLQ_4E45DrGINbH4r6d25qB_QdclA",
  link: "https://fr.linkedin.com/in/cl%C3%A9ment-reiffers-bb8983185",
};

const LINKEDIN_MAELLE: profileType = {
  name: "Maelle Marcelin",
  photo:
    "https://media.licdn.com/dms/image/C4E03AQE6QM87yy6P3Q/profile-displayphoto-shrink_800_800/0/1610377642244?e=2147483647&v=beta&t=PpNDJFPS7kI-RZJ_cGPTJrburGLmQCIXXBlTNGjEt00",
  link: "https://fr.linkedin.com/in/ma%C3%ABlle-marcelin-aa3077204",
};

const LINKEDIN_SONIA: profileType = {
  name: "Sonia Moghraoui",
  photo:
    "https://media.licdn.com/dms/image/C4E03AQFL-_N44f3iow/profile-displayphoto-shrink_800_800/0/1656074202476?e=2147483647&v=beta&t=1Nh541oQJqdHjzBddHRg4UxEIewshUm-OFZRr3_2iS4",
  link: "https://fr.linkedin.com/in/sonia-moghraoui-b52406204",
};

const LINKEDIN_CAMILLE: profileType = {
  name: "Camille Bayon De Noyer",
  photo:
    "https://media.licdn.com/dms/image/C4E03AQGMgC5ZPRGblw/profile-displayphoto-shrink_800_800/0/1661118172370?e=2147483647&v=beta&t=mo7KIEp8h2jLrCs4B-p_aLu6NjibPA4cYDh7beFc1R4",
  link: "https://fr.linkedin.com/in/camille-bayon-de-noyer-ab59a71a3",
};

export {
  WIN,
  LINUX,
  MACOS,
  ROUTES,
  LINKEDIN_CLEMENT,
  LINKEDIN_CAMILLE,
  LINKEDIN_MAELLE,
  LINKEDIN_SONIA,
};
