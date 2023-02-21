import Contact from '../Components/contact';
import Footer from '../Components/footer';
import Header from '../Components/Header';
import './aboutScreen.css'; 
import Diner from '../images/diner.jpg'

function AboutScreen() {
return(
    <div className='AboutScreen' id='about1'>
      <Header />
      <div className='aboutScreen-main'>
        <img className='about-diner-img' src={Diner} alt='picture of resturant'></img>
        <h1 className='about-h1'>Our San Antonio Location</h1>
         <p>Welcome to our family-owned barbecue restaurant in San Antonio, Texas. We are proud to serve the best and most delicious BBQ in the city and are excited to share it with you. Our passion for food and BBQ is evident in everything we do. From the quality of our ingredients to the care and attention put into every dish, we are committed to providing you with a truly unforgettable experience.</p>
         <p>Our restaurant is run by a close-knit family who has a deep love for BBQ and the art of smoking meat. We have years of experience and have passed down our skills and knowledge through the generations. Our goal is to provide you with the most authentic BBQ flavor and experience possible.</p>
        <h1 className='about-2'>Our Mission</h1>
         <p>Welcome to our family-owned barbecue restaurant in San Antonio, Texas. We are proud to serve the best and most delicious BBQ in the city and are excited to share it with you. Our passion for food and BBQ is evident in everything we do. From the quality of our ingredients to the care and attention put into every dish, we are committed to providing you with a truly unforgettable experience.</p>
         <p>Our restaurant is run by a close-knit family who has a deep love for BBQ and the art of smoking meat. We have years of experience and have passed down our skills and knowledge through the generations. Our goal is to provide you with the most authentic BBQ flavor and experience possible.</p>
        <h1 className='about-3'>Thank You</h1>
         <p>We are committed to sourcing the freshest and highest quality ingredients and using traditional smoking techniques to bring out the full flavor in each of our dishes. Whether you are looking for juicy brisket, savory pulled pork, or mouth-watering chicken, we have something for everyone.</p>
         <p>Our cozy and inviting dining room is the perfect place to gather with friends and family to enjoy a delicious meal. We are dedicated to making sure that you leave our restaurant with a full belly and a smile on your face.</p>
         <p>We can't wait for you to try our BBQ and become part of our family. Thank you for considering us for your next meal and we look forward to serving you soon!</p>
      </div>
      <Contact />
      <Footer />
    </div>
    
)
}

export default AboutScreen;