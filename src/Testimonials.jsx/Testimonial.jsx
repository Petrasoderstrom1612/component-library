import React from 'react'

const Testimonial = ({icon, icon2, title, mainText, footer}) => {
const middleIndex = Math.floor(title.length/2 -1)
const firstHalfTitle = title.slice(0,middleIndex)
const secondHalfTitle = title.slice(middleIndex)

  return (
    <div className="testimonial-div">
      <div className="testimonial-div-text">
        <h3 className="testimonial-h3">
          <span className="blue-color">
            <span className="icon-testimonial-1">{icon}</span>
            <span className="icon-testimonial-2">{icon2} </span>
          </span>
          <span className="blue-color">{firstHalfTitle}</span>{secondHalfTitle}
        </h3>
        <p>{mainText}</p>
        <footer>
          <p className="testimonial-footer-p">{footer}</p>
        </footer>
      </div>
    </div>
  )
}

export default Testimonial
