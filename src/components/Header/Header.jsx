import React from "react";
import "./Header.scss";
import BfLogo from "../../assets/Images/Logo/BrainFlix-logo.svg";
import IconImg from "../../assets/Images/Mohan-muruge.jpg";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img className="header__img" src={BfLogo} alt="BrainFlix Logo" />
        </div>
        <div className="header__wrapper">
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
          <button className="header__uploadbutton">UPLOAD</button>
        </div>
      </header>
    </>
  );
}

export default Header;

// <nav className="navbar">
// <div className="logo">
//   <img src="BrainFlix-logo.svg" alt="Logo" />
// </div>

/* <div className="search-bar">
  <input type="text" placeholder="Search..." />
  <button type="submit">
    <i className="fa fa-search"></i>
  </button>
</div>; */

/* <div className="icon">
  <img src="Mohan-muruge.jpg" alt="Icon" />
</div> */

/* <div className="upload-button">
  <button>Upload</button>
</div> */
// </nav>
