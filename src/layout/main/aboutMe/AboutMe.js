import React from "react";
import "./AboutMe.css";

export default class AbouMe extends React.Component {
  render() {
    return (
      <div class="aboutme" id="aboutme">
        <div id="aboutme-words">
          <div>words</div>
        </div>
        <div id="aboutme-protaits">
          <section id="protaits-1"></section>
          <section id="protaits-2"></section>
          <section id="protaits-3"></section>
        </div>
        <div id="aboutme-card-container">
          <div id="aboutme-card"></div>
        </div>
      </div>
    );
  }
}
