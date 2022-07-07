import React from "react";
import CartWidget from '../CartWidget';
import './style.css';

const NavBar = () => {
    return (
        <ul style={{width:"100%"}}>
                <li className='nav-element'><Link to='/'>Inicio</Link></li>
                <li className='nav-element'><Link to='/category/vinilos'>Vinilos</Link></li>
                <li className='nav-element'><Link to='/category/estrenos'>Estrenos</Link></li>
                <li className='nav-element'><Link to="/category/clasicos">Clasicos</Link></li>
                <li className='nav-element'><Link to="/category/nosotros">Nosotros</Link></li>
        </ul>
    )
}

export default NavBar;