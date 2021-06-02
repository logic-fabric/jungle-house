import React from "react";

import "../styles/Carescale.css";

class CareScale extends React.Component {
  render(props) {
    const { id, scaleValue, careType } = this.props;
    const scaleTypeIcon = careType === "light" ? "fas fa-sun" : "fas fa-tint";

    const scales = [1, 2, 3];

    return (
      <div className="carescale">
        {scales.map((scale) =>
          scale <= scaleValue ? (
            <span
              className={`carescale__icon ${scaleTypeIcon}`}
              key={`${careType}-${scale}-${id}`}
            ></span>
          ) : null
        )}
      </div>
    );
  }
}

export default CareScale;
