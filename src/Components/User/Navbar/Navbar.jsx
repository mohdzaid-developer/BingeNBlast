import "./Navbar.scss";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// Images
import logo from "../../../Assets/logo.png";

// Icons
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const links = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/theaters",
      name: "Theaters",
    },
    {
      link: "/refund",
      name: "Refund",
    },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className={click ? "menu active" : "menu"}>
        {links.map((link, index) => (
          <NavLink key={index} to={link.link} onClick={() => setClick(!click)}>
            {link.name}
          </NavLink>
        ))}
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes style={{ color: "white" }} size={25} />
        ) : (
          <FaBars style={{ color: "white" }} size={25} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
