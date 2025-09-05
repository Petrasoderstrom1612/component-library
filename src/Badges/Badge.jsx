import React from 'react'

const Badge = ({children, ...rest}) => {
  let variantClass = rest.variant && `${rest.variant}`

  return (
    <div className={`badge ${variantClass}`}>
      {children}
    </div>
  )
}

export default Badge
