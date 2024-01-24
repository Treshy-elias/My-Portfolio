import './Showcase.css'
import Home from '../Home/Home'
import About from '../About/About'
import Service from '../Service/Service'
import Skills from '../Skills/Skills.jsx'
import Project from '../Project/Project.jsx'
import Contact from '../Contact/Contact.jsx'

const Showcase = () => {
  return (
    <div>
      <section id='home'>{<Home/>}</section>
      <section id='about'>{<About/>}</section>
      <section id='service'>{<Service/>}</section>
      <section id='skills'>{<Skills/>}</section>
      <section id='project'>{<Project/>}</section>
      <section id='contact'>{<Contact/>}</section>

    </div>
  )
}

export default Showcase
