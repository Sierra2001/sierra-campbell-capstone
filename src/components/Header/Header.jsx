import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Icons/Fitness Finder (Instagram Post (45)).png";
import smallLogo from "../../assets/Icons/FF.png";
import menuIcon from "../../assets/Icons/MenuBar.png";
import "./Header.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="header">
      {/* Small Logo */}
      <Link to="/">
        <img
          src={smallLogo}
          alt="Small Fitness Finder Logo"
          className="smallLogo"
        />
      </Link>

      {/* Main Logo */}
      <img src={logo} alt="Fitness Finder Logo" className="logo" />

      {/* Menu Icon */}
      <img
        src={menuIcon}
        alt="Menu Icon"
        className="menu-icon"
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <Link
            to="/find-gym"
            className="dropdown-link"
            onClick={handleLinkClick}
          >
            Find a Gym
          </Link>
          <Link
            to="/find-workout"
            className="dropdown-link"
            onClick={handleLinkClick}
          >
            Find a Workout
          </Link>
          <Link to="/about" className="dropdown-link" onClick={handleLinkClick}>
            About
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Header;
