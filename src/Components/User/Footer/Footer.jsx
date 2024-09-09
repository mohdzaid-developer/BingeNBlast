import "./Footer.scss";
import { Link } from "react-router-dom";

// Images
import logo from "../../../Assets/logo.png";

const Footer = () => {
  const links1 = [
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/theaters",
      name: "Theaters",
    },
  ];

  const links2 = [
    {
      path: "/refund",
      name: "Refund",
    },
    {
      path: "/privacy-policy",
      name: "Privacy Policy",
    },
  ];
  return (
    <footer>
      <div className="section">
        <img src={logo} alt="" />
        <p>
          XGWQ+G4Q, Waddepally,
          <br /> Excise Colony, Hanamkonda,
          <br /> Telangana 506370
        </p>
      </div>
      <div className="section">
        {links1.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="section">
        {links2.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="section">
        <p>Contact Us</p>
        <a href="tel:+919381337074">+91 93813 37074</a>
        <a href="mailto:bingnblast@gmail.com">bingnblast@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
