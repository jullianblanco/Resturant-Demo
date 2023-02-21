import Footer from "../Components/footer";
import Header from "../Components/Header";
import './contactScreen.css';


function ContactScreen() {
    return (
    <div className="ContactScreen" id="contact1">
        <Header/>
        <div className="ContactScreen-main" id="contact1">
            <div className="contactScreen-info">
                <h1 style={{marginBottom: 0}}>Let's Talk</h1>
                <p style={{fontSize: 14}}>Want to get in touch? Give us a call or email, and we'll be sure to answer any questions you may have.</p>
                <h2>Email</h2>
                <p style={{fontSize: 12.5}} className="contactScreen-email">marseywebdev@gmail.com</p>
                <h2>Socials</h2>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                </ul>
            </div>

            <div className="contactScreen-btns">
                <form className="form">
                    <input className="input" type='text' placeholder="Name"></input>
                    <input className="input" type='email' placeholder="Email"></input>
                    <input className="input" type='tel' placeholder="Phone"></input>
                    <textarea className="input2"type='text' placeholder="Your message here"></textarea>
                    <input className="contact-submit" type='submit' value='Submit'></input>
                </form>
            </div>

        </div>
        <Footer />
    </div>
    )


}

export default ContactScreen;