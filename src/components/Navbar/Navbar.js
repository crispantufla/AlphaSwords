import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {isLogin, logOut} from '../../utils/loginUtils';
import { LogedContext } from '../../LogedContext';

const Navbar = () => {

    const loged = useContext(LogedContext)
    const trueLogOut = () =>{
        logOut()
        loged.setLoged(false);
    }

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                

                {isLogin() ? 
                    <div className='nav-links'> 
                        <Link to="/" >Home</Link>
                        <Link to="/biblioteca" >Bibliotecas</Link>
                        <Link to="/upload"> Subir Audiolibro </Link> 
                        <Link to="/perfil"> Perfil </Link> 
                        <Link className="nav-cerrarsesion" to="/perfil" onClick={trueLogOut}> Cerrar Sesión </Link> 
                    </div> : 
                    <div className='nav-links'> 
                        <Link to="/" >Home</Link>
                        <Link to="/biblioteca" >Bibliotecas</Link>
                        <Link to="/register"> Register </Link>
                        <Link className="nav-login" to="/login"> Login </Link>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar;