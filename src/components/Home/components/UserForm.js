import React, { Fragment, useState } from 'react';
import Register from './Register';
import Login from './Login';

const UserForm = () => {
    const [form, setForm] = useState (false);

    const handleClick = () => {
        if (form) {
            return setForm(false)
        }
        
        return setForm(true);
    }

    return (
        <Fragment>
            {form ? <Fragment>
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

export default UserForm