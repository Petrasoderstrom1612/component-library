import React from 'react'
import { MdOutlineFileUpload } from "react-icons/md";

const Card = ({
  children, 
  className = "card-div", //default className = I do not need to write it in every Card in App.jsx
  icon=<MdOutlineFileUpload className="card-icon"/>, 
  iconCardColor="icon-card-color",
  ...rest //allow if there were other properties passed
  }) => {

  console.log(rest.style)

  return (
    <>
      <div className={className} {...rest}>
      {icon && <div className={`icon-div ${iconCardColor}`}>{icon}</div>}
        {children}
      </div>
    </>
  )
}

export default Card
