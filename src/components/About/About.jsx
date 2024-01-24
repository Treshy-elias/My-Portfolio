import './About.css'
import hero_image from '../Assest/hero.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])
  return (
    <div className='about'>
      <div data-aos="fade-right" className="left-hand-about">
        <img  src={hero_image} alt="" />
      </div>
      <div className="right-hand-about">
        <div data-aos="fade-down" className="header">
            <p>About <span>Me</span></p>
        </div>
        <div className="title">
            <h3 data-aos="fade-up">Full Stack Developer!</h3>
        </div>
        <div data-aos="fade-left" className="about-me-txt">
            <p>
            I am a skilled web designer with over 3 years of experience in the industry. My passion lies in creating captivating website designs and implementing them through frontend development. take pride in staying up-to-date with current design trends and leveraging my creativity to produce visually appealing and user-friendly websites. Throughout my career, I have developed a deep understanding of user experience (UX) and user interface (UI) principles. By putting myself in the shoes of the end-users, I strive to create intuitive and seamless browsing experiences. I believe that a well-designed website should not only look visually appealing but also provide a smooth and enjoyable interaction for visitors. When starting a new project, I thoroughly research and analyze the target audience and the client's specific requirements. This enables me to tailor my designs to meet their expectations and deliver a unique online presence that aligns with their brand identity..
            </p>
        </div>
        <div data-aos="fade-down" className="more-btn">
            <p>More About Me</p>
        </div>
      </div>
    </div>
  )
}

export default About
