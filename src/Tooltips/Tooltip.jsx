import { useRef, useState, useEffect } from "react";
import {Tray, Cross} from "../assets/icons"

const Tooltip = ({ palette, title, paragraph, theme }) => {
  console.log(theme)
  const divRef = useRef(null); //it is standart to declare ref as null
  const [color, setColor] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [accentColor, setAccentColor] = useState("");

  useEffect(() => {
    const style = getComputedStyle(divRef.current) //access the DOM to get CSS properties of the element where ref is placed. (style is not a fixed word)
    if (divRef.current && theme === "dark") {
      setColor(style.color); //save the color you get into state
      setBgColor(style.backgroundColor); //save the color you get into state
      setAccentColor(style.getPropertyValue("--accent-color")); //save the color you get into state
    }
    else if (divRef.current && theme === "light") {
      setColor(style.backgroundColor);
      setBgColor(style.color);
      setAccentColor(style.backgroundColor);
    }
  }, [palette, theme]);

  return (
    <div className={`palette-div ${palette}`} style={{ backgroundColor: `${bgColor}` }} ref={divRef}> {/*get background-color value of this element (and that one sits in palette, it is of course only one background color on an element*/}
      <div className="tooltip" style={{ borderTop: `18px solid ${bgColor}` }}></div> {/* place the color from state to the tooltip element*/}
      <div className="tooltip-text-div">
        <div className="icons-titel-tooltip-div">
            <Tray style={{color: `${color}`}}/>
            <h3 className="tooltip-h3" style={{color: `${color}`}}>{title}</h3>
            <Cross className="cross-icon-tooltip" style={{color: `${color}`}}/>
        </div>
        <p className="tooltip-p" style={{color: `${color}`}}>{paragraph}</p>
      </div>
    </div>
  );
};

export default Tooltip