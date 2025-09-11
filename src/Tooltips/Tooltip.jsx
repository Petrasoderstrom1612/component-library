import React from "react";

const Tooltip = ({ palette, title, paragraph}) => {
  return (
    <div className={`palette-div ${palette}`}>
      <div 
        className="tooltip" 
        style={{ "--bg-color": getComputedStyle(document.querySelector(`.${palette}`)).backgroundColor }}>
      </div>
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default Tooltip;
