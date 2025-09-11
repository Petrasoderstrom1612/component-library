import React from 'react'
import Citations from './Citations.svg';

const TestimonialWithImage = ({photo, mainText, footer, footerProfession}) => {

  return (
    <div className="testimonialImg-div">
      <div className="testimonialImg-div-text">
      <img src={photo} className="testimonialImg-img" alt="" aria-hidden="true"/>
          <img src={Citations} className="testimonialImg-citations" alt="" aria-hidden="true"/>
          <p className="testimonialImg-div-mainText">{mainText}</p>
        <footer>
          <p className="testimonialImg-footer-p">{footer}</p>
          <p className="testimonialImg-footer-p">{footerProfession}</p>
        </footer>
      </div>
    </div>
  )
}

export default TestimonialWithImage
