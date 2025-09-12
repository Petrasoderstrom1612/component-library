import { useRef, useState, useEffect } from "react";
import folderIcon from "./icons/folder.svg"
import xIcon from "./icons/X.svg"

const Tooltip = ({ palette, title, paragraph, ...rest }) => {
  const divRef = useRef(null); //it is standart to declare ref as null
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    if (divRef.current) {
      const color = getComputedStyle(divRef.current).backgroundColor; //access the DOM to get backgroundcolor of the element where ref is placed
      setBgColor(color); //save the color you get into state
    }
  }, [palette]);

  return (
    <div className={`palette-div ${palette}`} ref={divRef}> {/*get background-color value of this element (and that one sits in palette, it is of course only one background color on an element*/}
      <div className="tooltip" style={{ borderTop: `18px solid ${bgColor}` }}></div> {/* place the color from state to the tooltip element*/}
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