import React from 'react'
import './ContactUs.scss'
import {FiArrowRight } from 'react-icons/fi';

function ContactUs() {
  return (
    <div className='contact-us-container'>
      <a className='contact-us-text' href='/contact'>Contact Our Automation Experts</a>
      <div className='contact-us-icon'>
        <FiArrowRight />
      </div>
    </div>
  )
}

export default ContactUs
