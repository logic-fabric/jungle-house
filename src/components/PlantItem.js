import React from "react";

import CareScale from "./Carescale";
import "../styles/PlantItem.css";

class PlantItem extends React.Component {
  render() {
    const { id, name, water, light, cover } = this.props;
    return (
      <li key={id} className="plant-item">
        <div className="plant-item__cover">
          <img src={cover} alt={name} />
        </div>
        <div className="plant-item__infos">
          <h2 className="plant-item__title">{name}</h2>
          <div className="plant-item__scales">
            <CareScale id={id} careType="light" scaleValue={light} />
            <CareScale id={id} careType="water" scaleValue={water} />
          </div>
        </div>
      </li>
    );
  }
}

export default PlantItem;
