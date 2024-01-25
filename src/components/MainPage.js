import React, { Component } from 'react';
import './MainPage.css';
import logo from './images/amaranadh.png';
const MainPage = () => {
    return (
        <div id='MainPage' className='MainPage'>
              <img src={logo} alt='image logo' className='Amar_logo' />
           <div className='amar'>
            <div className='amar_container'>
            <span className='name'> Matta Amaranadh</span>
             <span className='skill'>I'am Front End Developer</span>
             <div>
             <a href="https://drive.google.com/file/d/1W9HbJLo_cWqQdVenG6vlZbIq6ilbWaEg/view?usp=drive_link" target="blank" rel="noopener noreferrer" className='download_resume'style={{padding:'20px 25px'}}> Downlod Resume</a>
            <a href="#ContactForm" className='contact_link'>
                <span className='contact_me'style={{padding:'20px 50px',marginLeft:'20px'}}>
                Contact Me
                </span>
                </a> 
             </div>
            </div>
            </div>
        </div>
    );
}
export default MainPage;

