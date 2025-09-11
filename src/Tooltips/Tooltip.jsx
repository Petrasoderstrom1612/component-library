import { useRef, useState, useEffect } from "react";

const Tooltip = ({ palette, title, paragraph }) => {
  const divRef = useRef(null);
  const [bgColor, setBgColor] = useState("black");

  useEffect(() => {
    if (divRef.current) {
      const color = getComputedStyle(divRef.current).backgroundColor;
      setBgColor(color);
    }
  }, [palette]);

  return (
    <div className={`palette-div ${palette}`} ref={divRef}>
      <div className="tooltip" style={{ borderTop: `18px solid ${bgColor}` }}></div>
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </div>
  );
};

export default Tooltip