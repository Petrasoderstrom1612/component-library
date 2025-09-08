import React from 'react'

const Badge = ({children, ...rest}) => {
  console.log(rest)
  let variantClass = rest.variant && `${rest.variant}` //if variant exists, then it should be

  return (
    <div className={`badge ${variantClass} ${rest.color}`}>
      {children}
    </div>
  )
}

export default Badge
