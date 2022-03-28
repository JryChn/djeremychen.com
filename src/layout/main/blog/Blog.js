import React from "react";
import './Blog.css'

export default class Blog extends React.Component {
  render() {
    return (
      <div class="blog" id="blog">
        <section id="blog-words-container">
          <div id="blog-words">blog</div>
        </section>
        <div id="blog-container">
          <div id="blog-1">
            <div></div>
            <div></div>
          </div>
          <div id="blog-2">
            <div></div>
            <div></div>
          </div>
          <div id="blog-3">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
