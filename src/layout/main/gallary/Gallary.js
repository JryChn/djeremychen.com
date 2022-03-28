import React from "react";
import "./Gallary.css";

export default class Gallary extends React.Component {
  render() {
    return (<div id="gallary" class="gallary">
      <div id="gallary-words">
        <div>words</div>
      </div>
      <div id="gallary-container"></div>
    </div>);
  }
}
