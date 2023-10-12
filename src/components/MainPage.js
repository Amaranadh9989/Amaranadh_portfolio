import React, { Component } from 'react';
import './MainPage.css';
import logo from './images/amaranadh.png';
const MainPage = () => {
    return (
        <div id='MainPage' className='MainPage'>
              <img src={logo} alt='image logo' className='Amar_logo' />
           <div className='amar'>
            <div className='amar_container'>
            <span className='name'> Matta Amaranadh.</span>
             <span className='skill'>I'am Front End Developer</span>
             <div>
             <span className='download_resume'style={{padding:'20px 25px'}}> Downlod Resume</span>
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

