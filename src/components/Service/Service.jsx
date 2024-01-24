import './Service.css'
import {FaApple, FaCode, FaCrop, FaHtml5} from 'react-icons/fa'



const Service = () => {
  return (
    <div className='service'>
        <div className="service-header">
            <h1>My <span>Service</span></h1>
            </div>
            <div className="my-cards">
            
            <div id='card1' className="card">
                <div className="service-icon">
                <FaCode/>
                </div>
                <h4>UI/UX Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptate nobis maxime.</p>
                <div className="service-more-btn">
                    Learn More
                </div>
            </div>
            <div id='card3' className="card">
                <div className="service-icon">
                    <FaCrop/>
                </div>
                <h4>Web design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptate nobis maxime.</p>
                <div className="service-more-btn">
                    Learn More
                </div>
            </div>
            <div id='card2' className="card">
                <div className="service-icon">
                    <FaApple/>
                </div>
                <h4>App Desi</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptate nobis maxime.</p>
                <div className="service-more-btn">
                    Learn More
                </div>
            </div>
            </div>
         
      
    </div>
  )
}

export default Service
