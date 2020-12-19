import React, { Fragment, useState } from 'react';
import './ForgetPass.css';

const ForgetPass = () => {

  const [datos, setDatos] = useState( {
    email: '',
  })

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

  
  const sendForm = (event) => {
    event.preventDefault();
    console.log(datos.email)

    //localhost:3000/data/User
    fetch('http://localhost:3001/forgetpass',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify({email: datos.email})
    }).then(res => res.json()).then((result) => {console.log(result)});
  }

  return (
    <Fragment>
    <div className="body-1">
      <div className="forget-reg-panel">
        <div className="white-panel-forget">
          <form onSubmit={sendForm}>
            <div className="forget-show">
              <h2>Recuperar contraseña</h2>
              <div>
                <label className="text-email">Escriba su email </label>
                <input placeholder="example@example.com" type="text" name="email" onChange={handleInputChange}></input>
              </div> 
              <div> 
                <button type="submit">Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </div>  
    </div>
    </Fragment>
  )
}

export default ForgetPass;