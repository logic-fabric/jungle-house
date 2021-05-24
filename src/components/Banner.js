import React from "react";

import "../styles/Banner.css";
import logo from "../assets/logo.png";

class Banner extends React.Component {
  render() {
    const title = "Jungle House";

    return (
      <div className="jh-banner">
        <img className="jh-logo" src={logo} alt="Jungle House" />
        <h1 className="jh-title">{title}</h1>
      </div>
    );
  }
}

export default Banner;
