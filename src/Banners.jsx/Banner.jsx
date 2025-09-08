import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { IoWarning } from "react-icons/io5";
import { HiXCircle } from "react-icons/hi";
import { FaCircleInfo } from "react-icons/fa6";

const Banner = ({children, ...rest}) => {
console.log(rest)

let statusIcon = ""
if (rest.status === "success") statusIcon = <FaCircleCheck className="icon-success"/>
if (rest.status === "warning") statusIcon = <IoWarning className="icon-warning"/>
if (rest.status === "error") statusIcon = <HiXCircle className="icon-error"/>
if (rest.status === "neutral") statusIcon = <FaCircleInfo className="icon-neutral"/>

  return (
    <div>
      {statusIcon} {children}
    </div>
  )
}

export default Banner
