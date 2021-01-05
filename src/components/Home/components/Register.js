import React, { Fragment, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import {fetchResource} from "../../../api";
import { LoggedContext } from '../../../LoggedContext';
import { useHistory } from "react-router-dom";

const Register = () => {
    const logged = useContext(LoggedContext);
    const {register, errors, handleSubmit} = useForm();
    const [response, setResponse] = useState()
    const history = useHistory();
  
    const onSubmit = (data, e) => {
        fetchResource('register','','POST', {
            email: data.email, 
            password: data.password, 
            nickname: data.nickname
        }).then(result => { if (result.token) {
            logged.logIn(result.token, result.id);
            history.push("/");
        } else {
            setResponse(result.message);
        }});
    }
  
    return (
        <Fragment>
            <h2>Crea una nueva Cuenta</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="email" placeholder="Correo Electrónico" ref={register({
                    pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address"
                    },
                    required: {value: true, message: 'Email Obligatorio'}
                })}/>
                <p>{errors?.email?.message}</p>
                <input type="text" name="nickname" placeholder="Usuario" ref={register({
                    required: {value: true, message: 'Usuario Obligatorio'},
                    minLength: {value: 6, message: "Nickname debe tener minimo 6 caracteres"},
                    maxLength: {value: 15, message: "Nickname debe tener minimo 15 caracteres"}
                })}/>
                <p>{errors?.nickname?.message}</p>
                <input type="password" name="password" placeholder="Contraseña" ref={register({
                    required: {value: true, message: 'Password Obligatorio'},
                    minLength: {value: 6, message: "Password debe tener minimo 6 caracteres"},
                    maxLength: {value: 15, message: "Password debe tener minimo 15 caracteres"}
                })}/>
                <p>{errors?.password?.message}</p>
                <button>Registrarse</button>
            </form>
            <div className="errors">
                <p>{response && response}</p>
            </div>
        </Fragment>
    )
}

export default Register;