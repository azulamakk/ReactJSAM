import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Shop } from '../context';

const NavBar = () => {

    const {estadoA} = useContext(Shop)

    console.log(estadoA)

    return (
        <nav>
        <ul style={{width:"100%"}}>
                <li className='nav-element'><Link to='/'>Inicio</Link></li>
                <li className='nav-element'><Link to='/category/vinilos'>Vinilos</Link></li>
                <li className='nav-element'><Link to='/category/estrenos'>Estrenos</Link></li>
                <li className='nav-element'><Link to="/category/clasicos">Clasicos</Link></li>
                <li className='nav-element'><Link to="/category/nosotros">Nosotros</Link></li>
                <li className='nav-element'><a href='/#'>{estadoA}</a></li>
        </ul>
        </nav>
    )
}

export default NavBar;