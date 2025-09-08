import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { IoWarning } from "react-icons/io5";
import { HiXCircle } from "react-icons/hi";
import { FaCircleInfo } from "react-icons/fa6";

const Banner = ({children, ...rest}) => {
console.log(rest)

let statusIcon = ""
if (rest.status === "success") statusIcon = <FaCircleCheck />
if (rest.status === "warning") statusIcon = <IoWarning />
if (rest.status === "error") statusIcon = <HiXCircle />
if (rest.status === "neutral") statusIcon = <FaCircleInfo />

  return (
    <div>
      {statusIcon} {children}
    </div>
  )
}

export default Banner
