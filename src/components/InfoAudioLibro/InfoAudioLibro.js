import React, { useState, useEffect } from 'react';
import './InfoAudioLibro.css';
import { fetchResource } from "../../api";
import { AddComment } from '../AddComment/AddComment';
import { CommentsViewer } from '../CommentsViewer/CommentsViewer';

const InfoAudioLibro = () => {

    const [data, setData] = useState();

    useEffect(() => {
        fetchResource('data/book', '5fc547952818650da53038e5', 'GET')
            .then(result => { setData(result) });
    }, [])

    return (
        <div className="Fondo">
            <div className="boxInfo">
                <div className="bookBoxImage">
                    <div className="BookTitle">Carátula</div>
                    <img className="BookImage" src="https://static-1.ivoox.com/audios/7/6/5/7/2311470387567_XXL.jpg"></img>
                </div>
                <div className="bookBoxText">
                    <div className="TitleBox">{data && data.title}</div>
                    <div className="AuthorBox">Autor/a: {data && data.author}</div>
                    <div className="CategoryBox">Categoria: {data && data.category}</div>
                    <div className="CreatedByBox">Creado por: {data && data.user}</div>
                    <div className="DescriptionBox">Descripción: A Clarice Starling, joven y ambiciosa estudiante de la academia del FBI, le encomiendan que entreviste a Hannibal Lecter, brillante psiquiatra y despiadado asesino, para conseguir su colaboración en la resolución de un caso de asesinatos en serie. El asombroso conocimiento de Lecter del comportamiento humano y su poderosa personalidad cautivarán de inmediato a Clarice, quien, incapaz de dominarse, establecerá con el una ambigua, inquietante y peligrosa relación.

El silencio de los corderos fue llevada al cine en 1991, y ganó los Premios Oscar a las categorías mejor película, mejor dirección (Jonathan Demme), mejor actriz (Jodie Foster), mejor actor (Anthony Hopkins) y mejor guion adaptado.</div>
                </div>
                <CommentsViewer tituloComment={data} />
                <div className="AddCommentBox">
                    <AddComment userId="5fc13ad510b3225ac01e2f26" />
                </div>
            </div>
        </div>
    )
};

export default InfoAudioLibro;