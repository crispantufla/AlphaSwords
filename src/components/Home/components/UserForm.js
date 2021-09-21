import React, { Fragment, useState } from 'react';
import Register from './Register';
import Login from './Login';

const UserFormLogin = () => {
    const [formLogin, setFormLogin] = useState (false);

    const handleClick = () => {
        if (formLogin) {
            return setFormLogin(false)
        }
        
        return setFormLogin(true);
    }

    return (
        <Fragment>
            {formLogin ? <Fragment>
                <Login />
                <a onClick={handleClick}>Que aun no tienes cuenta? Vamos a crear una!</a>
            </Fragment> :
            <Fragment> 
                <Register />
                <a onClick={handleClick}>Si ya tienes cuenta puedes iniciar sesión!</a>
            </Fragment>}
        </Fragment>
    )
}

export default UserFormLogin