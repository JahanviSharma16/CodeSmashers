import React from "react";
import { Link } from "react-router-dom";
import "../navbar/navbar.css";

const Navbar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              CODE SMASHERS
            </Link>
          </li>
        </ul>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              SERVICES
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              {" "}
              BLOG
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              {" "}
              CONTACT
            </Link>
          </li>
          {/* <li className="topListItem">{user && "LOGOUT"}</li> */}
        </ul>
      </div>
      <div className="topRight">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link login-list" to="/login">
              LOGIN
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link login-list" to="/register">
              REGISTER
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
