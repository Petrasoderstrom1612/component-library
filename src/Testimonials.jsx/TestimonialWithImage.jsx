import React from 'react'
import Person from './person.jpg';
import Citations from './Citations.svg';

const TestimonialWithImage = ({icon, mainText, footer, footerProfession}) => {

  return (
    <div className="testimonialImg-div">
      <div className="testimonialImg-div-text">
      <img src={Person} className="testimonialImg-img" alt="" aria-hidden="true"/>
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
