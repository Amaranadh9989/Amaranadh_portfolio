import React from 'react';
import './Experience.css';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import react from './images/react.png';
import figma from './images/figma.png'; 
import python from './images/python.png';
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
                            <p>The HyperText Markup Language or HTML is the standard markup language 
                                for documents designed to be displayed in a web browser. It defines 
                                the content and structure of web content. It is often assisted by 
                                technologies such as Cascading Style Sheets and scripting languages 
                                such as JavaScript.
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
                            <p>Cascading Style Sheets is a style sheet language used for specifying the 
                                presentation and styling of a document written in a markup language such
                                 as HTML or XML.CSS is a cornerstone technology of the World Wide
                                  Web, alongside HTML and JavaScript.
                            </p>
                       </div>
                         </div> 
                     <div className='skill_box'> 
                     <div className='skill_img'>
                     <img src={js} alt='image logo' className='js'/>
                     </div>
                        <div>
                            <h3 >JavaScript</h3><br/>
                            <h4 ><RiAwardFill style={{position:'relative',top:'2px'}}/>Intermediate Level</h4><br/>
                            <p>JavaScript, often abbreviated as JS, is a programming language and core
                                 technology of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7%
                                  of websites use JavaScript on the client side for webpage behavior, often
                                   incorporating third-party libraries.
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
                            <p>React is a free and open-source front-end JavaScript library for building
                                 user interfaces based on components.It is maintained by Meta and a community
                                  of individual developers and companies.React can be used to develop single-page, 
                                  mobile.
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
                            <p> Figma is a collaborative web application for interface design, with additional
                                 offline features enabled by desktop applications for macOS and Windows. 
                                 The feature set of Figma focuses on user interface and user experience
                                  design
                            </p>
                       </div>
                     </div>
                     <div className='skill_box'>
                        <div className='skill_img'>
                         <img src={python} alt='image logo' className='python'/>
                         </div>
                         <div>
                            <h3>Python</h3><br/>
                            <h4><RiAwardFill style={{position:'relative',top:'2px'}}/> Intermediate Level</h4><br/>
                            <p>Python is a high-level, general-purpose programming language. Its design
                                 philosophy emphasizes code readability with the use of significant indentation.
                                  Python is dynamically typed and garbage-collected. It supports multiple
                                   programming paradigms, including structured,oops.
                            </p>
                       </div>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
