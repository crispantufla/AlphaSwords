import React, { Fragment, useState } from 'react';
import { useHistory } from "react-router-dom";
import {fetchResource} from "../../api";
import "./Register.css";

const Register = () => {

  let history = useHistory();

  function handleClickL() {
    history.push("/login");
  }
  //Mostrar constraseña
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [datos, setDatos] = useState( {
    email: '',
    nickname: '',
    password: ''
  })

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

  const sendForm = (event) => {
    event.preventDefault();

    fetchResource('register','','POST', {
      email: datos.email, 
      password: datos.password, 
      nickname: datos.nickname
    }).then((result) => {console.log(result)});
  }

  return (
    <Fragment>
    <div className="body-1">
    <form onSubmit={sendForm}>
      <div class="login-reg-panel-1">
        <div className="logo"></div>
        
        <div class="login-info-box-1">
            <h2 className="tienecuenta">¿Tienes alguna cuenta?</h2>
            <label id="label-register" for="log-reg-show-1" onClick={handleClickL}><b>Iniciar Sesión</b></label>
        </div>	
                
        <div class="white-panel-r">
            <div class="register-show">
              <h2 className="titulo">Registrarse</h2>
              <input type="text" name="email" placeholder="Correo Electrónico..." onChange={handleInputChange} required/>
              <input type="text" name="nickname" placeholder="Usuario..." onChange={handleInputChange} required/>
              <input type={passwordShown ? "text" : "password"} name="password" placeholder="Contraseña..." onChange={handleInputChange}required/><b>*</b>
              <i onClick={togglePasswordVisiblity} className="ver-2"><img src="https://image.flaticon.com/icons/png/512/65/65000.png" className="eye-2" /></i>{" "}
              <input type="submit" value="Registrarse" onChange={handleInputChange}/>
            </div>
        </div>

	    </div>
    </form>
    </div>
    </Fragment>
  )
}

export default Register;