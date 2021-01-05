import React, { Fragment, useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import {fetchResource} from "../../../api";
import { LoggedContext } from '../../../LoggedContext';
import { useHistory } from "react-router-dom";

const Login = () => {
    const logged = useContext(LoggedContext);
    const {register, errors, handleSubmit} = useForm();
    const [response, setResponse] = useState()
    const history = useHistory();
  
    const onSubmit = (data) => {
        fetchResource('login','','POST', {
            email: data.email, 
            password: data.password
        }).then(result => { if (result.token) {
            logged.logIn(result.token, result.id);
            history.push("/");
        } else {
            setResponse(result.message);
        }});
    }
  
    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Ingresa con tu cuenta</h2>
                <input type="text" name="email" placeholder="Correo Electrónico" ref={register({
                    pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Escribe un correo válido."
                    },
                    required: {value: true, message: 'Escribe un correo válido.'}
                })}/>
                <p>{errors?.email?.message}</p>
                <input type="password" name="password" placeholder="Contraseña" ref={register({
                    required: {value: true, message: 'Password Obligatorio'},
                    minLength: {value: 6, message: "La contraseña debe tener entre 4 y 60 caracteres."},
                    maxLength: {value: 15, message: "La contraseña debe tener entre 4 y 60 caracteres."}
                })}/>
                <a>¿Has olvidado la contraseña?</a>
                <p>{errors?.password?.message}</p>
                <button>Iniciar sesión</button>
            </form>
            <div className="errors">
                <p>{response && response}</p>
            </div>
        </Fragment>
    )
}

export default Login