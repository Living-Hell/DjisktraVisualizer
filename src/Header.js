import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div id="navBar" className="header">
        <div>
          <a id="homeButton" className="navbar-home" href="#">
            Header
          </a>
        </div>
      </div>
    );
  }
}
