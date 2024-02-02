import React from 'react';
import './Project.css';
import easylearn from './images/project_1.png';
import g4g from './images/project_2.png';
import movie from './images/Movie_Hub.png';
const Project = () => {
    return (
        <div id='Project' className='Project'>
            <div className='span_container'>
            <div  className="span_sub_container" style={{position:'relative',top:'20px'}}>
                <span style={{fontSize:'25px', marginLeft:'50px', display:'block', paddingBottom:'15px'}}>Browse My Recent</span>
                <span style={{fontSize:'40px',marginLeft:'80px'}}>Projects</span>
                </div>
            </div>
        <div className='project_container'>
            <div className='project_sub'>
                <div className='project_card'>
                <img src={easylearn} alt='image logo' className='easylearn'/>
                <div className='project_button'>
                <a href='https://github.com/Amaranadh9989' target='blank'rel="noopener noreferrer" className='github_link'>
                    Github
                </a>
                    <a href="#" target='blank'rel="noopener noreferrer" className='demo_link'>
                        Live Demo
                    </a>
                </div>
                </div>
                <div className='project_card'>
                <img src={g4g} alt='image logo' className='easylearn'/>
                <div className='project_button'>
                <a href='https://github.com/Amaranadh9989' target='blank'rel="noopener noreferrer" className='github_link'>
                    Github
                </a>
                  <a href='https://amaranadh9989.github.io/G4G/' target='blank'rel="noopener noreferrer" className='demo_link'>
                    Live Demo
                  </a>
                </div>
                </div>
                <div className='project_card'>
                <img src={movie} alt='image logo' className='easylearn'/>
                <div className='project_button'>
                <a href='https://github.com/Amaranadh9989' target='blank'rel="noopener noreferrer" className='github_link'>
                    Github
                </a>
                <a href='https://amaranadh9989.github.io/Amaranadh_movie_creations/' target='blank'rel="noopener noreferrer" className='demo_link'>
                    Live Demo
                  </a>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Project;
