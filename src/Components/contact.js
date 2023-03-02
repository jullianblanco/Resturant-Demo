import './contact.css';
import diner from '../images/diner.jpg';
import instagram from '../images/Instagram.svg'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import { Link } from 'react-router-dom';
import { HashLink as Link1 } from 'react-router-hash-link';

function Contact() {
    return (
        <section className='contact-main'>
            
            
            <div className='contact-text'>
                <h1>Contact Us</h1>
                <p>we are ready to take your call and give you the dining experience you deserve.</p>
                
                 <Link1 to = '/contact#contact1' style={{ textDecoration: 'none'}}>
                 <button className='contact-btn'>Contact </button>
                 </Link1>
                
            </div>
            <div className='favicons-contact'>
                <a href=''> <img className='instagram' src={instagram} alt="our facebook link" /></a>
                <a href=''> <img className='facebook' src={facebook} alt="our facebook link" /></a>
                <a href=''> <img className='twitter' src={twitter} alt="our twitter link" /></a>
            
             
            </div>
           
            
        </section>
        
    )
   
}

export default Contact;