import React from 'react'
import { Checked, Exclamation, Error, Info } from "../assets/icons";

const Toast = ({...rest}) => {
console.log(rest)

let toastClass = rest.status

let statusIcon = ""
if (rest.status === "success") statusIcon = <Checked className="icon-success"/> 
if (rest.status === "warning") statusIcon = <Exclamation className="icon-warning"/>
if (rest.status === "information") statusIcon = <Info className="icon-information"/>
if (rest.status === "error") statusIcon = <Error className="icon-error"/>

  return (
      <div className={`toast-div ${toastClass}`}>
        <div className="toast-icon-div">{statusIcon}</div> 
        <div className="toast-ps-div">
            <p className="toast-p-title">{rest.title}</p>
            {rest.text && <p>{rest.text}</p>}
        </div>
      </div>
  )
}

export default Toast


