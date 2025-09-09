import React from 'react'
import { MdOutlineFileUpload } from "react-icons/md";

const Card = ({children, className, icon=<MdOutlineFileUpload className="card-icon"/>}) => {
  console.log(icon)
  let iconCardColor="icon-card-color"

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
