import React from 'react'

const Tooltip = ({children, palette}) => {
  return (
    <div className={palette}>
      {children}
    </div>
  )
}

export default Tooltip
