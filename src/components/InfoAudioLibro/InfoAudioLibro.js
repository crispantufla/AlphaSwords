import React, { useState, useEffect } from 'react';
import { fetchResource } from "../../api";
import { AddComment } from '../AddComment/AddComment';
import { CommentsViewer } from '../CommentsViewer/CommentsViewer';
import { useParams } from 'react-router-dom';
import TrackPLayer from '../TrackPlayer/TrackPlayer';
import './InfoAudioLibro.css';

const InfoAudioLibro = () => {
    const [data, setData] = useState();
    let {bookid} = useParams()

    useEffect(() => {
        fetchResource('user/getbook', bookid, 'GET').then(setData);
    }, [])

    return (
        <div className="Fondo">
            <div className="boxInfo">
                <div className="bookBoxImage">
                    <div className="BookTitle">Carátula</div>
                    <img className="BookImage" src={data && data.cover}></img>
                </div>
                <div className="bookBoxText">
                    <div className="TitleBox">{data && data.title}</div>
                    <div className="AuthorBox">Autor/a: {data && data.author}</div>
                    <div className="CategoryBox">Categoria: {data && data.category.name}</div>
                    <div className="CreatedByBox">Creado por: {data && data.user.nickname}</div>
                    <div className="DescriptionBox">Descripción: {data && data.synopsis} </div>
                </div>
                <div>
                    {data && data.file ? <TrackPLayer id={data.file}/> : <div>No se Ha podido encontrar el archivo</div>} 
                </div>
            </div>
        </div>
    )
};

export default InfoAudioLibro;