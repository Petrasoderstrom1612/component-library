import React from 'react'

const Tooltip = ({children, palette}) => {
  return (
    <div className={`palette-div ${palette}`}>
        <div className={`tooltip  ${palette}`}></div>
      {children}
    </div>
  )
}

export default Tooltip
