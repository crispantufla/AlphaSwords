import React, {useEffect, useState} from 'react';
import {fetchResource} from "../../api";
import './UserPanel.css';
import { useParams, useHistory, NavLink } from 'react-router-dom';


const Container = () => {
    const [user, setUser] = useState();
    useEffect(() => {
        fetchResource('data/user', localStorage.getItem('id'), 'GET').then(setUser);
    }, [])

    return (
        <div className="userPanel">
            <header>Hola {user && user.nickname}</header>
            <nav className='menu'>
                <ul className="navigation">
                    <li><a>Perfil</a></li>
                    <li><a>Mis Libros</a></li>
                    <li><a>Favoritos</a></li>
                    <li><a>Notificaciones</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Container;