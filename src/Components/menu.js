import './menu.css'; 
import { HashLink as Link } from 'react-router-hash-link';

function Menu() {
    return(
        <section className='sub-menu'>
            <h1 className='menu-header'>View Our Menu</h1>
            <div className='menu-nav'>
            <Link to='/menu#menu1'>Full Menu</Link>
            <Link to="menu#burgers">Burgers</Link>
            <Link to='/menu#steaks'>Steaks</Link>
            <Link to='/menu#chicken'>Chicken</Link>
            <Link to='/menu#kids'>Kids Menu</Link>
            <Link to='/menu#sides'>Sides</Link>
            </div>
           
        </section>
        
    )
}

export default Menu;