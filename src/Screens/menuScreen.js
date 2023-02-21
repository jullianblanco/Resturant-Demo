import { useState} from 'react';
import Banner from '../Components/banner';
import Contact from '../Components/contact';
import Footer from '../Components/footer';
import Header from '../Components/Header';
import './menuScreen.css'
import ExpandIcon from '../images/expandIcon.svg';
import Burger from '../images/burger1.jpg';
import Macburger from '../images/macburger.jpg';
import Steak1 from '../images/steak1.jpg';
import Steak2 from '../images/steak2.png';
import Steak3 from '../images/steak3.png';
import Steak4 from '../images/steak4.png';
import Chicken1 from '../images/chicken1.jpg';
import Chicken2 from '../images/chicken2.png';
import Burger2 from '../images/burger2.png';
import Wings from '../images/wings.png';
import BakedPotato from '../images/bakedpotato.png';
import Fries from '../images/fries.png';
import CloseBtn from '../images/closebtn.svg';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/MarsyWebdev.svg';
import menu from '../images/menu.svg';

function MenuScreen() {

     const [isMenuExpanded, setIsMenuExpanded] = useState(false);
      const [showDropdown, setShowDropdown] = useState('menu-dropdown');
    
      const toggleMenu = () => {
       setIsMenuExpanded(!isMenuExpanded);
        setShowDropdown(showDropdown === 'menu-dropdown' ? 'menu-dropdown-open' : 'menu-dropdown');
      };

      const closeDropdown = () => {
        setShowDropdown('menu-dropdown');
        setIsMenuExpanded(!isMenuExpanded);
      }


    return (
        <div className='menuScreen' id='menu1'>
         <Header />

       <div className='menu-description'>
        <div className='menu-description-text'>
        <h1>Our Menu</h1>
        <p>Check out our delicious menu! We offer a wide variety of mouth-watering BBQ dishes that are sure to satisfy your cravings. Take a look at our menu options below and get ready to indulge in some of the best BBQ you've ever tasted!</p>
        </div>
        </div>



         <nav className='menu-nav-screen' onClick={toggleMenu}>
            <button>Menu</button>
            <img className={isMenuExpanded ? 'close-icon' : 'expand-icon'} src={isMenuExpanded ? CloseBtn : ExpandIcon} alt='icon to show navigation menu'  />
         </nav>
         
          <div className={showDropdown}>
            <a href='#burgers' onClick={closeDropdown}>Burgers</a>
            <a href='#steaks' onClick={closeDropdown}>Steaks</a>
            <a href='#chicken' onClick={closeDropdown}>Chicken</a>
            <a href='#kids' onClick={closeDropdown}>Kids Menu</a>
            <a href='#sides' onClick={closeDropdown}>Sides</a>
          </div>

         <div className='full-menu'>
            <h1 id='burgers' style={{textAlign: 'center', fontFamily: 'Poppins-SemiBold', margin: 10}}>Burgers</h1>
            <div className='menu-items'>

                <div className='menu-item'>
                 <img className='burger1' src={Burger} alt='picture of burger'/>
                 <h1>The King Beef<span>8.99$</span></h1>
                 <p>A double cheeseburger stuffed with high quality beef, your choice of cheese, pickles, lettuce, and caramelized onions, all on a warm toasted bun. </p>
                </div>

                <div className='menu-item'>
                <img className='burger3' src={Macburger} alt='picture of burger'/>
                <h1>Macburger<span>9.00$</span></h1>
                <p>This juicy beef patty is topped with a generous portion of creamy, gooey macaroni and cheese, nestled between two soft buns. Simply delicious.</p>

                </div>
            </div>

            <h1 id='steaks' style={{textAlign: 'center', fontFamily: 'Poppins-SemiBold', margin: 10}}>Steaks</h1>
            <div className='menu-items'>

                <div className='menu-item'>
                 <img className='steak1' src={Steak1} alt='picture of steak'/>
                 <h1>Sirloin Steak<span>13.99$</span></h1>
                 <p>expertly hand-cut and seasoned to perfection. Made from premium, aged beef, our sirloin is juicy, tender, and bursting with rich, bold flavors.</p>
                </div>

                <div className='menu-item'>
                <img className='steak2' src={Steak2} alt='picture of steak'/>
                <h1 style={{fontSize: 21}}>Premium Steak<span>14.00$</span></h1>
                <p>The Premium steak is grilled to perfection and seasoned with a blend of premium spices, elevating the natural taste of the beefs</p>

                </div>

                <div className='menu-item'>
                 <img className='steak3' src={Steak3} alt='picture of steak'/>
                 <h1>Hearty Steak<span>12.99$</span></h1>
                 <p>A hearty steak is a delicious and satisfying meal option for meat lovers. Made from high-quality cuts of beef, this steak is known for its amazing flavor.</p>
                </div>

                <div className='menu-item'>
                <img className='steak4' src={Steak4} alt='picture of steak'/>
                <h1>Royal Sirloin<span>19.99$</span></h1>
                <p>The Royal Sirloin Steak is a premium cut of beef, expertly seasoned and grilled to perfection. Tender and juicy, with a bold, beefy flavor.</p>

                </div>
                </div>

                <h1 id='chicken' style={{textAlign: 'center', fontFamily: 'Poppins-SemiBold', margin: 10}}>Chicken</h1>
                <div className='menu-items'>

                <div className='menu-item'>
                 <img className='chicken1' src={Chicken1} alt='picture of chicken'/>
                 <h1 style={{fontSize: 16}}>The Stomach Buster<span>13.99$</span></h1>
                 <p>a delectable chicken dish paired with golden toast and a medley of fresh vegetables.  crispy, buttery toast and a colorful mix of seasonal veggies.  </p>
                </div>

                <div className='menu-item'>
                <img className='chicken2' src={Chicken2} alt='picture of chicken'/>
                <h1 style={{fontSize: 16}}>Chicken Tenders<span>7.99$</span></h1>
                <p>Our juicy and succulent chicken tenders are hand-breaded and fried to perfection. Served with your choice of dipping sauce and a side of crispy fries.</p>

                </div>
            </div>

            
            <h1 id='kids' style={{textAlign: 'center', fontFamily: 'Poppins-SemiBold', margin: 10}}>Kids</h1>
            <div className='menu-items'>

                <div className='menu-item'>
                 <img className='burgerjr' src={Burger2} alt='picture of burger'/>
                 <h1>Burger Jr<span>8.99$</span></h1>
                 <p>The Burger Jr. meal is a smaller version of our classic burger, made with a juicy beef patty and served on a soft sesame seed bun. Comes with a side of fries.</p>
                </div>

                <div className='menu-item'>
                <img className='mini-wings' src={Wings} alt='picture of wings'/>
                <h1>Mini Wings<span>5.00$</span></h1>
                <p>Introducing our Kids Mini Wing Meal, perfect for the little ones! Tender and juicy chicken wings served with a side of crispy french fries.</p>

                </div>
            </div>

            <h1 id='sides' style={{textAlign: 'center', fontFamily: 'Poppins-SemiBold', margin: 10}}>Sides</h1>
            <div className='menu-items'>

                <div className='menu-item'>
                 <img className='baked-Potato' src={BakedPotato} alt='picture of baked potato'/>
                 <h1>Baked Potato<span>4.00$</span></h1>
                 <p>A Baked Potato fully loaded with all the goods, melted cheese, rich butter, and a delicious flavor.</p>
                </div>

                <div className='menu-item'>
                <img className='fries' src={Fries} alt='picture of fries'/>
                <h1>Fries<span>3.00$</span></h1>
                <p>Add these delicious side of fries to complete your meal. The more the merrier!</p>

                </div>
            </div>



            



         </div>
         <Contact />
         <Footer />
       </div> 
    )
   
}

export default MenuScreen;