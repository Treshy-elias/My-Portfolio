import React, { useEffect, useRef, useState } from 'react'
import './Skills.css'
import { FaCss3, FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa'
import './Skills'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  })

  useEffect(() => {

    const valueElements = [
      document.getElementById('value1'),
      document.getElementById('value2'),
      document.getElementById('value3'),
      document.getElementById('value4'),
    ];


  }, []);
  


  
  


  return (
    <div className='skills'>
      <h1 data-aos="fade-up">My <span style={{color: "cyan"}}>Skills</span></h1>
      <div className="my-skills">

      <div data-aos="fade-right"  className="left-hand-skills">
      <div className="skills-header">Technical skills</div>
        <div className="skills-list">
          <FaHtml5 className='fa-icon'/>
          <p>HTML</p>
          <div className="skill-stats">
            <div className="num1-progress"></div>
          </div>
        </div>
        <div className="skills-list">
          <FaJs className='fa-icon'/>
          <p>Javascript</p>
          <div className="skill-stats">
            <div className="num2-progress"></div>
          </div>
        </div>
        <div className="skills-list">
          <FaCss3 className='fa-icon'/>
          <p>CSS</p>
          <div className="skill-stats">
            <div className="num3-progress"></div>
          </div>
        </div>
        <div className="skills-list">
          <FaReact className='fa-icon'/>
          <p>React</p>
          <div className="skill-stats">
            <div className="num4-progress"></div>
          </div>
        </div>
      </div>
        
      <div className="right-hand-skills">
      <div data-aos="fade-down" className="skills-header">Proffesional Skills</div>
      <div className="circle-stats">
        <div data-aos="fade-right" className="container">
          <div className="circular-progress" id='circle1'>
            <span className="progress-value" id='value1' ></span>
          </div>
          <div className="text">Creativity</div>
        </div>
        <div data-aos="fade-down" className="container">
          <div className="circular-progress" id='circle2'>
            <span className="progress-value" id='value2'>0%</span>
          </div>
          <div className="text">Communication</div>
        </div>
        <div data-aos="fade-left" className="container">
          <div className="circular-progress" id='circle3'>
            <span className="progress-value" id='value3'>0%</span>
          </div>
          <div className="text">Problem-solving</div>
        </div>
        <div data-aos="fade-up" className="container">
          <div className="circular-progress" id='circle4'>
            <span className="progress-value" id='value4'>0%</span>
          </div>
          <div className="text">Teamwork</div>
          </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Skills
