import React from "react";

class CareScale extends React.Component {
  render(props) {
    const { id, scaleValue, careType } = this.props;
    const scaleTypeIcon = careType === "light" ? "fas fa-sun" : "fas fa-tint";

    const scales = [1, 2, 3];

    return (
      <div>
        {scales.map((scale) =>
          scale <= scaleValue ? (
            <span
              className={scaleTypeIcon}
              key={`${careType}-${scale}-${id}`}
            ></span>
          ) : null
        )}
      </div>
    );
  }
}

export default CareScale;
