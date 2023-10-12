import React, { useState } from 'react';
import './Header.css';
import { FaHome, FaLayerGroup, FaAddressBook, FaUserGraduate, FaMedal, FaFileAlt, FaBars } from "react-icons/fa";
import logo from './images/main_logo.png';

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const mobileMenuStyle = {
        display: showMobileMenu ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        position: 'absolute',
        top: '8vh',
        left: '0',
        right: '0',
        backgroundColor: 'rgba(34, 43, 61, 0.8)',
        padding: '10px',
    };

    return (
        <div className='Header'>
            <div className='navbar'>
                <img src={logo} alt='image logo' className='logo' />
                <div className='header-container'>
                    <div style={mobileMenuStyle} className='header-Sub'>
                        <a href="#MainPage"><span><FaHome className='icon'/>home</span></a>
                        <a href="#About"><span><FaUserGraduate className='icon'/>About</span></a>
                        <a href="#Experience"><span><FaLayerGroup className='icon'/>Experience</span></a> 
                        <a href="https://drive.google.com/file/d/1EQwJWV545F1VDaRtYgcY9ikAdETD18Ti/view?usp=sharing" target="blank" rel="noopener noreferrer">
                            <span><FaFileAlt className='icon'/>Resume</span>
                        </a>  
                        <a href="#Project"><span><FaMedal className='icon'/>Project</span></a> 
                        <a href="#ContactForm"><span><FaAddressBook className='icon'/>Contact</span></a>
                    </div>
                    <FaBars className='manu_icon' onClick={toggleMobileMenu} />
                </div>
                <div className='header-container'>
                    <div className='header-sub'>
                        <a href="#MainPage"><span><FaHome className='icon'/>Home</span></a>
                        <a href="#About"><span><FaUserGraduate className='icon'/>About</span></a>
                        <a href="#Experience"><span><FaLayerGroup className='icon'/>Experience</span></a> 
                        <a href="https://drive.google.com/file/d/1EQwJWV545F1VDaRtYgcY9ikAdETD18Ti/view?usp=sharing" target="blank" rel="noopener noreferrer">
                            <span><FaFileAlt className='icon'/>Resume</span>
                        </a>  
                        <a href="#Project"><span><FaMedal className='icon'/>Project</span></a> 
                        <a href="#ContactForm"><span><FaAddressBook className='icon'/>Contact</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
