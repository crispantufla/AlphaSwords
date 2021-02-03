import React, { useState } from 'react';
import {fetchResource} from "../../api";

const InputUpdate = ({request, setInput}) => {

    const [data, setData] = useState();

    const handleInputChange = (event) => {
        setData(event.target.value)
    }

    const sendForm = (event) => {

        fetchResource ('data/user',localStorage.getItem('id'), 'PUT', {
            [request]: data
        }).then((result) => { console.log(result) });

        setInput(false);
    }

    return (
        <div>
            <input 
                placeholder={ "ingrese su nuevo " + request} 
                name={request} 
                onChange={handleInputChange}>
            </input>
            <a onClick={sendForm}> Actualizar</a>
        </div>
    )
}

export default InputUpdate;