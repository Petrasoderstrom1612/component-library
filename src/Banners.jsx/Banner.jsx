import React from 'react'

const Banner = ({children, ...rest}) => {
console.log(rest)
  return (
    <div>
      {children}
    </div>
  )
}

export default Banner
