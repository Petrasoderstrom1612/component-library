import React from 'react'
import { Checked, Exclamation, Error, Info } from "../assets/icons";

const Toast = ({...rest}) => {
console.log(rest)

let bannerClass = rest.status

let statusIcon = ""
if (rest.status === "success") statusIcon = <Checked className="icon-success"/> 
if (rest.status === "warning") statusIcon = <Exclamation className="icon-warning"/>
if (rest.status === "error") statusIcon = <Error className="icon-error"/>
if (rest.status === "neutral") statusIcon = <Info className="icon-neutral"/>

  return (
      <div className={`banner-div ${bannerClass}`}>
        <div className="status-icon-div">{statusIcon}</div> 
        <div className="banner-ps-div">
            <p className="banner-p-title">{rest.title}</p>
            {rest.text && <p>{rest.text}</p>}
        </div>
      </div>
  )
}

export default Toast


