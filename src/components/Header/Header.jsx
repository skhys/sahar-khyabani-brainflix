import React from "react";
import BfLogo from "./assets/Images/Logo/BrainFlix-logo.svg";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img className="header__img" src={BfLogo} alt="BrainFlix Logo" />
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

// <div className="search-bar">
//   <input type="text" placeholder="Search..." />
//   <button type="submit">
//     <i className="fa fa-search"></i>
//   </button>
// </div>

// <div className="icon">
//   <img src="Mohan-muruge.jpg" alt="Icon" />
// </div>

// <div className="upload-button">
//   <button>Upload</button>
// </div>
// </nav>
