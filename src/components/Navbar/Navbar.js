import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoggedContext } from '../../LoggedContext';
import {HOME, LIBRARY, PERFIL, UPLOADBOOK} from '../../routes';
import {Home, Person, Publish, ExitToApp} from '@material-ui/icons/';
import './Navbar.css';

const Navbar = () => {
    const logged = useContext(LoggedContext)

    return (
        <header className='Navbar'>
            {logged.logged ? 
                <nav className='menu'> 
                    <Link to={HOME} className="logo">S-Words</Link>
                    <ul className="navigation">
                        <li><Link to={LIBRARY}><Home />Biblioteca</Link></li>
                        <li><Link to={UPLOADBOOK}><Publish />Subir Audiolibro</Link></li>
                        <li><Link to={PERFIL}><Person />Perfil</Link></li>
                        <li><Link to={HOME} onClick={logged.logOut}><ExitToApp />Cerrar Sesión</Link></li>
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