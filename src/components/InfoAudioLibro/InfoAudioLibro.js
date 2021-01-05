import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { fetchResource } from "../../api";
import CommentsViewer from './CommentsViewer/CommentsViewer';
import TrackPLayer from '../TrackPlayer/TrackPlayer';
import FavButton from './FavButton/FavButton';
import './InfoAudioLibro.css';

const InfoAudioLibro = () => {
    const [data, setData] = useState();
    let {bookId} = useParams()

    useEffect(() => {
        fetchResource('book/getbook', bookId, 'GET').then(setData);
    }, [bookId])

    return (
        <Fragment>
            {data && 
                <div className="boxInfo">
                    <div className="bookContainer">
                        <div className="TitleBox">{data.title}</div>
                        <FavButton bookId={bookId} />
                        <img className="BookImage" src={data.cover} alt="aqui yo puse mi imagen" />
                    </div>
                    <div className="trackContainer">
                        <div className="trackPlayer">
                            {data.file ? <TrackPLayer id={data.file}/> : <div>No se Ha podido encontrar el archivo</div> } 
                        </div>
                        <div className="bookBoxText">
                            <div className="TitleBox">{data.title}</div>
                            <div className="AuthorBox">Autor/a: {data.author}</div>
                            <div className="CategoryBox">Categoria: {data.category.name}</div>
                            <div className="CreatedByBox">Creado por: {data.user.nickname}</div>
                            <div className="DescriptionBox">Descripción: {data.synopsis} </div>
                        </div>
                    </div>
                    <CommentsViewer bookId={bookId} />
                </div>
            }
        </Fragment>
    )
};

export default InfoAudioLibro;