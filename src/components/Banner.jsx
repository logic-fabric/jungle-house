import React from "react";

import logo from "../assets/logo.png";
import "../styles/Banner.css";

class Banner extends React.Component {
  render() {
    const title = "Jungle House";

    const currentDate = new Date(Date.now());
    const springBegin = new Date(currentDate.getFullYear(), 2, 21);
    const springEnd = new Date(currentDate.getFullYear(), 5, 20);

    const isSpring = currentDate >= springBegin && currentDate < springEnd;

    const recommendation = isSpring
      ? "C'est le printemps, il est temps de rempoter !"
      : "Ce n'est pas encore le moment de rempoter";

    return (
      <div>
        <div className="banner">
          <img className="banner__logo" src={logo} alt="Jungle House" />
          <h1 className="banner__title">{title}</h1>
        </div>
        <p className="banner__headline">{recommendation}</p>
      </div>
    );
  }
}

export default Banner;
