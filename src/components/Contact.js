import React from 'react';
import './Contact.css';
import {FaGoogle,FaFacebookF,FaTwitter,FaYoutube} from "react-icons/fa";
import { AiFillPhone,AiFillMail} from "react-icons/ai";
const Contact = () => {
    return (
        <div id='Contact' className='Contact'>
            <div className='icon-container'>
            <a href="https://www.google.com"target="blank" rel="noopener noreferrer" >
                <FaGoogle className='icons'color='#DB4437'/>
            </a>
            <a href=" https://twitter.com"target="blank" rel="noopener noreferrer" >
                <FaTwitter className='icons' color=' #1D9BF0'/>
            </a>
            <a href=" https://www.youtube.com"target="blank" rel="noopener noreferrer" >
                <FaYoutube className='icons'color='red'/>
            </a>
            <a href="https://www.facebook.com"target="blank" rel="noopener noreferrer" >
                 <FaFacebookF className='icons' color='#1877F2'/>
           </a>
            </div>
            <div className='contact-container'>
              <span className="team-contact"><AiFillPhone className='team-icon'color='light-black'/>+91 9390575059</span>
              <span className="team-contact"><AiFillMail className='team-icon'color='EA4335'/>amaranadhmatta123@gmail.com</span>
            </div>
        </div>
    );
}

export default Contact;
