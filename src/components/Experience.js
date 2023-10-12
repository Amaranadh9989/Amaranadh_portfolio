import React from 'react';
import './Experience.css';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import react from './images/react.png';
import figma from './images/figma.png'; 
import ui from './images/ui.png';
import {RiAwardFill} from "react-icons/ri";
const Experience = () => {
    return (
        <div id='Experience' className='Experience' >
            <div className='span_container'>
                <div style={{position:'relative',top:'20px'}}>
                <span className="span_exp" style={{fontSize:'20px', marginLeft:'40px', display:'block', paddingBottom:'15px'}}>Explore My</span>
                <span style={{fontSize:'40px'}}>Experience</span>
                </div>
            </div>
            <div className='experience_container'>
                <div className='experience_sub'>
                     <div className='skill_box'> 
                     <div className='skill_img'>
                        <img src={html} alt='image logo' className='html' />
                        </div>
                       <div>
                            <h3>Hyper Text Markup Language</h3><br/>
                           <h4><RiAwardFill style={{position:'relative',top:'2px'}}/>Expert Level</h4><br/>
                            <p>The HyperText Markup Language or HTML is the standard markup 
                            language for documents designed to be displayed in a web browser.
                             It defines the meaning and structure of web content.
                            </p>
                       </div>
                     </div>
                     <div className='skill_box'>
                        <div className='skill_img'>
                        <img src={css} alt='image logo' className='css'/>
                        </div>
                        <div>
                            <h3 >Cascading Style Sheets</h3><br/>
                            <h4><RiAwardFill style={{position:'relative',top:'2px'}}/>Expert Level</h4><br/>
                            <p>Cascading Style Sheets is a style sheet language used for 
                                describing the presentation of a document written in a markup
                                 language such as HTML or XML.
                            </p>
                       </div>
                         </div> 
                     <div className='skill_box'> 
                     <div className='skill_img'>
                     <img src={js} alt='image logo' className='js'/>
                     </div>
                        <div>
                            <h3 >JavaScript</h3><br/>
                            <h4 ><RiAwardFill style={{position:'relative',top:'2px'}}/> Beginner Level</h4><br/>
                            <p>JavaScript was originally named Mocha, later it was renamed to
                                 LiveScript, and then to JavaScript. The LiveScript to JavaScript
                                  name change came because Netscape and Sun did a license agreement. 
                            </p>
                       </div>
                     </div>
                     <div className='skill_box'> 
                     <div className='skill_img'>
                        <img src={react} alt='image logo' className='react'/>
                        </div>
                        <div>
                            <h3 >ReactJS</h3><br/>
                            <h4><RiAwardFill style={{position:'relative',top:'2px'}}/>Intermediate Level</h4><br/>
                            <p>React is a JavaScript library for building user interfaces. It is the view
                                 layer for web applications. At the heart of all React applications are 
                                 components. A component is a self-contained module that renders some output.
                            </p>
                       </div>
                     </div>
                     <div className='skill_box'> 
                     <div className='skill_img'>
                        <img src={figma} alt='image logo' className='figma' />
                        </div>
                        <div>
                            <h3 >Figma</h3><br/>
                            <h4><RiAwardFill style={{position:'relative',top:'2px'}}/>Intermediate Level</h4><br/>
                            <p> Figma is a cloud-based design tool that is similar to Sketch in functionality 
                                and features, but with big differences that make Figma better for team collaboration.
                            </p>
                       </div>
                     </div>
                     <div className='skill_box'>
                        <div className='skill_img'>
                         <img src={ui} alt='image logo' className='ui'/>
                         </div>
                         <div>
                            <h3>User Experience</h3><br/>
                            <h4><RiAwardFill style={{position:'relative',top:'2px'}}/> Beginner Level</h4><br/>
                            <p>UX stands for user experience, while UI is short for User Interface. Both these 
                                aspects are intertwined to produce the desired results. UI/UX Design is the process
                                 of designing the interface.
                            </p>
                       </div>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
