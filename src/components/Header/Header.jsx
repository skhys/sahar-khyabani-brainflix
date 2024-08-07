import React from "react";
import "./Header.scss";
import BfLogo from "../../assets/images/logo/BrainFlix-logo.svg";
import IconImg from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Link to="/">
            <img className="header__img" src={BfLogo} alt="BrainFlix Logo" />
          </Link>
        </div>
        <div className="header__wrapper">
          <div className="header__searchicon">
            <div className="header__search">
              <input
                className="header__searchbar"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="header__icon">
              <img className="header__image" src={IconImg} alt="Icon" />
            </div>
          </div>
          <div className="header__upload">
            <Link to="/upload">
              <button className="header__uploadbutton">UPLOAD</button>
            </Link>
          </div>
          <div className="header__icon2">
            <img className="header__image2" src={IconImg} alt="Icon2" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
