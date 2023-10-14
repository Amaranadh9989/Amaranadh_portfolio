import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div  id="ContactForm" className="ContactForm">
      <h1> Contact Form</h1>
      <div className="cf" id='form_container'>
      <form action="https://formsubmit.co/683c2aec7b2abc33377c8b4b55e6e404 " method="POST">
        <div className="half left cf">
          <input type="text" name="Name" className="input-name" placeholder="Name" required/>
          <input type="email" name="email" className="input-email" placeholder="Email address" required/>
          <input type="text" name="text" className="input-subject" placeholder="Subject" required/>
        </div>
        <div className="half right cf" id='mesage_container' >
          <textarea name="Message" className="input-message" placeholder="Message" required></textarea>
        </div>  
        <input type="submit" value="Submit" className="input-submit" />
      </form>
    </div>
  </div>
  );
};

export default ContactForm;
