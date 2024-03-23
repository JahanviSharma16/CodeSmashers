import React from "react";
import "./header.css";
import homeImage from "../../assets/home.jpg";
import pythonImage from "../../assets/python.jpg";
import msOfficeImage from "../../assets/ms-office.png";
import webImage from "../../assets/web.png";
import Blog from "../pages/blog/Blog";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <span className="headerTitleSm">Learn With Us</span>
        <span className="headerTitleLg">Code Smashers</span>
        <img src={homeImage} alt="" className="fullscreen-image" />
      </div>

      <div className="header-post">
        <h1>LATEST NOTES</h1>
        <div className="my-post">
          <h3>MY POSTS</h3>
          <ul className="post-category">
            <li>All</li>
            <li>Programming</li>
            <li>Microsoft Office</li>
            <li>Web Designing</li>
          </ul>
        </div>

        <div className="post-page">
          <div className="post-content">
            <div className="post-about">
              <img src={pythonImage} alt="" className="python-img" />
              <h1>Python Tutorial</h1>
              <p className="para-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
                veritatis? Molestiae, et odio.
              </p>
            </div>
          </div>

          <div className="post-content">
            <div className="post-about">
              <img src={msOfficeImage} alt="" className="python-img" />
              <h1>Microsoft Office</h1>
              <p className="para-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
                veritatis? Molestiae, et odio.
              </p>
            </div>
          </div>

          <div className="post-content">
            <div className="post-about">
              <img src={webImage} alt="" className="python-img" />
              <h1>Web Designing</h1>
              <p className="para-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
                veritatis? Molestiae, et odio.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <div className="footer-top">
          <div className="">
            <h3>Find us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
