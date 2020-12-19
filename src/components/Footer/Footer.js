import React from 'react';
import './Footer.css';

const footer = () => {
    return (
       <>
        <div className={"main-footer"}>
            <div className="container">
                                
                    <div className="col">
                        <h2>BARCELONA</h2>
                        <ul className="list-unstyled">
                            <li>Carrer Padilla 78.</li>
                            <li>TEL: 123 456 789</li>
                            <li>08011 Barcelona.</li>
                        </ul>
                    </div>
                    
                    <div className="col1">
                        <h4> ICONOS REDES </h4>
                        <ul className="list-unstyled1">
                            <li> Facebook </li>
                            <li> Instagram </li>
                            <li> Twitter </li>
                        </ul>
                    </div>
            
        </div>
        <div className="row"> 
                <p className="col-small"> Copyright © 2020 NOTAUDIBLE INC. <a className= "letras" href="https://nuclio.school/politica-de-privacidad/"> Política de privacidad y cookies - </a> <a className= "letras" href="https://nuclio.school/condiciones-legales/"> Aviso legal </a> </p>
                <br></br>
                <p className="frase"> MADE WITH LOVE BY US </p>
            </div> 
    </div>
         
       </>
    )
};

export default footer;