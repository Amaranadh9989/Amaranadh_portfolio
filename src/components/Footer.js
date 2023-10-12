import React from 'react';
import './Footer.css';
import { FaHome,FaUserGraduate,FaLayerGroup,FaMedal,FaAddressBook, } from "react-icons/fa";
import { FaLinkedinIn,FaInstagram,FaWhatsapp,FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='Footer'>
            <div className='Footer-container'>
                <div className='Footer-icons'>
                    <a href="#MainPage"><FaHome className='icon'/></a>
                    <a href="#About"><FaUserGraduate className='icon'/></a> 
                    <a href="#Experience"><FaLayerGroup className='icon'/></a>
                    <a href="#Project"><FaMedal className='icon'/></a>
                    <a href="#Contact"><FaAddressBook className='icon'/></a> 
                </div>
                <div className='Footer-contact-icons'>
                <a href=" https://www.linkedin.com"target="blank" rel="noopener noreferrer" > 
                    <FaLinkedinIn className='Footer-social-icons' color='#0072b1'/>
                </a>
                <a href="https://www.instagram.com"target="blank" rel="noopener noreferrer" > 
                    <FaInstagram className='Footer-social-icons'color=' #833AB4'/>
                </a>
                <a href="https://www.whatsapp.com"target="blank" rel="noopener noreferrer" >
                    <FaWhatsapp className='Footer-social-icons'color='#25d366'/>
                </a>
                <a href="https://telegram.org"target="blank" rel="noopener noreferrer" >
                    <FaTelegramPlane className='Footer-social-icons'color='#0088cc'/>
                </a>
                </div>
                <div className='copywrite_container'>
                    <p className='copywrite' style={{position:'relative',marginLeft:'15vw'}}>&copy;2019-{year},amarportfolio.com</p>
                </div>

            </div>
        </div>
    );
}

export default Footer;
