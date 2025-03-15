import { Link } from "react-router-dom";
import logo from "../../assets/Icons/Fitness Finder (Instagram Post (45)).png";
import smallLogo from "../../assets/Icons/FF.png";
import menuBar from "../../assets/Icons/MenuBar.png";
import "./Header.scss";

function Header() {
  return (
    <nav>
      {/* Small Logo */}
      <img
        src={smallLogo}
        alt="Small Fitness Finder Logo"
        className="smallLogo"
      />

      {/* Main Logo */}
      <img src={logo} alt="Fitness Finder Logo" className="logo" />

      {/* Menu Bar Icon */}
      <img src={menuBar} alt="Menu" className="menu-icon" />
    </nav>
  );
}

export default Header;
