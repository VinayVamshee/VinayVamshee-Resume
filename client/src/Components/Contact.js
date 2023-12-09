import './style.css'
import { useRef } from 'react'
import VinayVamshee from './Images/VinayVamshee2.jpg'
import LinkedIn from './Images/LinkedIn.png'
import Mail from './Images/GoogleMail.png'
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const SendFeedback = (e) => {
    e.preventDefault();
    alert("Thank You!")

    emailjs.sendForm('service_aqzdeqk', 'template_otrzcir', form.current, 'ss9CQ81YavvBu3-nr')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className='Contact'>
      <div style={{ width: '100%' }}>
        <div className='contact-through'>
          <div className='contact-card'>
            <img src={Mail} alt='...' /><a href="mailto: pechettvinay.vamshee2021@vitstudent.ac.in"><p>pechettvinay.vamshee2021@vitstudent.ac.in</p></a>
          </div>
          <div className='contact-card'>

            <img src={LinkedIn} alt='...' /><a rel="noreferrer" href='https://www.linkedin.com/in/pechetti-vinay-vamshee-251245231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'><p>vinayvamshee2183@gmail.com</p></a>
          </div>

        </div>
        <div className='contact_image'>
          <img src={VinayVamshee} alt='...' />
        </div>


      </div>

      <div className='Contact-Text'>
        <p>Feel free to contact me at any time! Whether you have questions, want to discuss potential collaborations, or simply wish to connect, I welcome your outreach. I value open communication and appreciate the opportunity to engage in meaningful conversations. Whether it's via email, phone, or any other preferred method, I am here and ready to respond promptly. Your messages are important, and I look forward to the possibility of connecting with you.</p>
        <a href="mailto: vinayvamshee2183@gmail.com">vinayvamshee2183@gmail.com</a>
        <h4 className='' style={{ fontFamily: 'impact' }}> Or <br />Mail Me Directly</h4>
        <form ref={form} onSubmit={SendFeedback} className='EmailForm'>
          <div className="Email">
            <label>Name :</label>
            <input type='text' name='name'></input>
            <label>Email :</label>
            <input type='text' name='email'></input>
            <label>Phone No :</label>
            <input type='number' name='PhoneNumber'></input>
            <label>Feedback :</label>
            <input type='text' name='message' style={{ height: '100px' }}></input>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>

      </div>

    </div>
  )
}
