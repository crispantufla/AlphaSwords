import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { LoggedContext } from '../../LoggedContext';
import {HOME, LIBRARY, PERFIL, UPLOADBOOK} from '../../routes';

const Navbar = () => {
    const logged = useContext(LoggedContext)

    return (
        <header className='navbar'>
            {logged.logged ? 
                <nav className='menu'> 
                    <Link to={HOME} className="logo">S-Words</Link>
                    <ul className="navigation">
                        <li><Link to={LIBRARY}>Biblioteca</Link></li>
                        <li><Link to={UPLOADBOOK}>Subir Audiolibro</Link></li>
                        <li><Link to={PERFIL}>Perfil</Link></li>
                        <li><Link to={HOME} onClick={logged.logOut}>Cerrar Sesión</Link></li>
                    </ul>
                </nav> : 
                <nav className='navigation'>
                    <a href="https://github.com/crispantufla/">GIT!</a>
                </nav>
            }
            
        </header>
    )
}

export default Navbar;