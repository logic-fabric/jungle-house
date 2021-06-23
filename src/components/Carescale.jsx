import React from "react";

import "../styles/Carescale.css";

const CARE_LEVEL = {
  1: "un peu",
  2: "assez",
  3: "beaucoup",
};

class CareScale extends React.Component {
  render(props) {
    const { id, scaleValue, careType } = this.props;
    const scaleTypeIcon = careType === "light" ? "fas fa-sun" : "fas fa-tint";

    const scales = [1, 2, 3];

    return (
      <button
        className="carescale"
        onClick={() =>
          alert(
            `Cette plante nécessite ${CARE_LEVEL[scaleValue]} ${
              careType === "light" ? "de soleil" : "d'eau"
            }.`
          )
        }
      >
        {scales.map((scale) =>
          scale <= scaleValue ? (
            <span
              className={`carescale__icon ${scaleTypeIcon}`}
              key={`${careType}-${scale}-${id}`}
            ></span>
          ) : null
        )}
      </button>
    );
  }
}

export default CareScale;
