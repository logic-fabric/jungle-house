import React from "react";

import CareScale from "./Carescale";

class PlantItem extends React.Component {
  render() {
    const { id, name, water, light, cover } = this.props;
    return (
      <li key={id} className="jh-plant-item">
        <img className="jh-plant-item__cover" src={cover} alt={name} />
        <h2 className="jh-plant-item__title">{name}</h2>
        <div>
          <CareScale id={id} careType="light" scaleValue={light} />
          <CareScale id={id} careType="water" scaleValue={water} />
        </div>
      </li>
    );
  }
}

export default PlantItem;
