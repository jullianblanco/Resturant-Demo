import { useState } from 'react';
import './Header.css';
import logo from '../images/MarsyWebdev.svg';
import menu from '../images/menu.svg';
import CloseBtn from '../images/closebtn.svg';
import HomeScreen from '../Screens/HomeScreen';
import { HashLink as Link } from 'react-router-hash-link';


function Header() {

  const [showDropdown, setShowDropdown] = useState('item');

  const toggleNav = () => {
    setShowDropdown(showDropdown === 'item' ? 'item-active' : 'item');
  }

return(
     <nav className='header'>
        <ul className='menu-main'>
          <li className='logo-container'><img className='logo' src={logo} alt="logo" /></li>
          <li className={showDropdown}><Link to='/#app1'>Home</Link></li>
          <li className={showDropdown}><Link to='/menu#menu1'>Menu</Link></li>
          <li className={showDropdown}><Link to='/contact#contact1'>Contact</Link></li>
          <li className={showDropdown}><Link to='/about#about1'>About</Link></li>
          <li className='bars' onClick={toggleNav}><img className='menu' src={menu} alt="menu" /></li>
        </ul>
     </nav>
)}
export default Header;




