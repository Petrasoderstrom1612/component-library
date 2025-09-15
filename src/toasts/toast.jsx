import { useState, useEffect } from "react";
import { Checked, Exclamation, Error, Info } from "../assets/icons";

const Toast = ({ status, title, text, duration, onClose }) => {
const [visible, setVisible] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
  setVisible(false);
  if (onClose) onClose();
  }, duration);

  return () => clearTimeout(timer);
}, [duration, onClose]);

if (!visible) return null;

let toastClass = status + "-toast"

let statusIcon = ""
if (status === "success") statusIcon = <Checked className="icon-success"/> 
if (status === "warning") statusIcon = <Exclamation className="icon-warning"/>
if (status === "information") statusIcon = <Info className="icon-information"/>
if (status === "error") statusIcon = <Error className="icon-error"/>

  return (
      <div className={`toast-div ${toastClass}`}>
        <div className="toast-icon-div">{statusIcon}</div> 
        <div className="toast-ps-div">
            <p className="toast-p-title">{title}</p>
            {text && <p>{text}</p>}
        </div>
      </div>
  )
}

export default Toast
 

