import React from "react";
import "./header.css";
import homeImage from "../../assets/home.jpg"; 

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <span className="headerTitleSm">Learn With Us</span>
        <span className="headerTitleLg">Code Smashers</span>
      </div>
      <img src={homeImage} alt="" className="fullscreen-image"/>
    </div>
  );
};

export default Header;
