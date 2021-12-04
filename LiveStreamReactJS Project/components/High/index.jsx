import React from "react";
import "./High.css";

function High(props) {
  const { className } = props;

  return (
    <div className={`high ${className || ""}`}>
      <div className="buy-now cerapro-medium-white-12px">Buy now</div>
    </div>
  );
}

export default High;
