import { useState } from 'react';
import './Header.css';
import logo from '../images/MarsyWebdev.svg';
import menu from '../images/menu.svg';
import CloseBtn from '../images/closebtn.svg';
import HomeScreen from '../Screens/HomeScreen';
import { HashLink as Link } from 'react-router-hash-link';


function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [showDropdown, setShowDropdown] = useState('nav-dropdown');

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
    setShowDropdown(showDropdown === 'nav-dropdown' ? 'nav-dropdown-open' : 'nav-dropdown');
  }

return(
     <header className='header'>
       <section style={{display:'block'}} className='logo-container'>
        <a href='/'>
        <img className='logo' src={logo} alt="company logo" />
        </a>
       </section>
       <nav className='menu-container'>
         <img onClick={toggleNav} className={isNavExpanded ? 'close-icon-nav' : 'menu'} src={isNavExpanded ? CloseBtn : menu} alt='icon to show navigation menu'  />
        </nav>
        <div className={showDropdown}>
            <Link to='/#app1'>Home</Link>
            <Link to='/menu#menu1'>Menu</Link>
            <Link to='/contact#contact1'>Contact</Link>
            <Link to='/about#about1'>About</Link>
          </div>
     </header>
)}
export default Header;