import React from 'react'
import Dots from '../assets/dots.svg';

const Testimonial = ({icon, icon2, title, mainText, footer}) => {
const middleIndex = Math.floor(title.length/2 -1)
const firstHalfTitle = title.slice(0,middleIndex)
const secondHalfTitle = title.slice(middleIndex)

  return (
    <div className="testimonial-div">
      <img src={Dots} className="background-dots" alt="" aria-hidden="true"/>
      <div className="testimonial-div-text">
        <h3 className="testimonial-h3">
          <span className="blue-color">
            <span className="icon-testimonial-1">{icon}</span>
            <span className="icon-testimonial-2">{icon2} </span>
          </span>
          {firstHalfTitle}<span className="blue-color">{secondHalfTitle}</span>
        </h3>
        <p className="testimonial-p">{mainText}</p>
        <footer>
          <p className="testimonial-footer-p">
            {footer.includes("/") ? (
              <>
              <span className="black-color">{footer.slice(0, footer.indexOf("/"))}</span>
              <span className="blue-color">/</span>
              <span className="gray-color">{footer.slice(footer.indexOf("/") + 1)}</span>
              </>
            ) : (<span>{footer}</span>)
            }
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Testimonial
