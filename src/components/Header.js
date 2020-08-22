import React from "react";
import "../assets/styles/components/Header.scss";
import { Link } from "react-router-dom";

const Header = ({ setDarkMode, darkMode }) => {
  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="padre">
      <header>
        <Link to="/">
          <p>
            <span>Where in the world?</span>
          </p>
        </Link>
        <div className="dark" onClick={handleClick}>
          <i className="fa fa-moon"></i>
          <p>Dark mode</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
