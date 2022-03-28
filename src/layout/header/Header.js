import React from "react";
import "./Header.css";
import icon from "../../assets/icon/icon.svg";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div id="header-icon">
          <a href="https://www.djeremychen.com">
            <img src={icon} alt="DJeremyChen" />
          </a>
        </div>
        <nav className="header-nav">
          <div className="header-nav" id="nav-blog">
            <a href="#blog">Blog</a>
          </div>
          <div className="header-nav" id="nav-aboutme">
            <a href="#aboutme">AboutMe</a>
          </div>
          <div className="header-nav" id="nav-gallary">
            <a href="#gallary">Gallary</a>
          </div>
          <div className="header-nav" id="nav-story">
            <a href="#story">Story</a>
          </div>
        </nav>
        <div id="contact">
          <div>
            <a href="#contact">Contact</a>
          </div>
          <div className="contact-more">
            <a href="#calendar">Calendar</a>
            <a href="#resume">Resume</a>
          </div>
        </div>
      </header>
    );
  }
}
