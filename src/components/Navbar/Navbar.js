import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { LoggedContext } from '../../LoggedContext';
import {HOME, LIBRARY, REGISTER, LOGIN, PERFIL, UPLOADBOOK, FORGETPASS} from '../../routes';

const Navbar = () => {
    const logged = useContext(LoggedContext)

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                {logged.logged ? 
                    <div className='nav-links'> 
                        <Link to={HOME}>Home</Link>
                        <Link to={LIBRARY}>Bibliotecas</Link>
                        <Link to="/upload">Subir Audiolibro</Link> 
                        <Link to={PERFIL}>Perfil</Link> 
                        <Link className="nav-cerrarsesion" to={HOME} onClick={logged.logOut}>Cerrar Sesión</Link> 
                    </div> : 
                    <div className='nav-links'> 
                        <Link to={HOME} >Home</Link>
                        <Link to={REGISTER}>Register </Link>
                        <Link className="nav-login" to={LOGIN}>Login</Link>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar;