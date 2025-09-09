import React from 'react'
import { MdOutlineFileUpload } from "react-icons/md";

const Card = ({children, className, icon=<MdOutlineFileUpload className="card-icon"/>, iconCardColor="icon-card-color"}) => {
  console.log(icon)

  return (
    <>
      <div className={className}>
      {icon && <div className={`icon-div ${iconCardColor}`}>{icon}</div>}
        {children}
      </div>
    </>
  )
}

export default Card
