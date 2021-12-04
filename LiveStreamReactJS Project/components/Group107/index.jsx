import React from "react";
import "./Group107.css";

function Group107(props) {
  const { price, className } = props;

  return (
    <div className={`group-107 ${className || ""}`}>
      <img className="ellipse-7" src="/img/ellipse-7@2x.png" />
      <div className="price ceracompactpro-medium-blue-charcoal-12px">{price}</div>
    </div>
  );
}

export default Group107;
