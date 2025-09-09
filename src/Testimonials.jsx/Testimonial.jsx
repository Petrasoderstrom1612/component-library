import React from 'react'

const Testimonial = ({icon, title, mainText, footer}) => {
  return (
    <div>
      <h3>{icon}{title}</h3>
      <p>{mainText}</p>
      <footer>{footer}</footer>
    </div>
  )
}

export default Testimonial
