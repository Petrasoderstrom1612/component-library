import { useRef, useState, useEffect } from "react";
import folderIcon from "./icons/folder.svg"
import xIcon from "./icons/X.svg"

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
      <div className="tooltip-text-div">
        <div className="icons-titel-tooltip-div">
            <img className={{palette}} src={folderIcon} alt="Folder" />
            <h3 className="tooltip-h3">{title}</h3>
            <img className={`cross-icon-tooltip ${palette}`} src={xIcon} alt="Folder" />
        </div>
        <p className="tooltip-p">{paragraph}</p>
      </div>
    </div>
  );
};

export default Tooltip