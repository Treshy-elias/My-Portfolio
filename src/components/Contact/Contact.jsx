import { useRef } from 'react'
import './Contact.css'
import {FaFacebook, FaFacebookF, FaFacebookMessenger, FaGithub, FaInstagram, FaPaperPlane, FaPhone, FaPlane, FaRegPaperPlane, FaVoicemail, FaWhatsapp} from "react-icons/fa"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0s22wb9', 'template_z6v3uol', form.current, 'e7vj6NrPauYWmEVgd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div className='contact'>
      <div className="left-hand-contact">
        <div className="contact-header">
            <p style={{color: "white", fontSize: `45px`}}>Contact <span style={{color: "cyan"}}>Me</span></p>
        </div>
        <div className="contact-txt">
            <p className='p-head'>Let's Work Together</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus quasi quod nostrum aliquid consequuntur expedita aut quaerat officia architecto!</p>
        </div>
        <div className="email-no">
            <p> <span><FaRegPaperPlane/></span>treasureaudu7@gmail.com</p>
            <p> <span><FaPhone/></span> 09153186026</p>
        </div>
        <div className="contact-icons">
            <FaFacebook className='contact-icon'/>
            <FaInstagram className='contact-icon'/>
            <FaGithub className='contact-icon'/>
            <FaWhatsapp className='contact-icon'/>
        </div>

      </div>
      <div className="right-hand-contact">
            <div className="right-header">
              <p>Send Me a mail</p>
            </div>
            <form ref={form} className="form"action="" onSubmit={sendEmail}>
                <input type="text" name='user_name' placeholder='Enter Your Name' />
                <input type="email" name='user_email' placeholder='Enter Your Email' />
                <input type="text" name='subject' placeholder='Enter Your Subject' />
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <button className='submit-btn' type='submit'>Submit <span><FaPaperPlane/></span></button>
            </form>
        
      </div>
    </div>
  )
}

export default Contact
