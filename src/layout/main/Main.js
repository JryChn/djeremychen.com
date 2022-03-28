import Introduce from "./introduce/Introduce";
import Blog from "./blog/Blog";
import AboutMe from "./aboutMe/AboutMe";
import Gallary from "./gallary/Gallary";
import Story from "./story/Story";
import React from "react";

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <Introduce></Introduce>
        <Blog></Blog>
        <AboutMe></AboutMe>
        <Gallary></Gallary>
        <Story></Story>
      </main>
    );
  }
}
