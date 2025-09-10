import React from 'react'

const Testimonial = ({icon, icon2, title, mainText, footer}) => {
  return (
    <div className="testimonial-div">
      <div className="testimonial-div-text">
        <h3>
          <span className="blue-color">
            <span className="icon-testimonial-1">{icon}</span>
            <span className="icon-testimonial-2">{icon2} </span>
          </span>
          {title}
        </h3>
        <p>{mainText}</p>
        <footer>{footer}</footer>
      </div>
    </div>
  )
}

export default Testimonial
