import { useRef, useState, useEffect } from "react";
import folderIcon from "./icons/folder.svg"
import xIcon from "./icons/X.svg"

const Tooltip = ({ palette, title, paragraph, ...rest }) => {
  const divRef = useRef(null); //it is standart to declare ref as null
  const [color, setColor] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [accentColor, setAccentColor] = useState("");

  useEffect(() => {
    if (divRef.current) {
      const style = getComputedStyle(divRef.current) //access the DOM to get CSS properties of the element where ref is placed. (style is not a fixed word)
      setColor(style.color); //save the color you get into state
      setBgColor(style.backgroundColor); //save the color you get into state
      setAccentColor(style.getPropertyValue("--accent-color")); //save the color you get into state
    }
  }, [palette]);

  return (
    <div className={`palette-div ${palette}`} ref={divRef}> {/*get background-color value of this element (and that one sits in palette, it is of course only one background color on an element*/}
      <div className="tooltip" style={{ borderTop: `18px solid ${bgColor}` }}></div> {/* place the color from state to the tooltip element*/}
      <div className="tooltip-text-div">
        <div className="icons-titel-tooltip-div">
            <img style={{color: color}} src={folderIcon} alt="Folder" />
            <h3 className="tooltip-h3" style={{color: accentColor}}>{title}</h3>
            <img className="cross-icon-tooltip" style={{color: color}} src={xIcon} alt="Folder" />
        </div>
        <p className="tooltip-p" style={{color: color}}>{paragraph}</p>
      </div>
    </div>
  );
};

export default Tooltip