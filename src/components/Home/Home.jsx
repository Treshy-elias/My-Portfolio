import './Home.css'
import hero_image from '../Assest/hero.jpg'
import {FaFacebook, FaFacebookF, FaFacebookMessenger, FaGithub, FaInstagram, FaWhatsapp} from "react-icons/fa"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Home = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className='home'>
        <div className="left-hand-home">
        <h2>Hello it's Me </h2>
      <h1>Treshy Angel</h1>
      <div className="wrappper">
        <div className="static-txt">I'm a</div>
        <ul className='dynamic-txts'>
          <li><span>Software Eng.</span></li>
          <li><span>Designer</span></li>
          <li><span>Developer</span></li>
          <li><span>Freelancer</span></li>
        </ul>
      </div>
      <div className="about-me">
        <p data-aos="fade-right">I am a web developer with experience for over 3 years. Specializing in crafting visually stunning websites, frontend designs and more....</p>
      </div>
      <div className="social-icons">
        <FaGithub  className='my-icons'/>
        <FaFacebook className='my-icons'/>
        <FaWhatsapp className='my-icons'/>
        <FaInstagram className='my-icons'/>
      </div>
      <div className="more-btn">
        <p>More About Me</p>
      </div>
    </div>
    <div data-aos="fade-left" className="right-hand-home">
        <img src={hero_image} alt="" />
    </div>
 
    </div>
  )
}

export default Home
