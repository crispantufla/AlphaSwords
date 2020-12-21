import React, { Fragment, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import {fetchResource} from "../../api";
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoggedContext } from '../../LoggedContext';

const Login = () => {
  const logged = useContext(LoggedContext);
  let history = useHistory();

  const handleClickR = () => {
    history.push("/register");
  }

  const handleClickO = () => {
    history.push("/login/forgetPass");
  }
 
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [datos, setDatos] = useState( {
    email: '',
    nickname: '',
    password: ''
  })

  const handleImputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

  const sendForm = (event) => {
		event.preventDefault();
		
    fetchResource('login', '', 'POST', {
			email: datos.email, 
			password: datos.password
		}).then(result => {
      if (!result.token) {
        window.alert("No se ha guardado token");
      } else {
        logged.logIn(result.token, result.id);
        history.push("/biblotecas");
      }
    });
  }

  return (
    <Fragment>
    <div className="body-1">
      <div className="login-reg-panel">
        <div className="logo-l" />		
        <div className="register-info-box">
          <h2 className="nocuenta">¿No tienes cuenta?</h2>
          <label id="label-login" for="log-login-show" onClick={handleClickR}>Registrarse</label>
        </div>
        <div className="white-panel">
          <div className="login-show">
            <h2>Iniciar Sesión</h2>
            <input type="text" name="email" placeholder="Correo Electrónico" required onChange={handleImputChange}/>
            <input  type={passwordShown ? "text" : "password"} name="password" placeholder="Contraseña" required onChange={handleImputChange}/>
            <i onClick={togglePasswordVisiblity} className="ver"><img src="https://image.flaticon.com/icons/png/512/65/65000.png" className="eye" /></i>{" "}
            <input className="submitButton" onClick={sendForm} value="Iniciar Sesión" />
            <a className="olvidado" onClick={handleClickO}>¿Te has olvidado la contraseña?</a>
          </div> 
        </div>
      </div>
      </div>
    </Fragment>
  )
}

export default Login;