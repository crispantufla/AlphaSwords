import React, {useEffect, useState} from 'react';
import InputUpdate from './InputUpdate';
import {fetchResource} from "../../api";

const UserPanel = () => {
    const [data, setData] = useState();
    const [emailInput, setEmailInput] = useState(false);
    const [nicknameInput, setNicknameInput] = useState(false);
    const [aboutInput, setAboutInput] = useState(false);
    
    useEffect(() => {
        fetchResource('data/user', localStorage.getItem('id'), 'GET').then(setData);
    }, [emailInput, nicknameInput, aboutInput])

    const changeState = (event) => {
        if ((event.target.id) === "email") 
            return setEmailInput(true);

        if ((event.target.id) === "nickname")
            return setNicknameInput(true);

        if ((event.target.id) === "about")
            return setAboutInput(true);
    }

    return (
        //Que es toda esta mierda bro yo habia dejado un html bonico aqui y ya no ta :c
        <div className="box">
        <div className="containerbox">
        <div className="sectionNote">Modifica los detalles de la configuración de tu cuenta de
            <text style={{ fontWeight: 'bolder' }}>NotAudible</text></div>
        <div>
            <h3 className="h3UserPanel">Email</h3>
        {!emailInput ? 
            <div> {data && data.email} 
                <a id="email" onClick={changeState}> (change)</a>
            </div> : <InputUpdate request="email" setInput={setEmailInput}></InputUpdate>
        }
        </div>
        <div>
            <h3 className="h3UserPanel">Nickname</h3>
        {!nicknameInput ? 
            <div> {data && data.nickname} 
                <a id="nickname" onClick={changeState}> (change)</a>
            </div> : <InputUpdate request="nickname" setInput={setNicknameInput}></InputUpdate>
        }
        </div>
        <div>
            <h3 className="h3UserPanel">About</h3>
        {!aboutInput ? 
            <div> {data && data.about} 
                <a id="about" onClick={changeState}> (change)</a>
            </div> : <InputUpdate request="about" setInput={setAboutInput}></InputUpdate>
        }
        </div>
        
        <div className="underlineDecoration"></div>
    </div>
    
    </div>
    
    );
};

export default UserPanel;