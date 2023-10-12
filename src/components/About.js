import React from 'react';
import './About.css';
import logo from './images/logo.png';
import { FaAward,FaUserGraduate } from "react-icons/fa";
const About = () => {
    return (
        <div id="About" className='About'>
            <div className='about_container'>
                <div className='about-sub'>
                    <div style={{position:'relative',top:'20px'}}>
                    <span className='know_more'style={{fontSize:'20px'}}>Get To know More</span>
                    <span className='about_me'style={{fontSize:'40px'}}>About Me</span>
                    </div>
                    <img src={logo} alt='image logo' className='about_logo' />
                    <span className='exp_box'><FaAward style={{fontSize:'32px',cursor:'pointer'}}/><br/><b style={{fontSize:'20px'}}>Experience</b><br/>4+Months<br/>Frontend Development</span>
                    <span className='edu_box'><FaUserGraduate style={{fontSize:'30px',cursor:'pointer'}}/><br/><b style={{fontSize:'20px'}}>Education</b><br/>B.tech. Bachelor Degree</span>
                    <p className='introduction_para'>
                    I am M. Amaranadh, a dedicated front-end developer with a Bachelor's 
                    degree in Technology from KIET College. I a
                    m passionate about creating beautiful and functional websites, 
                    particularly in the field of e-commerce. 
                    I am a self-motivated individual with strong time management skills.
                    </p>
                    </div>
            </div>
        </div>
    );
}

export default About;
