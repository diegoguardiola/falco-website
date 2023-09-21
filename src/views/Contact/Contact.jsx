import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss'
import Footer from '../../components/Footer/Footer'

function Contact() {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, subject, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

  emailjs
    .send(
      "service_wxt9bvn", // Replace with your EmailJS service ID
      "template_qfc4vp6", // Replace with your EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "lbDzOiRcUJy7DTFn5" // Replace with your EmailJS user ID
    )
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
    .catch((err) => console.log(err)); 
}


  return (
    <>
      <div className="app_contact-wrapper">          
        <h2 className="head-text">Contact Us</h2>
        {!isFormSubmitted && (
          <h4>
            We can't solve your problems if you don't tell us about it!
          </h4>
        )}
          {!isFormSubmitted ? (
            <div className="app__footer-form app__flex">
              <div className="app__flex">
                <input 
                  style={{backgroundColor: '#fff'}} 
                  className="p-text" type="text" 
                  placeholder="Your Name" 
                  name="name" 
                  value={name} 
                  onChange={handleChangeInput} />
              </div>
              <div className="app__flex">
                <input 
                  style={{backgroundColor: '#fff'}} 
                  className="p-text" type="email" 
                  placeholder="Your Email" name="email" 
                  value={email} 
                  onChange={handleChangeInput} />
              </div>
              <div className="app__flex">
                <input 
                  style={{backgroundColor: '#fff'}} 
                  className="p-text" type="subject" 
                  placeholder="Subject" name="subject" 
                  value={subject} 
                  onChange={handleChangeInput} />
              </div>
              <div>
                <textarea
                  style={{backgroundColor: '#fff'}}
                  className="p-text"
                  placeholder="Your Message"
                  value={message}
                  name="message"
                  onChange={handleChangeInput}
                />
              </div>
              <button 
                type="button" 
                className="p-text" 
                onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}
              </button>
            </div>
          ) : (
            <div>
              <h3 className="head-text">
                Thank you for getting in touch!
              </h3>
            </div>
          )}
          <div className="app__footer-map">
          </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact
