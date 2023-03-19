import "../Stylesheets/AboutUs.scss";

type profileType = { name: string; photo: string; link: string };

const linkedinClement = {
  name: "Clément Reiffers",
  photo:
    "https://media.licdn.com/dms/image/D4E03AQF1Ss3SffnGJg/profile-displayphoto-shrink_800_800/0/1670083870541?e=2147483647&v=beta&t=qRLlE0jEUokgBgPLQ_4E45DrGINbH4r6d25qB_QdclA",
  link: "https://fr.linkedin.com/in/cl%C3%A9ment-reiffers-bb8983185",
};

const linkedinMaelle = {
  name: "Maelle Marcelin",
  photo:
    "https://media.licdn.com/dms/image/C4E03AQE6QM87yy6P3Q/profile-displayphoto-shrink_800_800/0/1610377642244?e=2147483647&v=beta&t=PpNDJFPS7kI-RZJ_cGPTJrburGLmQCIXXBlTNGjEt00",
  link: "https://fr.linkedin.com/in/ma%C3%ABlle-marcelin-aa3077204",
};

const linkedinSonia = {
  name: "Sonia Moghraoui",
  photo:
    "https://media.licdn.com/dms/image/C4E03AQFL-_N44f3iow/profile-displayphoto-shrink_800_800/0/1656074202476?e=2147483647&v=beta&t=1Nh541oQJqdHjzBddHRg4UxEIewshUm-OFZRr3_2iS4",
  link: "https://fr.linkedin.com/in/sonia-moghraoui-b52406204",
};

const linkedinCamille = {
  name: "Camille Bayon De Noyer",
  photo:
    "https://media.licdn.com/dms/image/C4E03AQGMgC5ZPRGblw/profile-displayphoto-shrink_800_800/0/1661118172370?e=2147483647&v=beta&t=mo7KIEp8h2jLrCs4B-p_aLu6NjibPA4cYDh7beFc1R4",
  link: "https://fr.linkedin.com/in/camille-bayon-de-noyer-ab59a71a3",
};

const ShowProfile = (props: { profile: profileType }) => (
  <figure className={"profileFigure"}>
    <a href={props.profile.link}>
      <img src={props.profile.photo} alt={""} />
      <figcaption>{props.profile.name}</figcaption>
    </a>
  </figure>
);

export const AboutUs = () => (
  <div className={"about-us"}>
    <h1>About Us</h1>
    <h2>
      We are a team of 4 people behind AsgarDNS, you'll find our LinkedIn below:
    </h2>
    <div className={"team"}>
      <ShowProfile profile={linkedinClement} />
      <ShowProfile profile={linkedinMaelle} />
      <ShowProfile profile={linkedinCamille} />
      <ShowProfile profile={linkedinSonia} />
    </div>
    <p>
      Don't hesitate to contact us! We would love to hear about your experiences
      with our service!
    </p>
  </div>
);
