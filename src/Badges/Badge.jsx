import React from 'react'

const Badge = ({children, ...rest}) => {
  console.log(rest)
  let variantClass = rest.variant && `${rest.variant}`

  return (
    <div className={`badge ${variantClass} ${rest.color}`}>
      {children}
    </div>
  )
}

export default Badge
