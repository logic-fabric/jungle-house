import React from "react";

import "../styles/Banner.css";
import logo from "../assets/logo.png";

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
        <div className="jh-banner">
          <img className="jh-logo" src={logo} alt="Jungle House" />
          <h1 className="jh-title">{title}</h1>
        </div>
        <p className="jh-headline">{recommendation}</p>
      </div>
    );
  }
}

export default Banner;
