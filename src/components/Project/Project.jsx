import './Project.css'
import {FaApple, FaCode, FaCrop, FaHtml5} from 'react-icons/fa'
import project1 from '../Assest/project 1.jpeg'
import project2 from '../Assest/project 2.jpg'
import project3 from '../Assest/project 3.jpg'



const Project = () => {
  return (
    <div className='Project'>
        <div className="Project-header">
            <h1>My <span style={{color: "cyan"}}>Projects</span></h1>
            </div>
            <div className="my-cards">
            <div className="container">
            <div id='card1' className="card">
             <img src={project1} alt="" />
            </div>
            <div className="overlay-txt">
              <p>View site</p>
            </div>
            </div>
            <div className="container">
            <div id='card3' className="card">
            <img src={project2} alt="" />
            </div>
            <div className="overlay-txt">
              <p>View site</p>
            </div>
            </div>
            <div className="container">
            <div id='card2' className="card">  
            <img src={project3} alt="" />
            </div>
            <div className="overlay-txt">
              <p>View site</p>
              </div> 
            </div>
        
          
  
            </div>
         
      
    </div>
  )
}

export default Project
