import '../App.css';
import { ReactDOM } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Banner from '../Components/banner';
import Header from '../Components/Header';
import mainImg from '../images/Main-img.jpg';
import imageGallery from '../images/ImageGallery.svg';
import burger1 from '../images/burger1.jpg';
import steak1 from '../images/steak1.jpg';
import chicken1 from '../images/chicken1.jpg';
import Menu from '../Components/menu';
import Contact from '../Components/contact';
import Footer from '../Components/footer';
import ContactScreen from '../Screens/contactScreen';
import { HashLink as Link1 } from 'react-router-hash-link';
import Diner from '../images/diner.jpg'

function HomeScreen() {
  return (
<div className='App' id='app1'>
<Header/>
<Banner/>
  <div className='main'>
          <div className='overlay'></div>
          <div className='main-container'>
           <h1 style={{position: 'relative', marginLeft: 13}}>Where Quality meets great pricing.</h1>
           <p className='main-text' style={{position: 'relative', left: 13, marginBottom: 55}}>Owned and operated in San Antonio Texas, Grilled and Greeted provides the freshest, tastiest, and most affordable barbecue dining experience you can find. </p>
           <div className='main-btns'>
            <Link1 to='/menu#menu1' style={{textDecoration: 'none'}}>
             <button style={{curser: 'pointer'}} className='menu-btn'>Menu</button>
            </Link1>
            <Link1 to='/contact#contact1' style={{textDecoration: 'none'}}>
            <button className='contact-btn1'>Contact</button>
            </Link1>
             
             
           </div>
          </div>   
  </div>

  <section className='see-menu'>
    <div className= 'see-menu1'>
     <h1 style={{fontFamily: 'Poppins-SemiBold', fontSize: 44, margin:0, marginTop: 20}}>Our Food</h1>
     <p style={{fontFamily:'Poppins-Regular', width: 230}}>Our menu consists of savory grilled meats, grilled fruit, and timeless classics such as Mac n Cheese and baked potatoes.</p>
     <Link1 to='/menu#menu1'><button className='see-menu-btn'>See full menu</button></Link1>
    </div>
    
     <img className='image-gallery' src={imageGallery} alt='image gallery'/>
   
   
  </section>

  <section className='popular-items'>
    <h1 className='popular-header' style={{fontFamily: 'Poppins-SemiBold'}}>Popular Items</h1>
    <div className='popular-items-content'>
        <div className='popular-item'>
         <img className='burger1' src={burger1} alt='burger picture'/>
         <h1 style={{fontFamily: 'Poppins-Regular', margin: 0, marginTop: 14 }}>The King Beef</h1>
         <p style={{fontFamily: 'Poppins-Regular'}}>A double cheeseburger stuffed with high quality beef, your choice of cheese, pickles, lettuce, and caramelized onions, all on a warm toasted bun.</p>
        </div>
        <div className='popular-item'>
         <img className='steak1' src={steak1} alt='steak picture'/>
         <h1 style={{fontFamily: 'Poppins-Regular', margin: 0, marginTop: 14}}>Sirloin Steak</h1>
         <p style={{fontFamily: 'Poppins-Regular'}}>Hand-selected for it's richness of flavor and tender texture. This steak along with being coated in some of our personal blend of spices and cooking techniques is seared to perfection.</p>
        </div>
     
        <div className='popular-item'>
         <img className='chicken1' src={chicken1} alt='chicken picture'/>
         <h1 style={{fontFamily: 'Poppins-Regular', margin: 0, marginTop: 14}}>The Stomach Buster</h1>
         <p style={{fontFamily: 'Poppins-Regular'}}>The stomach buster is very self explanatory, juicy sirloin steak, slow cooked chicken, crisp veggies and toasted bread, if you need a good night's sleep this should do the trick!</p>
        </div>
   
    </div>

  </section>
  
  <Menu />
  <Contact />
  <Footer />
</div>



  );
}

export default HomeScreen;
