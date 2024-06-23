import React, { useEffect, useState } from 'react'
import "./Footer.css";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { Link, useNavigate } from 'react-router-dom';

export const Footer = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="footer">
      <div className="footerIcon">
        <div className="call">
          {" "}
          <a href="#">
            <CIcon
              icon={icon.cilPhone}
              size=""
              style={{ "--ci-primary-color": "black" }}
              className="dropdownIcon"
            />
          </a>{" "}
        </div>
        <div className="email">
          {" "}
          <a href="#">
            {" "}
            <CIcon
              icon={icon.cibGmail}
              size=""
              style={{ "--ci-primary-color": "black" }}
              className="dropdownIcon"
            />{" "}
          </a>{" "}
        </div>
        <div className="location">
          {" "}
          <a href="#">
            {" "}
            <CIcon
              icon={icon.cilLocationPin}
              size=""
              style={{ "--ci-primary-color": "black" }}
              className="dropdownIcon"
            />{" "}
          </a>{" "}
        </div>
        <div className="facebook">
          {" "}
          <a href="#">
            {" "}
            <CIcon
              icon={icon.cibFacebookF}
              size=""
              style={{ "--ci-primary-color": "black" }}
              className="dropdownIcon"
            />{" "}
          </a>{" "}
        </div>
        <div className="twitter">
          {" "}
          <a href="#">
            {" "}
            <CIcon
              icon={icon.cibTwitter}
              size=""
              style={{ "--ci-primary-color": "black" }}
              className="dropdownIcon"
            />{" "}
          </a>{" "}
        </div>
      </div>

      <ul className="footer-nav-menu">
      <li
        onClick={() => setMenu("home")}
        className={menu === "home" ? "active" : ""}
      >
        <Link to="/home">Home</Link>
      </li>
      <li
        onClick={() => setMenu("resources")}
        className={menu === "resources" ? "active" : ""}
      >
        <Link to="/resources">Resources</Link>
      </li>
      <li
        onClick={() => setMenu("projects")}
        className={menu === "projects" ? "active" : ""}
      >
        <Link to="/projects">Projects</Link>
      </li>
      <li
        onClick={() => setMenu("blogs")}
        className={menu === "blogs" ? "active" : ""}
      >
        <Link to="/blogs">Blogs</Link>
      </li>
      <li
        onClick={() => setMenu("shopping")}
        className={menu === "shopping" ? "active" : ""}
      >
        <Link to="/shopping">Shopping</Link>
      </li>
      <li
        onClick={() => setMenu("forum")}
        className={menu === "forum" ? "active" : ""}
      >
        <Link to="/forum">Forum</Link>
      </li>
      <li
        onClick={() => setMenu("about")}
        className={menu === "about" ? "active" : ""}
      >
        <Link to="/aboutus">About Us</Link>
      </li>
    </ul>


      <div className="footerText">
        COPYRIGHT &copy; 2024. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};
